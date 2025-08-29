import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png)] bg-no-repeat bg-center bg-[lenght:90%_auto]'> 
       <h4 className="text-center text-xl font-Ovo mb-2 underline">
      Connect with me
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-2 underline">
     Get in touch
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 '>I'd love to hear from you! if you have any questions,comments,or feedback,please use the form below.</p>
      <form>
        <div>
          <h3 className=''>Name</h3>
          <input type="text" placeholder='Enter your name' required className='border border-gray-500 hover:border-blue-700' />
          <h3>Email</h3>
          <input type="text" placeholder='Enter your email'required />
          <h3>Phone</h3>
          <input type='tel' placeholder='Enter your phone number' required />

        </div>
      </form>
    </div>
  )
}

export default Contact
