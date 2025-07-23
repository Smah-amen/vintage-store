"use client";

import { productData } from "@/components/commone/data/data";
import TestimonialsProduct from "@/components/TestimonialsProduct";
import React, { useEffect, useState, use, useRef } from "react";
import { gsap } from "gsap";
import { FaShoppingCart, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
function ProductDetails({ params }) {
  const { productId } = use(params);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const imageColRef = useRef(null);
  const detailsColRef = useRef(null);
  const textElementsRef = useRef([]);

  useEffect(() => {
    const correctedData = productData.map((p) => ({
      ...p,
      description: p.descraption || p.descraption,
    }));

    const found = correctedData.find((item) => item.id === parseInt(productId));
    if (found) {
      setProduct(found);
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    if (!loading && product) {
      textElementsRef.current = [];

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });

      tl.from(imageColRef.current, { x: -100, autoAlpha: 0 }).from(
        detailsColRef.current,
        { x: 100, autoAlpha: 0 },
        "<"
      );

      if (textElementsRef.current.length > 0) {
        tl.from(
          textElementsRef.current,
          {
            y: 30,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.8,
          },
          "-=0.8"
        );
      }
    }
  }, [loading, product]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f4f0ed] text-[#762342] text-xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f4f0ed] text-[#762342] text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen w-full  pt-60 pb-16 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div ref={imageColRef} className="w-full">
            <div className=" p-5 rounded-2xl ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full max-h-[70vh] object-cover rounded-lg"
              />
            </div>
          </div>

          <div ref={detailsColRef} className="flex flex-col h-full">
            <div className="space-y-4 text-left">
              <div className="overflow-hidden">
                <p
                  ref={(el) => el && textElementsRef.current.push(el)}
                  className="text-sm font-semibold text-[#895f4c] tracking-widest uppercase"
                >
                  {product.category}
                </p>
              </div>
              <div className="overflow-hidden">
                <h1
                  ref={(el) => el && textElementsRef.current.push(el)}
                  className="text-4xl md:text-5xl text-[#762342] font-serif font-bold leading-tight"
                >
                  {product.name}
                </h1>
              </div>

              <div className="overflow-hidden">
                <div
                  ref={(el) => el && textElementsRef.current.push(el)}
                  className="flex items-center space-x-2"
                >
                  {product.inStock ? (
                    <>
                      <FaCheckCircle className="text-green-500" />
                      <span className="font-medium text-green-600">
                        In Stock
                      </span>
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="text-red-500" />
                      <span className="font-medium text-red-600">
                        Out of Stock
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="overflow-hidden">
                <p
                  ref={(el) => el && textElementsRef.current.push(el)}
                  className="text-3xl text-[#5c4438] font-medium"
                >
                  ${product.price}
                </p>
              </div>
              <div className="overflow-hidden pt-4">
                <p
                  ref={(el) => el && textElementsRef.current.push(el)}
                  className="text-base text-gray-600 leading-relaxed"
                >
                  {product.description}
                </p>
              </div>
              <div className="overflow-hidden pt-6">
                <button
                  ref={(el) => el && textElementsRef.current.push(el)}
                  disabled={!product.inStock}
                  className="w-full rounded-full sm:w-auto flex items-center justify-center px-6 py-2 bg-[#762342]
                   text-white font-bold   transition-all duration-300 transform enabled:hover:scale-95 enabled:hover:bg-[#5c1b32] disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <FaShoppingCart className="mr-3" />
                  {product.inStock ? "Add to Cart" : "Unavailable"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsProduct />
    </>
  );
}

export default ProductDetails;
