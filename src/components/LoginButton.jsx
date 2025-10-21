import React from 'react'

const LoginButton = ({typeBtn, width}) => {
  return (
    <>
    <button 
    type={typeBtn}
    className='bg-[#1f999a] rounded-xl h-[48px] md:h-[55px] w-[320px] md:w-[400px] text-white font-bold text-[18px] font-trip-sans cursor-pointer' style={{width:width}}>
        Login
    </button>
    </>
  )
}

export default LoginButton