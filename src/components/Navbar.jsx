"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import HeaderBasket from "./commone/HeaderBasket";
import { usePathname } from "next/navigation";

function Navbar() {
  const nav = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Product", path: "/product" },
    { id: "3", name: "About-us", path: "/about-us" },
    { id: "4", name: "blogs", path: "/blogs" },
  ];
  const [count, setCount] = useState(0);

  const handelClick = () => {
    setCount(count + 1);
    console.log("clicked");
  };
  const pathname = usePathname();
  const isActive = pathname == nav.path;
  return (
    <header className="bg-white ">
      <div className="container mx-auto p-4 flex flex-col items-center">
        <div className="flex items-center justify-between space-x-10 w-full max-w-6xl">
          <div className="flex items-center space-x-3">
            <span>
              <FaPhone />
            </span>
            <h1 className="text-sm font-fleur  font-bold text-[#762342] ">
              +2 0123456789
            </h1>
          </div>

          <div className="flex justify-center ">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <h1
              style={{ fontFamily: "Fleur De Leah , cursive" }}
              className="text-4xl font-fleur  font-bold text-[#762342] "
            >
              Époque
            </h1>
          </div>

          <HeaderBasket count={count} handelClick={handelClick} />
        </div>

        <nav className="mt-4  p-5 w-full max-w-6xl">
          <ul className="flex justify-center space-x-24   items-center  text-lg">
            {nav.map((item) => (
              <li key={item.id}>
                <Link
                  style={{ fontFamily: "Dancing Script, cursive" }}
                  href={item.path}
                  className={
                    isActive
                    ? "text-[#895f4c] text-2xl font-bold transition-colors hover:text-[#895f4c] underline"
                    : "text-[#762342] text-2xl font-bold transition-colors  "
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
