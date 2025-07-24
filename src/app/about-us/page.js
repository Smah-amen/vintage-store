'use client'; 

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGem, FaRegLightbulb, FaHandHoldingHeart } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ValueCard = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center h-full">
    <div className="text-4xl text-[#762342] mb-4">{icon}</div>
    <h3 className="text-2xl font-serif font-bold text-[#5c4438] mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

function AboutUsPage() {
  const heroTitleRef = useRef(null);
  const missionSectionRef = useRef(null);
  const valuesSectionRef = useRef(null);
  const behindScenesRef = useRef(null);

  useEffect(() => {
    gsap.from(heroTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.2,
    });

    const sections = [missionSectionRef.current, valuesSectionRef.current, behindScenesRef.current];
    
    sections.forEach((section) => {
      gsap.from(section, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%', 
          toggleActions: 'play none none none',
        },
      });
    });

  }, []);

  return (
    <div className="bg-[#f4f0ed]">
      <header className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/back.jpg')" }} 
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div ref={heroTitleRef} className="relative items-center top-20 md:mt-0 z-40 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold">
            The Heart of Époque
          </h1>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <section ref={missionSectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold text-[#762342] mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-loose mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
              </p>
              <p className="text-lg text-gray-700 leading-loose">
                Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/back1.jpg" 
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </section>

          <section ref={valuesSectionRef} className="text-center">
            <h2 className="text-4xl font-serif font-bold text-[#762342] mb-12">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard 
                icon={<FaGem />}
                title="Quality"
                text="We believe in craftsmanship that lasts, using only the finest materials to create timeless pieces."
              />
              <ValueCard 
                icon={<FaRegLightbulb />}
                title="Authenticity"
                text="Every piece tells a story. We are committed to genuine design and authentic historical inspiration."
              />
              <ValueCard 
                icon={<FaHandHoldingHeart />}
                title="Passion"
                text="Our work is driven by a deep love for vintage fashion and the desire to share its beauty with the world."
              />
            </div>
          </section>

          <section ref={behindScenesRef} className="relative h-[50vh] rounded-2xl overflow-hidden flex items-center justify-center text-center text-white p-8">
             <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110"
              style={{ backgroundImage: "url('/pic1.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-serif font-bold">From Our Hands to Yours</h2>
              <p className="mt-4 max-w-2xl mx-auto">
                A glimpse into the creative process where every detail is perfected with care and dedication.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default AboutUsPage;
