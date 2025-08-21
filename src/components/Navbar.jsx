import React from 'react'
import logo from "../assets/DSlogo5.png"

function Navbar() {
  return (
    <nav className='flex items-center justify-between px-6 py-4 shadow-md'>
      {/* Logo */}
      <div className='flex items-center '>
        <img className='w-40 ' src={logo} alt='logo' />
      </div>

      {/* Action Buttons */}
      <div className='flex items-center px-8 gap-4'>
        {/* Download Resume Button */}
        <a
          href="https://drive.google.com/file/d/1Xi-0bU76Gq4uUlGdcnwtPxr8c5MebOd9/view?usp=sharing"
          download
          target='_blank'
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>

        {/* Hire Me Button (scrolls to #contact section) */}
        <a
          href="#contact"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar




// import React from 'react'
// import logo from '../assets/DSlogo3.png'
// import { FaLinkedin } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa6'
// import { FaSquareXTwitter } from 'react-icons/fa6'
// import { FaInstagram } from 'react-icons/fa'

// const Navbar = () => {
//   return (
//     <nav className=' mb-20 flex items-center justify-between py-6'>
//     <div className="flex flex-shrink-0 items-center">
//       <img className='mx-2 w-20 bg-none' src={logo} alt="logo" />
//     </div>
//     <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
//       <FaLinkedin/>
//       <FaGithub/>
//       <FaSquareXTwitter/>
//       <FaInstagram/>
//     </div>
//   </nav>
//   )
// }

// export default Navbar