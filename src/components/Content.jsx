import React from 'react'

const Content = ({title, textColor='white', paraColor='#DEDEDE'}) => {
  return (
    <div className='w-[188px] h-[285px] flex flex-col justify-start gap-3 mt-16 ml-3'>
              <h1 className='md:text-[26px] text-[16px] font-bold tracking-tight leading-7 ' style={{color:textColor}}>{title}</h1>
              <p className=' md:text-[18px] text-[12px]' style={{color:paraColor}}>Lorem ipsum dolor sit amet consectetur</p>
              <button className='bg-white px-1 w-[120px] py-2 font-medium rounded-xl mt-4'>View Product</button>
    </div>
  )
}

export default Content