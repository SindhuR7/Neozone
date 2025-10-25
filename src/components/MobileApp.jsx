import React from 'react'
import MobileContent from './MobileContent'
import MobileShape from './MobileShape'

const MobileApp = () => {
  return (
    <>
    <div className='bg-[#FAFAFA] w-full h-[400px] flex flex-col md:flex-row justify-center items-center gap-1 overflow-hidden'>
        <MobileContent/>
        <MobileShape/>
    </div>
    </>
  )
}

export default MobileApp