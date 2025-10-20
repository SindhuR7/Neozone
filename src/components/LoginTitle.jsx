import React from 'react'

const LoginTitle = ({title}) => {
  return (
    <>
  <div className='flex flex-col justify-center items-center'>
    <h3 className='font-normal text-2xl text-[#badef0]'>Welcome Back!</h3>
    <h1 className='font-bold text-white text-[31px]'>{title}</h1>
  </div>
    </>
  )
}

export default LoginTitle