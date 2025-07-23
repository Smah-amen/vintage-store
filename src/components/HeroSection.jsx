'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const textPanelRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const cityRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // GSAP animations remain the same as they target the initial state
    // which is the desktop layout. They will work fine on mobile too.
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1.2 } });

    tl.from(textPanelRef.current, { xPercent: 100 })
      .from(imageContainerRef.current, { xPercent: -100 }, "<")
      .from(imageRef.current, { scale: 1.3, ease: "power2.out", duration: 1.5 }, "<")
      .from([titleRef.current, authorRef.current, cityRef.current], {
        yPercent: 120,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      }, "-=0.8")
      .from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
      }, "-=0.5");

  }, []);

  return (
    // On mobile (default): flex-col, h-auto to allow content to determine height
    // On medium screens and up (md:): flex-row, fixed height
    <div className="relative w-full h-auto md:h-[800px] bg-white flex flex-col md:flex-row overflow-hidden">
      
      {/* Image Panel */}
      {/* On mobile: w-full, h-[400px] (or your preferred height) */}
      {/* On medium screens and up: w-[60%] (Corrected from 70% to make total 100%), h-full */}
      <div ref={imageContainerRef} className="w-full h-[450px] md:w-[60%] md:h-full overflow-hidden">
        <div
          ref={imageRef}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(/copyhero3.jpg)" }}
        >
        </div>
      </div>

      {/* Text Panel */}
      {/* On mobile: w-full, padding adjusted */}
      {/* On medium screens and up: w-[40%], padding adjusted */}
      <div ref={textPanelRef} className="w-full md:w-[40%] bg-white flex flex-col justify-center p-8 sm:p-12 md:p-16">
        <div className="overflow-hidden">
            {/* Font sizes adjusted for mobile vs. desktop */}
            <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              The Best Fashion Photos From The 1950s
            </h1>
        </div>
        <div ref={lineRef} className="w-20 h-1 bg-gray-900 my-5 md:my-6"></div>
        <div className="overflow-hidden">
            <p ref={authorRef} className="text-lg sm:text-xl md:text-2xl text-gray-700">
              Simon Porte Jacquemus
            </p>
        </div>
        <div className="overflow-hidden">
            <p ref={cityRef} className="text-base md:text-lg text-gray-500 mt-1">
              Paris
            </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
