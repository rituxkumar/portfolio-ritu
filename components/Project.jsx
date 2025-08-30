import { projects } from "@/assets/mainAssets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { motion } from "motion/react";

const Project = () => {
  return (
    <div id="project" className="mb-10">
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-center text-5xl font-Ovo mb-8 underline mt-4 "
      >
        Projects
      </motion.h2>
      <div className="flex justify-center flex-wrap gap-10 items-center ">
        {projects.map((item, index) => (
          <div
            key={index}
            className="w-[80%] md:w-[30%] p-6 rounded-xl border border- transition duration-300 
                hover:shadow-2xl hover:shadow-black/70 hover:ring-2 hover:ring-gray-800/70 hover:ring-offset-2 hover:ring-offset-black/30 hover:translate-y-1 border-gray-600 "
          >
            <p className="text-center text-xl">{item.title}</p>
            <Image src={item.image} alt="img" />
            <p>{item.description}</p>
            <div className=" " onClick={() => window.open(item.url)}>
              <Button data="Live-demo" />
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tech, index) => (
                <p
                  key={tech + index}
                  className="border border-gray-800 p-1 rounded-xl hover:-translate-y-1 duration-500 cursor-pointer hover:bg-gray-300"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
