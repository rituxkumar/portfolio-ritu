import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { SkillsInfo } from "@/assets/mainAssets";


const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll,setIsScroll] = useState(false)
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
 
  console.log(SkillsInfo);
  

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
      <div className="top-0 right-0 w-11/12 -z-10 translate-y-[-80%] fixed">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav className={`items-center justify-between flex z-50 w-full fixed px-5 lg:px-[8%] py-4 ${isScroll ? "bg-gray-00 bg-opacity-30 backdrop-blur-lg shadow-sm" : ""} `}>
        <a href="#top">
          {/* <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14 h-[90px]"
          /> */}
          {/* <h3 className="border border-gray-700 rounded-2xl px-8 text-2xl">Ritu</h3> */}


          <div className="flex items-center justify-center ">
  <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-300 to-indigo-400 bg-[length:200%_200%]
             bg-clip-text text-transparent animate-gradient-move">
    Ritu
  </h1>
</div>
        </a>

        <ul className="hidden md:flex py-3 rounded-full px-12 gap-6 lg:gap-8 items-center bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          {/* <a
            href="#contact"
            className="hidden items-center gap-3 px-10 py-2.5 border border-gray-600 rounded-full lg:flex ml-4 "
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a> */}
          <Button data={"Contact-me"} />

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* mobile menu  */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 "
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#Skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" onClick={closeMenu}>
              Project
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
           
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
