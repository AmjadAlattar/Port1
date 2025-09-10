import { useRef,useEffect,useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [education,setEducation] = useState([])
  const [work,setWork] =  useState([])
  const [skill,setSkill] =  useState([])
  const [profile,setProfile] = useState(null)
  const [testimonials,setTestimonials] = useState([])

  useEffect(() =>{
    getData()
  },[])
  const homeRef = useRef(null)
  const educationRef = useRef(null)
  const workRef = useRef(null)
  const portfolioRef = useRef(null)
  const skillRef = useRef(null)
  const aboutRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  const getData = async () =>{
    const educationResponse = await fetch('/education')
    const educationData = await educationResponse.json()
    setEducation(educationData)

    const workResponse = await fetch('/work')
    const workData = await workResponse.json()
    setWork(workData)

    const skillResponse = await fetch('/skill')
    const skillData = await skillResponse.json()
    setSkill(skillData)

    const profileResponse = await fetch('/profile')
    const profileData = await profileResponse.json()
    setProfile(profileData?.[0] || null)

    const testimonialsResponse = await fetch('/testimonials')
    const testimonialsData = await testimonialsResponse.json()
    setTestimonials(testimonialsData)
  }

  return (
    <>
      <Nav homeRef={homeRef} educationRef={educationRef} workRef={workRef} portfolioRef={portfolioRef} aboutRef={aboutRef}  testimonialsRef={testimonialsRef} contactRef={contactRef}/>

      <div className='md:h-[54vh] pt-10' ref={homeRef}>
        <Banner profile={profile} />
      </div>

      <div className='md:h-[60vh] pt-10 bg-lightSurface text-[#0F1113] scroll-mt-24' ref={educationRef}>
        <div className='mb-6 mx-5'>
          <h1 className='text-3xl uppercase tracking-[6px] font-extrabold text-center'>My Education</h1>
          <p className='text-lg text-gray-600 text-center'>Here is the education I have received</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mx-5'>
          {education && education.map(e =>(
          <div key={e.id} className='bg-white border border-gray-200 rounded-lg p-5 shadow-[1px_3px_6px_0_#110a25ff] hover:shadow-[3px_6px_10px_0_#110a25ff] transition-shadow duration-150'>
            <h3 className='text-xl font-semibold text-[#0F1113]'>{e.school}, {e.degree}</h3>
            <h5 className='py-2 text-gray-500'>{e.years}</h5>
            <p className='text-gray-700'>{e.description}</p>
          </div>
          ))}
        </div>
      </div>

        <div className="mt-3 h-1 w-2/3 bg-black mx-auto rounded"></div>

      <div className='md:h-[60vh] bg-lightSurface text-[#0F1113] pt-10 scroll-mt-24' ref={workRef}>
        <div className='mb-6 mx-5'>
          <h1 className='text-3xl uppercase tracking-[6px] font-extrabold text-center'>My Work Experience</h1>
          <p className='text-lg text-gray-600 text-center'>Here is the experience I have</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mx-5'>
          {work && work.map(w =>(          
            <div key={w.id} className='bg-white border border-gray-200 rounded-lg p-5 shadow-[1px_3px_6px_0_#110a25ff] hover:shadow-[3px_6px_10px_0_#110a25ff] transition-shadow duration-150'>
              <h3 className='text-xl font-semibold text-[#0F1113]'>{w.company}, {w.job_title}</h3>
              <h5 className='py-2 text-gray-500'>{w.years}</h5>
              <p className='text-gray-700'>{w.description}</p>
            </div>
          ))}
        </div>
      </div>

        <div className="mt-3 h-1 w-2/3 bg-black mx-auto rounded"></div>

      <div className='min-h-screen pt-10 scroll-mt-24 bg-lightSurface' ref={aboutRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-3xl uppercase tracking-[6px] font-extrabold text-center text-[#0F1113]'>About Me</h1>
          <p className='text-lg text-gray-600 text-center'>What I do and use</p>
        </div>
        <AboutMe profile={profile} skills={skill} />
      </div>

        <div className="mt-3 h-1.5 w-2/3 bg-black mx-auto rounded"></div>

      <div className='md:h-[70vh] scroll-mt-24'  ref={testimonialsRef}>
        <Testimonials items={testimonials} />
      </div>

        <div className="mt-3 h-1.5 w-2/3 bg-black mx-auto rounded"></div>

      <div className='md:h-full'  ref={contactRef}>
        <Contact />
      </div>

          <footer class="bg-blue-950 py-12">
            <div class="container mx-auto px-4">
                <div class="flex justify-center items-center mb-5">
                   <div className="flex gap-4">
                      <a href="https://www.facebook.com/momtazd?mibextid=wwXIfr&mibextid=wwXIfr" className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800">
                        <FontAwesomeIcon icon={faFacebookF } size="lg" />
                      </a>
                      <a href="#" className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </a>
                      <a href="#" className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800">
                        <FontAwesomeIcon icon={faTwitter } size="lg" />
                      </a>
                    </div>
                </div>
                <div class="text-center text-gray-600 dark:text-gray-400 text-sm">
                    <p>&copy; 2025 Dr. Momtaz Deeb Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  );
}

export default App;
