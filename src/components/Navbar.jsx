import React, { useEffect, useState } from 'react'
import { User } from '../assets/Icons'
import img from '../assets/images/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const handleScrolled = () => {
        if(window.scrollY > 50){
          setScrolled(true)
        }else{
          setScrolled(false)
        }
      }
      window.addEventListener('scroll',handleScrolled)

      return () => window.removeEventListener('scroll',handleScrolled)
    },[]
  )
    const handlepage = () => {
        navigate("/login")
    }

    const isHome = location.pathname === '/'
  return (
       <div className={`fixed top-0 w-full flex justify-between items-start z-50 px-6 py-6 transition-all duration-200  ${
        isHome ? scrolled ? 'bg-[#1F999A] shadow-sm' : 'bg-transparent' :' bg-[#1F999A] shadow-sm' 
         }`}>
             <img src={img} alt="Logo" /> 
        <div className='flex justify-between items-center gap-6'>
            <div className='flex justify-center items-center gap-2 text-white cursor-pointer hover:underline transition-all duration-150' onClick={handlepage}>
                <User/>
                login/SignUp
            </div>
            <button className='rounded-xl px-3 py-3 bg-white text-black'>
            Start Selling
        </button>
        </div>
     </div>
  )
}

export default Navbar