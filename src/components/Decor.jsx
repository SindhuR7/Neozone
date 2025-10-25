import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import img from '../assets/images/chair.png';
import Content from './Content';

const Decor = () => {
    // 1. Create a ref for the image wrapper div
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            // --- Entrance Animation ---
            // Initial state: hide and scale down slightly
            gsap.set(imageRef.current, { 
                opacity: 0, 
                scale: 0.8,
                rotationY: 45 // Start slightly rotated for the 3D entrance
            });

            const tl = gsap.timeline();

            // Animate in quickly
            tl.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                rotationY: 0, // Snap to face forward
                duration: 1.0,
                ease: "back.out(1.2)",
                // Start the continuous loop after the entrance is finished
                onComplete: () => startIdleAnimation() 
            });

            // --- Continuous Idle Animation Function (3D Tilt & Float) ---
            const startIdleAnimation = () => {
                gsap.to(imageRef.current, {
                    // Gentle horizontal rotation (Y-axis for 3D spin)
                    rotationY: 5, 
                    // Subtle vertical float
                    y: -5, 
                    // Slight scale change for a "breathing" effect
                    scale: 1.01,
                    
                    duration: 4, // Slow and smooth cycle
                    ease: "sine.inOut", 
                    repeat: -1, // Infinite loop
                    yoyo: true, // Reverses smoothly
                });
            };

        }, imageRef); // GSAP Context

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className='w-[200px] md:w-[415px] h-[250px] bg-[#E8E8E8] rounded-lg flex justify-between items-center '>
                <Content title='12k+ home decor products' textColor='#634436' paraColor='#634436'/>
                
                {/* 2. Attach the ref to the image wrapper */}
                <div ref={imageRef}>
                    <img src={img} alt="Chair" />
                </div>
            </div>
        </>
    );
}

export default Decor;