import React from "react";

const Contact = () => {
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
      <form>
        <div>
           <label className="block text-yellow-400 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 border border-yellow-400 rounded-md 
             bg-gray-800 text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-yellow-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-white
             "
          />
           <label className="block text-yellow-400 font-medium mb-2">Email</label>
          <input
            className="w-full p-3 border border-yellow-400 rounded-md 
             bg-gray-800 text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-yellow-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-white
             "
            type="text"
            placeholder="Enter your email"
            required
          />
           <label className="block text-yellow-400 font-medium mb-2">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            className="w-full p-3 border border-yellow-400 rounded-md 
             bg-gray-800 text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-yellow-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-white
             "
          />
          <label className="block text-yellow-400 font-medium mb-2">Message</label>
<textarea
  placeholder="Enter your message"
  required
  rows="5"
  className="w-full p-3 border border-yellow-400 rounded-md 
             bg-gray-800 text-gray-200 placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-yellow-400
             transition duration-300 ease-in-out
             hover:border-gray-500 hover:text-white"
/>

        </div>
      </form>
    </div>
  );
};

export default Contact;
