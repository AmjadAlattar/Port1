import React, { useState } from 'react';

const Nav = ({ homeRef, educationRef, workRef, aboutRef, testimonialsRef, contactRef }) => {
  const [showMenu, setShowMenu] = useState(false);

  const executeScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowMenu(false); // close mobile menu after click
  };

  return (
    <>
      {/* Header */}
      <header className="fixed w-full h-[9vh] top-0 z-50 bg-blue-950 shadow-[0_1px_2px_0_rgba(255,255,255,0.7)]">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center text-xl py-4 md:py-7">
            <div className="flex items-center">
              <span className="text-2xl text-white font-extrabold">Dr. Momtaz Deeb</span>
              <span className="text-white text-2xl ml-1">●</span>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-12">
              <li onClick={() => executeScroll(homeRef)} className="text-white hover:text-primary dark:hover:text-primary cursor-pointer transition-colors transform transition-transform hover:-translate-y-0.5">Home</li>
              <li onClick={() => executeScroll(educationRef)} className="text-white hover:text-primary dark:hover:text-primary cursor-pointer transition-colors transform transition-transform hover:-translate-y-0.5">Education</li>
              <li onClick={() => executeScroll(workRef)} className="text-white hover:text-primary dark:hover:text-primary cursor-pointer transition-colors transform transition-transform hover:-translate-y-0.5">Work</li>
              <li onClick={() => executeScroll(aboutRef)} className="text-white hover:text-primary dark:hover:text-primary cursor-pointer transition-colors transform transition-transform hover:-translate-y-0.5">About</li>
              <li onClick={() => executeScroll(testimonialsRef)} className="text-white hover:text-primary dark:hover:text-primary cursor-pointer transition-colors transform transition-transform hover:-translate-y-0.5">Testimonials</li>
              <li onClick={() => executeScroll(contactRef)} className="text-white hover:text-primary dark:hover:text-primary cursor-pointer transition-colors transform transition-transform hover:-translate-y-0.5">Contact</li>
            </ul>

            {/* Mobile buttons */}
            <div className="flex items-center space-x-4">
              <button className="md:hidden p-2" onClick={() => setShowMenu(!showMenu)}>
                <div className="w-6 h-4 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all"></span>
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all"></span>
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all"></span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-blue-950 z-50 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="container mx-auto px-4 h-full flex flex-col">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-3xl text-white font-extrabold">Dr. Momtaz Deeb</span>
              <span className="text-primary text-white text-2xl ml-1">●</span>
            </div>
          </div>
          <ul className="flex-1 flex flex-col justify-center items-center space-y-8">
            <li onClick={() => executeScroll(homeRef)} className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">Home</li>
            <li onClick={() => executeScroll(educationRef)} className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">Education</li>
            <li onClick={() => executeScroll(workRef)} className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">Work</li>
            <li onClick={() => executeScroll(aboutRef)} className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">About</li>
            <li onClick={() => executeScroll(testimonialsRef)} className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">Testimonials</li>
            <li onClick={() => executeScroll(contactRef)} className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
