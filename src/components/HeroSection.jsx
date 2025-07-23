'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textContentRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(imageRef.current, { scale: 1.5, opacity: 0, duration: 2.5 })
      .from([titleRef.current, authorRef.current], {
        y: 50,
        opacity: 0,
        stagger: 0.5,
        duration: 2.5,
      }, "-=1");

    gsap.to(textContentRef.current, {
      yPercent: -50, 
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", 
        end: "bottom top",
        scrub: true, 
      },
    });

  }, []);

  return (
    <>
      <div ref={heroRef} className="relative w-full h-svh bg-gray-800 overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(/copyhero3.jpg)" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div
          ref={textContentRef}
          className="absolute bottom-0 left-0 p-8 sm:p-12 md:p-16 text-white"
        >
          <div className="overflow-hidden">
            <p ref={authorRef} className="text-lg sm:text-xl md:text-2xl font-light mb-2">
              Simon Porte Jacquemus
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight max-w-3xl">
              The Best Fashion Photos From The 1950s
            </h1>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default HeroSection;
