import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
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
        Currently exploring MERN stack development, eager to apply my
        knowledge,gain industry experience,and contribute as an enthusiastic
        intern.{" "}
      </p>
      <div>
        <a href="#contact">
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>

        <a href="#contact">
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
