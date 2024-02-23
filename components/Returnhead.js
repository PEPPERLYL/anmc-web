"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../public/anmc-logo.png";
import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";
const Returnhead = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const isTop = window.scrollY < 50;
    setIsScrolled(!isTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky-header flex bg-transparent py-2 lg:py-2 px-5 lg:px-24 items-center justify-between ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="flex gap-2 items-center">
        <Image src={Logo} alt="Anmc logo" width={50} height={50} />
        <p className="flex items-center capitalize font-semibold text-2xl">
          <span className="text-red-700 font-medium italic">a</span>
          <span className="text-blue-600 font-light italic">n</span>
          <span className="text-yellow-500 font-light italic">m</span>
          <span className="text-green-400 font-bold ml-1">c</span>
        </p>
      </div>
      <div>
        <Link href="/" className="flex items-center justify-center gap-2">
          <span>Return</span>
          <span className="text-xl font-bold hover:text-[#]">
            <IoReturnUpBackOutline />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Returnhead;
