import { useEffect, useRef, useState } from 'react'
import { HiOutlineMinus } from 'react-icons/hi2'

const Banner = ({ profile }) => {
  const ref = useRef(null)
  const [menu, setMenu] = useState(false) //da685ff

  return (
    <div id="home" className="h-full w-full bg-gradient-to-r from-blue-950 to-blue-900 pt-10">
      <div className="max-w-7xl py-[1%] bg-gradient-to-r from-blue-950 to-blue-900 mx-auto px-6 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
        <div className="h-full w-full flex justify-center">
          <img
            src={profile?.avatar || '/media/IMG_0932.jpg'}
            alt={profile?.full_name || 'Profile'}
            className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-lg border-4 border-white object-cover"
          />
        </div>
        <div className="text-white">
          <h1 className="font-bodyFont text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow">
              {profile?.full_name || 'Your Name'}
          </h1>
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


