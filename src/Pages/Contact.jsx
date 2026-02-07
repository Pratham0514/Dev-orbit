import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer";
import {Headline1,description,Headline2} from '../Config/Contactus'

function Contact() {
  return (
 <div className="pt-20 p-1 text-center">
      <Navbar/>

  <h1 className="text-4xl font-bold mb-4 mt-6  text-gray-600 text-center">{Headline1}</h1>  

  <p className="text-2xl font-bold text-gray-500 text-center">{description}</p>  
        
        
        <div className="flex flex-col md:flex-row w-[70%] mx-auto 
  mt-[3%] mb-[4%] p-4 rounded-[40px] 
 ">
  


  {/* Image Section */}
  <div className="w-full md:w-[65%] flex justify-center items-center">
    {/*image */}
  </div>

  {/* Form Section */}
  <form className="w-full md:w-[35%] min-h-[500px] 
    rounded-[40px] px-4 py-4  bg-[#FFF8DE]">

    <h1 className="text-4xl font-bold mb-6 text-center">
     {Headline2}
    </h1>

    <input
      type="text"
      placeholder="Name"
      className="w-full h-10 border-2 border-[#ec7805] mb-4 rounded-[40px] px-4 bg-[#FFF8DE] focus:outline-none focus:ring-2 focus:ring-[#ec7805]"
    />

    <input
      type="email"
      placeholder="Email"
      className="w-full h-10 border-2 border-[#ec7805] mb-4 rounded-[40px] px-4 bg-[#FFF8DE] focus:outline-none focus:ring-2 focus:ring-[#ec7805]"
    />

    <input
      type="text"
      placeholder="Subject"
      className="w-full h-10 border-2 border-[#ec7805] mb-4 rounded-[40px] px-4 bg-[#FFF8DE] focus:outline-none focus:ring-2 focus:ring-[#ec7805]"
    />

    <textarea
      placeholder="Message"
      className="w-full h-28 border-2 border-[#ec7805] mb-6 rounded-[30px] px-4 py-2 bg-[#FFF8DE] resize-none focus:outline-none focus:ring-2 focus:ring-[#ec7805]"
    />

    <button
      type="submit"
      className="w-full h-11 rounded-[40px] bg-black text-white text-lg 
      hover:bg-[#ec7805] transition duration-300"
    >
      Submit
    </button>
  </form>

</div>

      <Footer/>
      
    </div>
  )
}

export default Contact