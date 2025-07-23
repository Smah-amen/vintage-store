"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { BiSolidQuoteRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jsonData from "./commone/data/testimonials.json";

function Responsive() {
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
      setData(jsonData);
    } catch (err) {
      setData([{ title: "Error", description: err.message }]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div data-aos="zoom-in" className="container mx-auto mb-10">
      <h1
        style={{ fontFamily: "Fleur De Leah , cursive" }}
        className="text-center text-4xl font-bold text-primary font-cursive mt-6 mb-7"
      >
        Testimonials
        <hr className="border-t border-gray-300 w-1/5 mx-auto" />
      </h1>
      <div className="slider-container w-full">
        <Slider {...settings}>
          {data.slice(0, 7).map((item, index) => (
            <div key={item.id || index} className="px-4 pb-4">
              <div className="rounded-xl bg-gray-100 p-5 relative">
                <div className="absolute top-0 right-0 text-black/5  font-serif">
                  <BiSolidQuoteRight size={80} />
                </div>
                <div className="flex justify-start items-center mb-4">
                  <img
                    src={item.avatar}
                    className="w-24 h-24 rounded-full  "
                    alt={item.full_name}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">{item.test_name}</p>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-4 h-12">
                    {item.test_body}
                  </p>
                  <div className="flex items-center justify-between flex-wrap">
                    <p
                      style={{ fontFamily: "Dancing Script, cursive" }}
                      className="text-2xl font-bold text-[#762342] font-cursive"
                    >
                      {item.full_name}
                    </p>
                    <p className="text-base font-semibold text-black/60">
                      {item.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
