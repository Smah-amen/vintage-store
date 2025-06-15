"use client";
import React from "react";
import Link from "next/link";
const ProductList = () => {
  const data = [
    {
      id: 1,
      name: "Victorian Brooch Accessories",
      descraption:
        "Handmade Collar Pin Pearl Cameo Madam For Women ,Female Ribbon Bow, Vintage Style Gift, Victorian Brooch Accessories, Elegant Office Fashion",
      price: 100,
      image: "./acss1.jpg",
      category: "Accessories",
    },
    {
      id: 2,
      name: "Victorian Brooch Accessories",
      descraption:
        "Handmade Collar Pin Pearl Cameo Madam For Women ,Female Ribbon Bow, Vintage Style Gift, Victorian Brooch Accessories, Elegant Office Fashion",
      price: 100,
      image: "./acss2.jpg",
      category: "Accessories",
    },
    {
      id: 3,
      name: "Victorian Brooch Accessories",
      descraption:
        "Handmade Collar Pin Pearl Cameo Madam For Women ,Female Ribbon Bow, Vintage Style Gift, Victorian Brooch Accessories, Elegant Office Fashion",
      price: 100,
      image: "acss3.jpg",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Victorian Brooch Accessories",
      descraption:
        "Handmade Collar Pin Pearl Cameo Madam For Women ,Female Ribbon Bow, Vintage Style Gift, Victorian Brooch Accessories, Elegant Office Fashion",
      price: 100,
      image: "acss4.jpg",
      category: "Accessories",
    },
    {
      id: 5,
      name: "Victorian Brooch Accessories",
      descraption:
        "Handmade Collar Pin Pearl Cameo Madam For Women ,Female Ribbon Bow, Vintage Style Gift, Victorian Brooch Accessories, Elegant Office Fashion",
      price: 100,
      image: "acss5.jpg",
      category: "Accessories",
    },
    {
      id: 6,
      name: "Victorian Brooch Accessories",
      descraption:
        "Handmade Collar Pin Pearl Cameo Madam For Women ,Female Ribbon Bow, Vintage Style Gift, Victorian Brooch Accessories, Elegant Office Fashion",
      price: 100,
      image: "acss6.jpg",
      category: "Accessories",
    },
    {
      id: 7,
      name: "Victorian Brooch Accessories",
      descraption:
        "Handmade Collar Pin Pearl Cameo Madam For Women ,Female Ribbon Bow, Vintage Style Gift, Victorian Brooch Accessories, Elegant Office Fashion",
      price: 100,
      image: "./acss1.jpg",
      category: "Accessories",
    },
    {
      id: 8,
      name: "Victorian Brooch Accessories",
      descraption:
        "Handmade Collar Pin Pearl Cameo Madam For Women ,Female Ribbon Bow, Vintage Style Gift, Victorian Brooch Accessories, Elegant Office Fashion",
      price: 100,
      image: "./acss2.jpg",
      category: "Accessories",
    },
  ];
  return (
    <section className="bg-[#f6f1eb] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          style={{ fontFamily: "Fleur De Leah, cursive" }}
          className="text-4xl  text-center text-[#762342] mb-10"
        >
          Vintage Accessories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((item) => (
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
