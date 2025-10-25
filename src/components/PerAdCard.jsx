import React, { useEffect, useState } from 'react'
import img from '../assets/images/Ad2.png'
import img1 from '../assets/images/ad1min.png'
import { Hearts, Location } from '../assets/Icons'
import { useNavigate } from 'react-router-dom'
import { useAds } from '../assets/ContextApi'

const PerAdCard = ({img, place, price, views, category}) => {
  const navigate = useNavigate()
  const {handleChange} = useAds()

  return (
    <div className='md:h-[363px] h-[248px] md:w-[270px] w-[184px] shadow-lg cursor-pointer rounded-bl-sm rounded-br-sm' onClick={() => handleChange(category)}>
        <div className='h-[148px] md:h-[220px] w-full bg-cover bg-center relative'>
            <img src={img} alt="" />
            <div className='absolute top-1.5 right-2 bg-white rounded-full px-2 py-2 cursor-pointer'>
                <Hearts/>
        </div>
        </div>
        <div className='h-[100px] md:h-[145px] border border-[#EBEBEB] w-full rounded-bl-sm rounded-br-sm flex flex-col justify-start gap-4'>
            <h2 className='text-[16px] md:text-[18px] font-medium'>Canon Camera</h2>
            <p className='w-[200px] h-[50px] bg-white text-[#666666] text-[12px] md:text-[18px] font-semibold flex justify-start items-center px-2 rounded-xl gap-1.5'>
               <Location/>
               {place}
            </p>
            <div className='flex justify-between items-center px-4'>
                <p className='font-bold text-[14px] md:text-[18px]'><span className='line-through'>N</span>{price}</p>
                <p className='text-[#666666]  text-[12px] md:text-[14px] font-normal'>View:{views}</p>
            </div>
        </div>
    </div>
  )
}

export default PerAdCard