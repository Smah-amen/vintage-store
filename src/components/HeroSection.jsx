import React from 'react';
const HeroSection = () => {
    return (
      <div className="relative mb-4 w-full h-[620px] bg-gray-100">
        <img src="hero5.jpg" alt="hero" className="w-full h-full object-cover" />
  
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
  
       
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-white px-4">
          <h1
          style={{ fontFamily: "Dancing Script, cursive" }}
           className="text-4xl font-bold text-center">Rediscover Timeless Elegance</h1>
          <p
          
           className="text-lg text-center italic mt-4">Explore unique vintage pieces that blend nostalgia with contemporary flair</p>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  