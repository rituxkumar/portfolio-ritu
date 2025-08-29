import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "220bc432-f9e0-4790-a565-1e0af8573916");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png)] bg-no-repeat bg-center bg-[lenght:90%_auto]'
    >
      <h4 className="text-center text-xl font-Ovo mb-2 underline">
        Connect with me
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-2 underline">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        I'd love to hear from you! if you have any questions,comments,or
        feedback,please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div>
           <label className="block text-blue-400 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 border border-blue-400 rounded-md 
              text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-blue-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-black
             " name="name"
          />
           <label className="block text-blue-400 font-medium mb-2">Email</label>
          <input
            className="w-full p-3 border border-blue-400 rounded-md 
              text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-blue-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-black
             " name="email"
            type="text"
            placeholder="Enter your email"
            required
          />
           <label className="block text-blue-400 font-medium mb-2">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            className="w-full p-3 border border-blue-400 rounded-md 
             text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-blue-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-black
             "name="phone"
          />
          <label className="block text-blue-400 font-medium mb-2">Message</label>
<textarea
  placeholder="Enter your message"
  required
  rows="5"
  className="w-full p-3 border border-yellow-400 rounded-md 
              text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-blue-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-black" name="message"
/>

        </div>
        <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer" type="submit">Send Message <Image src={assets.right_arrow_white} alt='' className="w-4"/></button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
