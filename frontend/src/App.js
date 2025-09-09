import { useRef,useEffect,useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Works from './components/Works'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  const [education,setEducation] = useState([])
  const [work,setWork] =  useState([])
  const [portfolio,setPortfolio] =  useState([])
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

    const portfolioResponse = await fetch('/portfolio')
    const portfolioData = await portfolioResponse.json()
    setPortfolio(portfolioData)

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

      <div className='md:h-[60vh] pt-10 bg-white text-[#0F1113]' ref={educationRef}>
        <div className='mb-6 mx-5'>
          <h1 className='text-3xl uppercase tracking-[6px] font-extrabold text-center'>My Education</h1>
          <p className='text-lg text-gray-600 text-center'>Here is the education I have received</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mx-5'>
          {education && education.map(e =>(
          <div key={e.id} className='bg-white border border-gray-200 rounded-lg p-5 shadow-[1px_3px_6px_0_#110a25ff] hover:shadow-[3px_6px_10px_0_#110a25ff] transition-shadow duration-150'>
            <h3 className='text-lg font-semibold text-[#0F1113]'>{e.school}, {e.degree}</h3>
            <h5 className='py-2 text-gray-500'>{e.years}</h5>
            <p className='text-gray-700'>{e.description}</p>
          </div>
          ))}
        </div>
      </div>

      <div className="mt-3 h-1 w-2/3 bg-black mx-auto rounded"></div>

      <div className='md:h-[60vh] bg-white text-[#0F1113] pt-10' ref={workRef}>
        <div className='mb-6 mx-5'>
          <h1 className='text-3xl uppercase tracking-[6px] font-extrabold text-center'>My Work Experience</h1>
          <p className='text-lg text-gray-600 text-center'>Here is the experience I have</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mx-5'>
          {work && work.map(w =>(          
            <div key={w.id} className='bg-white border border-gray-200 rounded-lg p-5 shadow-[1px_3px_6px_0_#110a25ff] hover:shadow-[3px_6px_10px_0_#110a25ff] transition-shadow duration-150'>
              <h3 className='text-lg font-semibold text-[#0F1113]'>{w.company}, {w.job_title}</h3>
              <h5 className='py-2 text-gray-500'>{w.years}</h5>
              <p className='text-gray-700'>{w.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='md:h-full' ref={portfolioRef}>
        <Works items={portfolio?.map(p => ({...p, image: p.image}))} />
      </div>

      <div className='min-h-screen pt-10' ref={aboutRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-3xl uppercase tracking-[6px] font-extrabold text-center text-[#0F1113]'>About Me</h1>
          <p className='text-lg text-gray-600 text-center'>What I do and use</p>
        </div>
        <AboutMe profile={profile} skills={skill} />
      </div>

      <div className='md:h-[70vh]'  ref={testimonialsRef}>
        <Testimonials items={testimonials} />
      </div>

      <div className='md:h-full pt-10'  ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
