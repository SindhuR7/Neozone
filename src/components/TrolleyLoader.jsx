import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TrolleyLoader = () => {
  const cartRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });

    gsap.to("#loaderContainer", {
      y: -8,
      duration: 2,
      ease: "easeInOut",
      yoyo: true,
      repeat: -1,
    });

    tl.from(cartRef.current, {
      x: -250,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.7)",
    });

    tl.to(itemsRef.current, {
      y: 60,
      opacity: 1,
      duration: 0.7,
      ease: "bounce.out",
      stagger: 0.2,
    });

    tl.to(itemsRef.current, {
      y: 75,
      x: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.15,
    });

    tl.to(cartRef.current, {
      rotation: 8,
      yoyo: true,
      repeat: 5,
      transformOrigin: "bottom center",
      duration: 0.1,
      ease: "power1.inOut",
    });

    tl.to(cartRef.current, {
      boxShadow: "0 0 25px rgba(20, 184, 166, 0.6)",
      duration: 0.3,
      yoyo: true,
      repeat: 1,
    });

    tl.to(itemsRef.current, { opacity: 0, scale: 0.8, duration: 0.4 });

    return () => tl.kill();
  }, []);

  return (
    <div
      id="loaderContainer"
      className="flex justify-center items-center h-[60vh] bg-gradient-to-br from-slate-50 via-white to-teal-50"
    >
      <div className="relative w-44 h-44 flex justify-center items-center">
        {/* Cart */}
        <div
          ref={cartRef}
          className="relative w-28 h-18 border-4 border-teal-600 rounded-xl shadow-[0_0_15px_rgba(13,148,136,0.3)] bg-gradient-to-b from-white to-teal-50"
        >
          {/* Handle */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-20 h-7 border-4 border-teal-600 rounded-t-full bg-gradient-to-b from-white to-teal-50 shadow-inner"></div>
          {/* Wheels */}
          <div className="absolute -bottom-4 left-4 w-5 h-5 bg-teal-600 rounded-full shadow-[0_0_10px_rgba(13,148,136,0.6)]"></div>
          <div className="absolute -bottom-4 right-4 w-5 h-5 bg-teal-600 rounded-full shadow-[0_0_10px_rgba(13,148,136,0.6)]"></div>
        </div>

        {/* Floating Glowing Items */}
        <div
          ref={(el) => (itemsRef.current[0] = el)}
          className="absolute top-0 left-8 w-5 h-5 bg-pink-500 rounded-full opacity-0 shadow-[0_0_15px_rgba(236,72,153,0.6)]"
        ></div>
        <div
          ref={(el) => (itemsRef.current[1] = el)}
          className="absolute top-0 right-8 w-5 h-5 bg-amber-400 rounded-full opacity-0 shadow-[0_0_15px_rgba(251,191,36,0.6)]"
        ></div>
        <div
          ref={(el) => (itemsRef.current[2] = el)}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-lime-500 rounded-full opacity-0 shadow-[0_0_15px_rgba(132,204,22,0.6)]"
        ></div>
      </div>
    </div>
  );
};

export default TrolleyLoader;
