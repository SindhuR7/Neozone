import React, { useEffect, useRef } from 'react'
import { Cars, Electroics, Jobs, Location, MobileCar, Perfume, Property, Search } from '../assets/Icons'
import gsap from 'gsap';

const HeroTitle = () => {
       const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((line, index) => {
      const text = line.innerText;
      line.innerText = "";

      // split line into spans
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; // keep spaces visible
        span.style.display = "inline-block";
        span.style.opacity = 0;
        span.style.transform = "translateY(40px)";
        line.appendChild(span);
      });

      // animate each line with slight delay between them
      gsap.to(line.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.04,
        delay: index * 0.5, // second line starts after first finishes a bit
      });
    });
  }, []);

  return (
    <>
    <div className='flex flex-col justify-center items-center gap-6 '>
        <div className='flex flex-col justify-center items-center '>
           <p
        ref={(el) => (linesRef.current[0] = el)}
        className="text-[32px] md:text-[52px] font-bold leading-8 md:leading-14 tracking-tight"
      >
        Find <span className="text-[#F0D340]">Anything</span> From Your
      </p>
      <p
        ref={(el) => (linesRef.current[1] = el)}
        className="text-[32px] md:text-5xl font-bold leading-8 md:leading-14 tracking-tight"
      >
        Favourite Buyer In <span className="text-[#F0D340]">Pakistan</span>
      </p>
      </div>
        <div className='flex justify-center items-center'>
            <div className='w-[377px] md:w-[600px] h-[42px] md:h-[70px] bg-[#f5f5f5a4] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[40px] rounded-br-[40px] flex justify-center items-center gap-2'>
                <input type="search" placeholder='Search anything...' 
                className='w-[200px] md:w-[300px] h-[30px] md:h-[50px] bg-[#FFFFFF] outline-none rounded-xl text-[#666666]  font-semibold text-[12px] md:text-[18px] px-3'/>
                <div className='w-[100px] md:w-[200px] h-[30px] md:h-[50px] bg-white text-[#666666] text-[12px] md:text-[18px] font-semibold flex justify-start items-center px-2 rounded-xl gap-1.5'>
                    <Location/>
                    Pakistan
                </div>
                <div className='md:w-[54px] w-[50px] h-[30px] md:h-[50px] bg-black rounded-tl-lg rounded-bl-lg rounded-tr-[28px] rounded-br-[28px] flex justify-center items-center'>
                    <Search/>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-6'>
            <div className='flex flex-col justify-center items-center gap-2'><Jobs/> <span>Jobs</span></div>
            <div className='flex flex-col justify-center items-center gap-2'><Cars/> <span>Cars</span></div>
            <div className='flex flex-col justify-center items-center gap-2'><Electroics/> <span>Electroics</span></div>
            <div className='flex flex-col justify-center items-center gap-2'><Perfume/> <span>Perfume</span></div>
            <div className='flex flex-col justify-center items-center gap-2'><Property/> <span>Property</span></div>
        </div>

    </div>
     </>
  )
}

export default HeroTitle