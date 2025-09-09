from django.db import models
# Create your models here.


class Education(models.Model):
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()
    
    
class Work(models.Model):
    company = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()
    
    
class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField()
    ordinal = models.IntegerField()
    
    
class Skill(models.Model):
    name = models.CharField(max_length=255)
    ordinal = models.IntegerField()
    
class Profile(models.Model):
    full_name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    bio = models.TextField()
    avatar = models.ImageField(upload_to='uploads/')
    email = models.EmailField(blank=True)
    location = models.CharField(max_length=255, blank=True)
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    website = models.URLField(blank=True)
    
class Testimonial(models.Model):
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255, blank=True)
    comment = models.TextField()
    avatar = models.ImageField(upload_to='uploads/', blank=True)
    ordinal = models.IntegerField(default=0)
    
class ContactSubmission(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
