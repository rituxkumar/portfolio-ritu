import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="items-center justify-between flex z-50 w-full fixed px-5 lg:px-[8%] py-4">
      <a href="#top">
        <Image src={assets.logo} alt="" className="w-28 cursor-pointer mr-14" />
      </a>

      <ul className="hidden md:flex py-3 rounded-full px-12 gap-6 lg:gap-8 items-center">
        <li>
          <a  href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
      <div>
        <a href="#contact" className="hidden items-center gap-3 px-10 py-2.5 border border-gray-600 rounded-full lg:flex ml-4 ">
          Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
