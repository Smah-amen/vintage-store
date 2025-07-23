"use client";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { CartContext } from "@/context/CartContext";

function Navbar() {
  const nav = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Product", path: "/product" },
    { id: "3", name: "About-us", path: "/about-us" },
    { id: "4", name: "blogs", path: "/blogs" },
  ];

  const { cart } = useContext(CartContext);
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    if (isHomePage) {
      document.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isHomePage) {
        document.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage, scrolled]); 

  const isTransparent = isHomePage && !scrolled;

  const textColor = isTransparent ? "text-white" : "text-[#762342]";
  const activeLinkColor = isTransparent ? "text-gray-200" : "text-[#895f4c]";
  const headerBg = isTransparent ? "bg-transparent" : "bg-[#f6f6f6] shadow-md";
  const cartBg = isTransparent ? "bg-white/80" : "bg-amber-50";
  const cartTextColor = isTransparent ? "text-black" : "text-inherit";

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto p-4 flex flex-col items-center">
        <div className="flex items-center justify-between space-x-10 w-full max-w-6xl">
          <div className="flex items-center space-x-3">
            <span className={`transition-colors duration-300 ${textColor}`}>
              <FaPhone />
            </span>
            <h1 className={`text-sm font-fleur font-bold transition-colors duration-300 ${textColor}`}>
              +2 0123456789
            </h1>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <h1
              style={{ fontFamily: "Fleur De Leah, cursive" }}
              className={`text-4xl font-fleur font-bold ml-2 transition-colors duration-300 ${textColor}`}
            >
              Époque
            </h1>
          </div>

          <div className="relative flex items-center justify-center w-10 h-12 rounded-full">
            <button className={`cursor-pointer transition-colors duration-300 ${textColor}`}>
              <GiShoppingCart size={40} />
              <span className={`absolute top-0 right-0 rounded-full px-2 py-1 text-xs transition-colors duration-300 ${cartBg} ${cartTextColor}`}>
                {cart.length}
              </span>
            </button>
          </div>
        </div>

        <nav className="mt-4 p-5 w-full max-w-6xl">
          <ul className="flex justify-center space-x-12 md:space-x-24 items-center text-lg">
            {nav.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.id}>
                  <Link
                    style={{ fontFamily: "Dancing Script, cursive" }}
                    href={item.path}
                    className={`text-2xl font-bold transition-all duration-300 hover:text-[#895f4c] ${
                      isActive ? `${activeLinkColor} underline` : textColor
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
