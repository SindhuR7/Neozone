import React from 'react'
import { MobileCar } from '../assets/Icons'

const MobileCategory = ({logo, title, bgColor}) => {
  return (
<>
 <div className='w-[54px] h-[85px] flex flex-col justify-center items-center gap-3'>
    <div className='w-[50px] h-[50px] rounded-lg flex justify-center items-center' style={{backgroundColor:bgColor}}>
      {logo}
    </div>
    <h1 className='text-[14px] text-center'>{title}</h1>
 </div>
</>
)
}

export default MobileCategory