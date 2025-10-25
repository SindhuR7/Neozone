import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import img from '../assets/images/Home.png';
import Content from './Content';

const ProHome = () => {
    // 1. Create a ref for the image wrapper div
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            // Initial State: Slightly hide the image to make the entrance smooth
            gsap.set(imageRef.current, { 
                opacity: 0, 
                scale: 0.9 
            });

            // --- Entrance Animation ---
            const tl = gsap.timeline();

            tl.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.0,
                ease: "power2.out",
                // Start the continuous rotation immediately after the entrance
                onComplete: () => startIdleAnimation() 
            });

            // --- Continuous Idle Animation Function (Rotate Left/Right) ---
            const startIdleAnimation = () => {
                gsap.to(imageRef.current, {
                    // Rotate the image gently 3 degrees clockwise, then counter-clockwise
                    rotation: 3, 
                    // Add a subtle vertical float for a natural effect
                    y: -5,
                    
                    duration: 4, // Duration of one cycle (4 seconds for a slow float)
                    ease: "sine.inOut", // Smooth, wave-like motion
                    repeat: -1, // Repeat infinitely
                    yoyo: true, // Go back and forth smoothly
                });
            };

        }, imageRef); // GSAP Context

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className='w-[200px] md:w-[415px] h-[250px] bg-[#9d6c433d] rounded-lg flex justify-between items-center '>
                <Content title='Find The Right House For You' textColor='black' paraColor='#14100D'/>
                
                {/* 2. Attach the ref to the image wrapper */}
                <div ref={imageRef}>
                    <img src={img} alt="House Illustration" />
                </div>
            </div>
        </>
    );
}

export default ProHome;