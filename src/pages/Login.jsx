import React, { useState } from 'react'
import Input from '../components/Input'
import LoginButton from '../components/LoginButton'
import { Facebook, Google, Icons } from '../assets/Icons'
import LoginTitle from '../components/LoginTitle'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [mydata, setMydata] = useState({
      email: '',
      password : '',
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
      const {name, value} = e.target
      setMydata({
        ...mydata,
        [name] : value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const storeData = JSON.parse(localStorage.getItem('userData'))

      if(!storeData){
        setError('No account Found. Please Sign Up')
      }

      if(mydata.email === storeData.email && mydata.password === storeData.password){
        navigate('/')
      }

    }
    const handleMove = () => {
        navigate('/signUp')
    }
  return (
    <>
    <div className='w-full bg-[#1f999a] h-screen flex justify-center items-center' >
       <div className='bg-[#0f4b4c] w-[380px] md:w-[440px] h-[600px] rounded-[20px] flex flex-col justify-center items-center gap-4.5'>
        <LoginTitle title='Login with your email'/>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-2.5'>
          <Input label='Email' placeholder='Type here...' type='text' name='email' value={mydata.email} textBtn={handleChange}/>
        <Input label='Password' placeholder='........' type='password' name='password' textSize='25px' value={mydata.password} textBtn={handleChange}/>
        {
          error && <p className='text-red-600'>{error}</p>
        }
        <LoginButton typeBtn='submit'/>
        </form>
        <p className='font-normal text-white text-[16px]'>Don't have an account?<span onClick={handleMove} className='underline font-bold text-xl cursor-pointer'>Sign Up</span></p>
        <div className='flex justify-center items-center gap-3'>
                <Icons/>
                <Google/>
                <Facebook/>
        </div>
       </div>
    </div>
    </>
  )
}

export default Login