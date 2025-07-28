import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { BiSolidQuoteRight, BiCheck, BiX } from "react-icons/bi";
import { BsTag, BsShop } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from "./commone/data/data";

function TestimonialsProduct() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 630,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setData(productData);
    } catch (err) {
      setData([{ name: "Error", description: err.message }]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div data-aos="zoom-in" className="container mx-auto mb-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-5xl text-[#762342] font-serif font-bold leading-tight">
          Our Popular Products
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-100 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">Discover our handpicked collection of premium accessories</p>
      </div>
      
      <div className="slider-container w-full">
        <Slider {...settings}>
          {data.slice(0, 7).map((item, index) => (
            <div key={item.id || index} className="px-4 pb-4">
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 z-10">
                  {item.inStock ? (
                    <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      <BiCheck className="w-4 h-4 mr-1" />
                      In Stock
                    </div>
                  ) : (
                    <div className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                      <BiX className="w-4 h-4 mr-1" />
                      Out of Stock
                    </div>
                  )}
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    <BsTag className="w-3 h-3 mr-1" />
                    {item.category}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-t-2xl h-64 bg-gray-100">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                <div className="relative p-6">
                  <div className="absolute top-0 right-0 text-blue-200  font-serif opacity-50 -mt-8 -mr-4">
                    <BiSolidQuoteRight size={20} />
                  </div>

                  <h3 className="text-xl font-bold  text-[#61453b] mb-3 line-clamp-2 group-hover:text-[#c3846d] transition-colors duration-300">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {item.descraption || item.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#c3846d] to-pink-600 bg-clip-text text-transparent">
                        ${item.price}
                      </span>
                    </div>
                    
                    <button className="flex items-center bg-gradient-to-r from-[#94685a] to-[#c3846d]  text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      <BsShop className="w-4 h-4 mr-2" />
                      Shop Now
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .slick-dots {
          bottom: -50px;
        }
        
        .slick-dots li button:before {
          color: #8b5cf6;
          font-size: 12px;
          opacity: 0.5;
        }
        
        .slick-dots li.slick-active button:before {
          color: #8b5cf6;
          opacity: 1;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default TestimonialsProduct;

