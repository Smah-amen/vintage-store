
const WelcomeSection = () => {
    return (
        <div className=" mb-4 container mx-auto flex max-w-6xl  items-center justify-center h-[750px] ">

          <div className="flex p-10  flex-row w-full h-full">
      
            <div className="w-1/2 h-full opacity-80">
              <img src="hero.jpg" alt="hero" className="w-96 h-full object-cover  shadow-2xl rounded-2xl" />
            </div>
    
        
            <div className="w-1/2 h-full flex flex-col items-center justify-center  p-8">
              <h1 className="text-4xl font-bold text-center">Welcome to Our Jewelry Store</h1>
              <p className="text-lg text-center mt-4">Discover the perfect piece of jewelry for every occasion.</p>
            </div>
          </div>
        </div>
      );
    };

export default WelcomeSection;
