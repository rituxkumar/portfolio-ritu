import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center h-screen flex flex-col items-center justify-center gap-4 mx-auto">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3>
        Hi! I'm Ritu Kumar{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Mern stack developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Currently I build dynamic,responsive,and scalable web applications using the MERN stack.
        <br/>
        “I am passionate about creating real-world applications and am currently building a full-stack web application using React, Node.js, and MongoDB.”
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white items-center gap-2">
          contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>

        <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-600 flex items-center gap-2">
          my-resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
