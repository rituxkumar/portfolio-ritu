import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "220bc432-f9e0-4790-a565-1e0af8573916");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);

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
      <motion.h4
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-center text-xl font-Ovo mb-2 underline"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-center text-5xl font-Ovo mb-2 underline"
      >
        Get in touch
      </motion.h2>
      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        I'd love to hear from you! if you have any questions,comments,or
        feedback,please use the form below.
      </motion.p>
      <motion.form type="submit" onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div>
          <label className="block text-blue-400 font-medium mb-2">Name</label>
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 border border-blue-400 rounded-md 
              placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-blue-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-black
             "
            name="name"
          />
          <label className="block text-blue-400 font-medium mb-2">Email</label>
          <input
            className="w-full p-3 border border-blue-400 rounded-md 
              text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-blue-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-black
             "
            name="email"
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
              placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-blue-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-black
             "
            name="phone"
          />
          <label className="block text-blue-400 font-medium mb-2">
            Message
          </label>
          <textarea
            placeholder="Enter your message"
            required
            rows="5"
            className="w-full p-3 border border-blue-400 rounded-md 
             placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-blue-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-black"
            name="message"
          />
        </div>
        <button
          className="py-3 px-8 w-max flex items-center  gap-2 bg-blue-500 text-white rounded-full hover:bg-black duration-500 cursor-pointer"
          type="submit"
        >
          Send Message{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </div>
  );
};

export default Contact;
