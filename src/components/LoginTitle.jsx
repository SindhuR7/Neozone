import React from 'react'

const LoginTitle = ({title}) => {
  return (
    <>
  <div className='flex flex-col justify-center items-center'>
    <h3 className='font-normal text-2xl text-[#badef0]'>Welcome Back!</h3>
    <h1 className='font-bold text-white md:text-[31px] text-2xl'>{title}</h1>
  </div>
    </>
  )
}

export default LoginTitle