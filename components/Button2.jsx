import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Button2 = () => {
  return (
    <div>
       <div className="relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
                <button className="relative z-10 bg-gray-800 text-white rounded-full  font-medium text-sm">
                   <a href="/sample-resume.pdf" download className="px-10 py-3 text-xl  rounded-full flex items-center gap-2">
          my-resume
          <Image src={assets.download_icon} alt="" className="w-6 bg-amber-50 " />
        </a>
                </button>
            </div>
      
    </div>
  )
}

export default Button2;
