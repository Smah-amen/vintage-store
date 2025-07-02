import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[670px] md:h-[750px] bg-gray-100">
   
      <img
        src="/hero2.jpg" 
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45 "></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-3xl font-semibold tracking-wide mb-2">
        The Best Fashion Photos From The 1950s        </h1>
        <p className="text-2xl md:text-3xl italic font-light mb-2" >
          Simon Porte Jacquemus
        </p>
        <p
        
         className="text-sm md:text-lg italic font-light  tracking-wider">paries</p>
      </div>
    </div>
  );
};

export default HeroSection;
