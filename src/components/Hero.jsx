import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import bgImage from '../assets/images/HeroImage.png';
import Navbar from './Navbar';
import HeroTitle from './HeroTitle';

// --- Simplified MZone Loader Component (Unchanged) ---
const Loader = ({ setLoadingComplete }) => {
  const loaderRef = useRef(null);
  const mzoneTextRef = useRef(null); 
  
  const staticDuration = 1.5; 

  useLayoutEffect(() => {
    gsap.set(mzoneTextRef.current, { opacity: 0, scale: 1.1 }); 

    const tl = gsap.timeline({
      onComplete: () => {
        setLoadingComplete(true);
      }
    });

    // --- MZone Loader Animation Sequence ---
    tl.to(mzoneTextRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.2)"
    }, 0)
    .to({}, { duration: staticDuration }, ">") 
    .to(mzoneTextRef.current, {
        opacity: 0, 
        y: -10,
        filter: 'blur(3px) brightness(1.5)', 
        duration: 0.4, 
        ease: "power2.in"
    }, ">") 
    .to(loaderRef.current, {
      y: '-100%', 
      duration: 1.0,
      ease: "power4.inOut" 
    }, ">-0.3"); 

  }, [setLoadingComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed top-0 left-0 w-full h-full z-9999 flex justify-center items-center"
      style={{
        backgroundImage: 'linear-gradient(160deg, #10002b 0%, #4a004f 35%, #0d1b2a 100%)',
      }}
    >
      <h1 ref={mzoneTextRef} className="text-white text-5xl md:text-8xl font-black tracking-widest">
        MZone
      </h1>
    </div>
  );
};
// ------------------------------------

const Hero = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  const heroRef = useRef(null);
  const navbarRef = useRef(null);
  const titleContainerRef = useRef(null);

  useLayoutEffect(() => {
    if (!loadingComplete) return; 

    // FIX 1: Only manage the opacity of the navbarRef wrapper.
    // The Navbar component itself is fixed and handles its position/scrolling state.
    gsap.set(navbarRef.current, { opacity: 0 }); 
    
    // Initial State: Content is hidden and distorted (Dribbble style) - This remains on the HeroTitle
    gsap.set(titleContainerRef.current, { opacity: 0, y: 50, skewX: -10, scaleX: 0.9 });
      
    // Create the Content Timeline
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power4.out" }
    });
    
    // Step A: Navbar FADES in (No y, skew, or scale transformation)
    tl.to(navbarRef.current, { 
        opacity: 1,
    }, 0) 
    
    // Step B: HeroTitle Slides Up and Snaps (Main Content from Bottom)
    .to(titleContainerRef.current, {
        opacity: 1, y: 0, skewX: 0, scaleX: 1, 
    }, "<0.1"); 

  }, [loadingComplete]); 

  return (
    <>
      {/* Render the Loader while loadingComplete is false */}
      {!loadingComplete && <Loader setLoadingComplete={setLoadingComplete} />}

      {/* Main Hero Content */}
      <div 
        ref={heroRef} 
        className='w-full h-[553px] md:h-[800px] bg-cover bg-center bg-no-repeat z-40 text-white relative' 
        style={{backgroundImage: `url(${bgImage})`}}
      >
        {/* FIX 2: Ensure the Navbar is NOT inside a div that is relative or static, 
           but since Navbar is fixed, this surrounding div doesn't affect its position. 
           We keep the ref on the div for GSAP opacity control.
        */}
        <div ref={navbarRef}> 
          <Navbar/> 
        </div>
        
        <div 
          ref={titleContainerRef} 
          className='flex justify-center items-center pt-54 md:pt-74'
        >
          <HeroTitle/>
        </div>
      </div>
    </>
  );
}

export default Hero;