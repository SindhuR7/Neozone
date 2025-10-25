import React from 'react'

const PriceTag = ({label,value}) => {
  return (
    <>
    <div className='w-[120px] h-[50px] bg-white rounded-xl border-[#B0B0B0] border relative'>
        <span className='absolute -top-3 left-2 text-[#666666] px-1 text-sm bg-white  border-none'>
            {label}
        </span>
        <p className='text-[16px] font-medium pt-4 px-3'><span className='line-through'>N</span>{value}</p>
    </div>
    </>
  )
}

export default PriceTag