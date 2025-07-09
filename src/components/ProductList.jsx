"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
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
    const searchProduct = item.name.includes(searchTerm);
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
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Explore Our Collection of Stylish Modern Desks
        </h1>

        <div className="flex flex-wrap gap-4 justify-between items-center mb-10">
          <div className="relative w-full max-w-sm">
            <CiSearch className="text-gray-500 text-xl absolute right-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="w-full max-w-xs">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {category.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentItems.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <div className="bg-white rounded-xl  hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer">
                <div className="w-full h-60 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    alt={item.name}
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  {item.descraption.slice(0, 80)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-bold text-base">
                    ${item.price}
                  </span>
                  <button
                    onClick={addToCart}
                    className="text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
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
                    ? "bg-indigo-600 text-white"
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
