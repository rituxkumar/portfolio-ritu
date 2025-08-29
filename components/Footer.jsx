import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="text-center ">
      <p className="text- ">@ 2025 RITU KUMAR GUPTA. All rigts reserved.</p>
      <div className="flex items-center justify-center gap-2">
      <Image src={assets.mail_icon} className="w-4"  />
      <p>ritubkj01@gmail.com</p>
      </div>
      <div className="items-center justify-center flex ">
        <IoCall />

         <p>7488419240</p>
      </div>
     
    </div>
  );
};

export default Footer;
