"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import { productData, category } from "./commone/data/data";
import { CartContext } from "@/context/CartContext";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [curentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setData(productData);
  }, []);

  const searchProduct = data.filter((item) => {
    const searchProduct = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    return searchProduct && categoryMatch;
  });

  const itemPage = 5;
  const totalPages = Math.ceil(searchProduct.length / itemPage);
  let page = curentPage;
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;
  if (!page) page = 1;

  const lastPageIndex = page * itemPage;
  const firstPageIndex = lastPageIndex - itemPage;
  const currentItems = searchProduct.slice(firstPageIndex, lastPageIndex);

  const goToNextPage = (pageNum) => {
    if (pageNum < 1) pageNum = 1;
    if (pageNum > totalPages) pageNum = totalPages;
    setCurrentPage(pageNum);
  };

  const { addToCart } = useContext(CartContext);

  return (
    <section className="bg-white min-h-screen py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <h1
          style={{ fontFamily: "Fleur De Leah , cursive" }}
          className="text-6xl  text-center  mb-16"
        >
          Explore Our Collection of Stylish Modern Desks
          <hr className="border-t border-gray-300 w-1/2 mx-auto" />
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <div className="relative w-full max-w-sm">
            <CiSearch className="text-gray-500 text-xl absolute right-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#762342]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {category.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium ${
                  selectedCategory === cat
                    ? "bg-[#724a3d] text-white border-[#724a3d]"
                    : "text-gray-700 border-gray-300 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentItems.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="group relative min-h-[550px] min-w-[320px] bg-white rounded-2xl  hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {item.inStock !== undefined && (
                  <div className="absolute top-4 left-4 z-10">
                    {item.inStock ? (
                      <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        In Stock
                      </div>
                    ) : (
                      <div className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        Out of Stock
                      </div>
                    )}
                  </div>
                )}

          

                <div className="relative overflow-hidden rounded-t-2xl h-64 bg-gray-100">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-[#61453b] mb-3 line-clamp-2 group-hover:text-[#c3846d] transition-colors duration-300">
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
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault(); 
                        addToCart(item);
                      }}
                      className="flex items-center bg-gradient-to-r from-[#94685a] to-[#c3846d] hover:from-amber-200 hover:to-orange-200 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <GiShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-colors duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          <button
            disabled={page <= 1}
            onClick={() => goToNextPage(page - 1)}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
          >
            <FaArrowAltCircleLeft className="text-gray-600" />
          </button>
          {[...Array(totalPages).keys()].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToNextPage(pageNum)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  pageNum === page
                    ? "bg-[#724a3d] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          <button
            disabled={page >= totalPages}
            onClick={() => goToNextPage(page + 1)}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
          >
            <FaArrowAltCircleRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;


