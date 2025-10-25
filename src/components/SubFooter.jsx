import React from 'react'

const SubFooter = () => {
  return (
    <>
    <div className='bg-[#001819] w-full h-[450px] md:h-[326px] grid md:grid-cols-4 grid-cols-2 px-3 py-6'>
        <div className='text-[#B2B2B2] flex flex-col gap-2'>
            <h1 className='text-[18px] text-white font-medium'>About Us</h1>
            <ul className='text-[16px] font-normal flex flex-col gap-4'>
                <li>About Mzone</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Billing Policy</li>
                <li>Associates</li>
            </ul>
        </div>

        <div className='text-[#B2B2B2] flex flex-col gap-2'>
            <h1 className='text-[18px] text-white font-medium'>Support</h1>
            <ul className='text-[16px] font-normal flex flex-col gap-4'>
                <li>support@mzone.ug</li>
                <li>Safety Tips</li>
                <li>Contact Us</li>
                <li>FAQ</li>
            </ul>
        </div>

        <div className='text-[#B2B2B2] flex flex-col gap-2 '>
            <h1 className='text-[18px] text-white font-medium'>Our Resources</h1>
            <ul className='text-[16px] font-normal flex flex-col gap-4'>
                <li>Mzone On FB</li>
                <li>Our Instagram</li>
                <li>Our YouTube</li>
                <li>Our Twitter</li>
            </ul>
        </div>

        <div className='text-[#B2B2B2] flex flex-col gap-2'>
            <h1 className='text-[18px] text-white font-medium'>Hot Links</h1>
            <ul className='text-[16px] font-normal flex flex-col gap-4'>
                <li>Mzone Product</li>
                <li>Mzone Affiliate Program</li>
                <li>Mzone Training</li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
    <div className='w-full flex justify-center items-center font-normal text-[16px]'>
        Copyrights 2023. All rights reserved
    </div>
    </>
  )
}

export default SubFooter