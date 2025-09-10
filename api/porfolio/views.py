from django.shortcuts import render
from django.contrib.auth.models import  User
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated, AllowAny
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import Education, Work, Portfolio, Skill, Profile, Testimonial, ContactSubmission

from .serializers import  UserSerializer,EducationSerializer,WorkSerializer,PortfolioSerializer,SkillSerializer,ProfileSerializer, TestimonialSerializer, ContactSubmissionSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
# Create your views here.
class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all().order_by('ordinal')
    serializer_class = TestimonialSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ContactSubmissionViewSet(viewsets.ModelViewSet):
    queryset = ContactSubmission.objects.all().order_by('-created_at')
    serializer_class = ContactSubmissionSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

@method_decorator(csrf_exempt, name='dispatch')
class ContactSubmissionViewSet(viewsets.ModelViewSet):
    queryset = ContactSubmission.objects.all().order_by('-created_at')
    serializer_class = ContactSubmissionSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact = serializer.save()

#Send email notification
        try:
            subject = f'New Contact Form Submission from {contact.name}'
            message = f'''
            New contact form submission:

            Name: {contact.name}
            Email: {contact.email}
            Message: {contact.message}

            Submitted at: {contact.created_at}
            '''

            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.DEFAULT_FROM_EMAIL],  # Send to yourself
                fail_silently=False,
            )
        except Exception as e:
            # Log error but don't fail the request
            print(f"Email sending failed: {e}")

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

#Alternative simple view for contact form

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def contact_submit(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            contact = ContactSubmission.objects.create(
                name=data.get('name'),
                email=data.get('email'),
                message=data.get('message')
            )

#Send email
            try:
                subject = f'New Contact Form Submission from {contact.name}'
                message = f'''
                New contact form submission:

                Name: {contact.name}
                Email: {contact.email}
                Message: {contact.message}

                Submitted at: {contact.created_at}
                '''

                send_mail(
                    subject,
                    message,
                    settings.DEFAULT_FROM_EMAIL,
                    [settings.DEFAULT_FROM_EMAIL],
                    fail_silently=False,
                )
            except Exception as e:
                print(f"Email sending failed: {e}")

            return JsonResponse({'status': 'success', 'message': 'Message sent successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)
    
    
    
    
    
    