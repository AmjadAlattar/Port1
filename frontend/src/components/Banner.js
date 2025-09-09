import { useEffect, useRef, useState } from 'react'
import { HiOutlineMinus } from 'react-icons/hi2'

const Banner = ({ profile }) => {
  const ref = useRef(null)
  const [menu, setMenu] = useState(false) //da685ff

  return (
    <div id="home" className="h-full w-full bg-[#110a25ff] pt-10">
      <div className="max-w-10xl py-20 bg-[#231842ff] mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="h-full w-full flex justify-center">
          <img
            src={profile?.avatar || '/media/1718303632409.jpg'}
            alt={profile?.full_name || 'Profile'}
            className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-lg object-cover shadow-cardShadow"
          />
        </div>
        <div className="text-white">
          <h1 className="font-bodyFont text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow">
              {profile?.full_name || 'Your Name'}
          </h1>
          <p className="mt-3 inline-flex items-center gap-3 bg-designColor text-white px-4 py-2 text-sm md:text-base font-extrabold">
            {profile?.role || 'Professional'}
          </p>
          {profile?.bio && (
            <p className="mt-6 text-white text-lg leading-relaxed max-w-xl">
              {profile.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner


