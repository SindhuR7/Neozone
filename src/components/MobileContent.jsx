import React from 'react'
import { Apple, Approve, PlayStore } from '../assets/Icons'
import IconButton from './IconButton'

const MobileContent = () => {
  return (
    <div className='w-[305px] md:w-[581px] h-[370px] flex justify-center items-center text-center flex-col gap-6'>
        <h1 className='text-[26px] md:text-[46px] text-[#0F172A] font-bold leading-8 md:leading-14'>Try Our Mobile App For Better User Experience</h1>
        <p className=' font-normal text-[16px] md:text-[21px] text-[#666666] leading-8'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit molli.</p>
        <div className='flex justify-start items-center gap-4'>
          <IconButton iconName={<Apple/>} des='Download on the' title='Apple Store'/>
          <IconButton iconName={<PlayStore/>} des='Get it on' title='Google Play'/>
        </div>
        <div>
            <p className='flex gap-2 items-center'>
            <Approve/>
            <span className='text-[#666666] text-[16px] md:text-[21px] font-medium'>Access the full kit from mobile app</span>
        </p>
        <p className='flex gap-2 items-center'>
            <Approve/>
            <span className='text-[#666666] text-[16px] md:text-[21px] font-medium'>Unlimited bandwidth</span>
        </p>
        </div>
    </div>
  )
}

export default MobileContent