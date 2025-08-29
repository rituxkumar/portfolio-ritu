import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Button2 from "./Button2";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center h-screen flex flex-col items-center justify-center gap-4 mx-auto mb-[-80px] ">
      <motion.div 
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8,type:'spring',stiffness:100}}
      
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32 border-black border" />
      </motion.div>
      <motion.div 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.6,delay:0.3}}
      
      className="flex ">
      <motion.h3
      

         initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.6,delay:0.3}}
      >
        Hi! I'm Ritu Kumar...{" "}</motion.h3>
        <Image src={assets.hand_icon} alt="" className="w-6 wave b" />
      
      </motion.div>
      <motion.h1 
      initial={{y:-30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.8,delay:0.3}}
      
      className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Mern stack developer
      </motion.h1>
      <motion.p
       initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.7}}
      
      className="max-w-2xl mx-auto font-Ovo">
        Currently I build dynamic,responsive,and scalable web applications using the MERN stack.
        <br/>
        “I am passionate about creating real-world applications and am currently building a full-stack web application using React, Node.js, and MongoDB.”
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
        <motion.a
          initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.6,delay:1.2}}
        
        
        href="#contact" className="px-10 py-3 border flex border-white rounded-full bg-black text-white items-center gap-2">
          contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4 "
          />
        </motion.a>

        {/* <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-600 flex items-center gap-2">
          my-resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a> */}
        <Button2 />
       
       
      </div>

    </div>
  );
};

export default Header;
