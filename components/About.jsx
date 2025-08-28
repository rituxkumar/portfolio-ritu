import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div>
          <Image
            src={assets.profile_img}
            alt="user"
            className="rounded-3xl w-full"
          />
        </div>
        <div className="flex-1">
          <p>
            I’m a MERN Stack Developer who loves turning ideas into real-world
            applications. Currently, I’m building a full-stack web app with
            React, Node.js, and MongoDB—shaping my skills one project at a time.
            I’m eager to join an internship where I can learn from real
            challenges, contribute to impactful projects, and grow into a
            stronger developer.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, icondark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer mt-3"
                key={index}
              >
                <Image src={icon} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
