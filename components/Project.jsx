import { projects } from "@/assets/mainAssets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div>
      <h2 className="text-center text-5xl font-Ovo mb-8 underline">Projects</h2>
      <div className="flex justify-center gap-10 items-center ">
        {projects.map((item, index) => (
          <div key={index} className="w-[30%] p-6 rounded-xl border border- transition duration-300 
                hover:shadow-2xl hover:shadow-black/70 hover:ring-2 hover:ring-gray-800/70 hover:ring-offset-2 hover:ring-offset-black/30 hover:translate-y-1 border-gray-600 ">
            <p className="text-center text-xl">{item.title}</p>
            <Image src={item.image} alt="img" />
            <p>{item.description}</p>
            <Link href={item.url}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
