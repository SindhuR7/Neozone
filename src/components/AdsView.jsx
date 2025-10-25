import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Fire } from '../assets/Icons'
import { useAds } from '../assets/ContextApi'
import gsap from 'gsap'
const PerAdCard = lazy(() => import('../components/PerAdCard'))

const AdsView = () => {
  const {firstAds} = useAds()
  const [visible, setVisible] = useState(8)
  const adsRef = useRef([])

  useEffect(() => {
     gsap.fromTo(
      adsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      }
    )
  },[visible])
  const handleViewMore = () => {
    setVisible((prev) => (prev === 8 ? firstAds.length : 8 ))
  }

  return (
    <>
   <div className='px-17'>
     <h1 className='flex  items-center py-2'>
        <Fire/>
        <span className='text-[30px] font-bold'>Hot Ads On Mzone</span>
    </h1>

    <Suspense fallback={<p></p>}/>
   <div className='grid grid-cols-2 md:grid md:grid-cols-4 gap-5'>
           {
            firstAds.slice(0,visible).map((e,i) => (
              <div
              key={e.id}
              ref={(el) => (adsRef.current[i] = el )}
              >
                <PerAdCard 
              img={e.image}
              place={e.place}
              price={e.price}
              views={e.views}
              category={e.category}
              />
              </div>
            ))
           }
   </div>
   <div className='flex justify-center items-center py-10'>
    <button className='bg-[#1F999A] px-3 py-2 text-white rounded-xl' onClick={handleViewMore}>
    {visible === 8 ? 'View More Ads': 'Show Less Ads'}
   </button>
   </div>
   </div>
    </>
  )
}

export default AdsView

// img, place, price, views, category