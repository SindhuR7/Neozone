import React, { useState } from 'react'
import { Eye } from '../assets/Icons'
import { FaRegEye } from "react-icons/fa6";

const Input = ({label, placeholder,name, value, type,textSize, textBtn}) => {
  const [showPassword, setshowPassword] = useState(false)
  const [showType, setShowType] = useState('password')

  const changeIcon = () => {
    setshowPassword(!showPassword)
    setShowType('text')
  }

  const currentType = type === 'password' && showPassword ? 'text' : type;
  return (
    <>
    <div className='flex flex-col gap-2'>
        <label htmlFor="email" className='text-sm md:text-xl text-white'>{label}</label>
        <div className='flex justify-between items-center w-[340px] md:w-[400px] bg-[#1d5757] rounded-2xl px-2'>
           <input type={currentType} placeholder={placeholder} onChange={textBtn} name={name} value={value}
        className='w-[320px] md:w-[400px] h-[45px] md:h-[65px]  font-[Trip sans] text-[16px]  px-3 py-2 outline-none  text-left text-[#badef0] font-normal focus:text-[18px]' style={{fontSize:textSize}}
        />
          {
          type === 'password' && (
            <div onClick={changeIcon}>
              {
                showPassword ? <FaRegEye/> :  <Eye/> 
              }
            </div>
          )
        }
        </div>
    </div>
    </>
  )
}

export default Input