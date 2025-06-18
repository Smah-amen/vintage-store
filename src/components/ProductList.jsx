"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

import { productData, category } from "./commone/data/data";
const ProductList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [curentPage, setCurrentPage] = useState(1);

  const itemPage = 5;

  useEffect(() => {
    setData(productData);
  }, []);
  const searchProduct = data.filter((item) => {
    const searchProduct = item.name.includes(searchTerm);
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    return searchProduct && categoryMatch;
  });
const totalPages = Math.ceil(searchProduct.length / itemPage); // this is equation
let page  = curentPage ;
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;
  if (!page) {
    page = 1;
  }

  return (
    <section className="bg-[#f6f1eb] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          style={{ fontFamily: "Fleur De Leah, cursive" }}
          className="text-4xl  text-center text-[#762342] mb-10"
        >
          Vintage Accessories
        </h1>
        <div className="flex justify-center mx-auto w-2xl  flex-row ">
          <div className="relative w-96 mx-auto mb-8">
            <CiSearch className="text-[#762342] text-2xl absolute right-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-3 pr-1 py-2 border border-[#d8cbb3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#762342] transition duration-300"
            />
          </div>
          <div
            className=" mb-8 text-center text-[#762342] font-bold"
            // style={{ fontFamily: "Fleur De Leah, cursive" }}
          >
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {category.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}{" "}
                </option>
              ))}{" "}
            </select>{" "}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {searchProduct.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <div
                key={item.id}
                className="bg-[#fdf8f2] h-[500px] border border-[#d8cbb3] rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4"
              >
                <div className="w-full h-72">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>

                <h2 className="text-xl font-bold text-[#762342] font-vintage mb-2">
                  {item.name}
                </h2>
                <div className="flex justify-between">
                  <p className="text-sm text-[#5c4438] mb-2">
                    {item.descraption.slice(0, 100)}...
                  </p>

                  <p className="text-lg text-[#895f4c] font-semibold mb-3">
                    ${item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
