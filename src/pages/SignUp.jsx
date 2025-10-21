import React, { useState } from 'react'
import LoginTitle from '../components/LoginTitle'
import Input from '../components/Input'
import LoginButton from '../components/LoginButton'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [mydata, setMydata] = useState({
      firstName : '',
      lastName : '',
      PhoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
    const [eror, setError] = useState('')

    const handleChange = (e) => {
      const {name, value} = e.target
      
      if(eror){
        setError('')
      }
      
      setMydata({
        ...mydata, [name] : value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      if(!mydata.firstName || !mydata.lastName || !mydata.PhoneNumber || !mydata.email || !mydata.password || !mydata.confirmPassword){
        setError("Please fill the fields first!")
        return
      }

      if(mydata.password !== mydata.confirmPassword){
        setError("Re-enter the Password")
        setMydata({
          ...mydata,
          password:'',
          confirmPassword: '',
        })
      }
      localStorage.setItem('userData',JSON.stringify(mydata))
      console.log("data = ",mydata)

      setTimeout(()=> {
        navigate('/')
      },2000)
    }
    const handleBack = () => {
        navigate('/')
    }
  return (
    <>
      <div className='w-full bg-[#1f999a] md:h-screen flex justify-center items-center' >
       <div className='bg-[#0f4b4c] w-[380px] md:w-[1000px] md:h-[600px] rounded-[20px] flex flex-col justify-center items-center gap-4.5'>
        <LoginTitle title='Sign Up with your Account'/>
       <form onSubmit={handleSubmit} className='flex flex-col gap-2.5'>
        <div className='md:grid md:grid-cols-2 gap-4'>
        <Input label='First Name'name='firstName' placeholder='Type here...' type='text' textBtn={handleChange} value={mydata.firstName}/>
        <Input label='Last Name' name='lastName' placeholder='Type here...' type='text' textBtn={handleChange} value={mydata.lastName}/>
        <Input label='Phone Number' name='PhoneNumber' placeholder='Type here...' type='text' textBtn={handleChange} value={mydata.PhoneNumber}/>
        <Input label='Email' name='email' placeholder='Type here...' type='text' textBtn={handleChange} value={mydata.email}/>
        <Input label='Password' name='password' placeholder='........' type='password' textSize='25px' textBtn={handleChange} value={mydata.password}/>
        <Input label='Confirm Password' name='confirmPassword' placeholder='........' type='password' textSize='25px' textBtn={handleChange} value={mydata.confirmPassword}/>
        {
          eror && <p className='text-red-600'>{eror}</p>
        }
       </div>
         <LoginButton typeBtn='submit' width='200px'/>       
       </form>
      <p className='font-normal text-white text-[16px]'>Already have an account?<span onClick={handleBack} className='underline font-bold text-xl cursor-pointer'>Login In</span></p>
       </div>
    </div>
    </>
  )
}

export default SignUp