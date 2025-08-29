import { assets } from "@/assets/assets";
import { SkillsInfo } from "@/assets/mainAssets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <div id="Skills" className="scroll-mt-20 md:py-10 w-full md:px-[12%]">
      {/* <h4 className="text-center mb-2 text-lg font-Ovo ">Introduction</h4> */}
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-center text-5xl font-Ovo mb-8 underline"
      >
        My-Skills
      </motion.h2>
      <div>
        {/* <h2>Frontend</h2>
      <Image src={assets.c} /> */}

        <motion.div className="flex flex-wrap items-center justify-center gap-6 ">
          {SkillsInfo.map((item, index) => (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              key={index}
              className="flex flex-col border-2 border-gray-400 w-[75%] md:w-[40%] p-5 rounded-xl hover:translate-y-1 duration-500 hover:border-gray-950 "
            >
              <p className="items-center text-center text-2xl text-blue-700 mb-2 ">
                {" "}
                {item.title}
              </p>
              <div className="flex  flex-wrap gap-3 justify-center items-center">
                {item.skills.map((item, index) => (
                  <div
                    key={index}
                    className="
                  flex flex-row items-center border border-gray-800 rounded-xl hover:-translate-y-1 duration-500 p-2 cursor-pointer gap-1 "
                  >
                    <p> {item.name}</p>
                    <Image src={item.logo} className="w-[40px] wave" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
