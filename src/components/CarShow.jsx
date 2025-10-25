import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import img from '../assets/images/car.png'; // Main desktop car image
import Content from './Content';
import img2 from '../assets/images/Minicar.png'; // Mobile car image

const CarShow = () => {
    // Ref for the main desktop car image wrapper
    const mainCarRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            // --- 1. Initial Entrance Animation ---
            gsap.set(mainCarRef.current, {
                opacity: 0,
                x: 50, 
                scale: 1.1 
            });

            const tl = gsap.timeline({ 
                defaults: { ease: "power4.out" },
                // Start the continuous loop after the entrance is finished
                onComplete: () => startIdleAnimation() 
            });

            // Entrance: Slide in fast
            tl.to(mainCarRef.current, {
                opacity: 1,
                x: 0, 
                scale: 1, 
                duration: 1.2,
            });


            // --- 2. Continuous Idle Animation Function (Final Enhancement) ---
            const startIdleAnimation = () => {
                gsap.to(mainCarRef.current, {
                    // Vertical movement (float up and down)
                    y: -10, 
                    // Horizontal movement (move slightly right, then left via yoyo)
                    x: 5, // NEW: Moves the car 5 pixels to the right
                    // Rotation (tilt back and forth)
                    rotation: 1.5, 
                    // Subtle scale change (breathing)
                    scale: 1.02,
                    
                    duration: 2.5, 
                    ease: "sine.inOut", 
                    repeat: -1, 
                    yoyo: true, // Key: Automatically reverses the x, y, rotation, and scale
                });
            };

        }, mainCarRef); 

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className='w-full h-[163px] md:w-[850px] md:h-[264px] flex justify-center items-center rounded-lg'>
                <div className='w-full h-full bg-linear-to-r from-purple-800 to-purple-500 flex rounded-lg items-center justify-center'>
                    
                    {/* Content Section */}
                    <Content title='The Right Car For You' />

                    {/* Desktop Car (img) - Now with movement, scaling, and rotation */}
                    <div ref={mainCarRef} className='hidden md:flex'>
                        <img src={img} alt="Full-size Car" />
                    </div>

                    {/* Mobile Car (img2) - Hidden on Desktop */}
                    <div className='flex md:hidden'>
                        <img src={img2} alt="Mini Car" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarShow;