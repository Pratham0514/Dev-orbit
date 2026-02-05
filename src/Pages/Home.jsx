import React from "react";
import { Navbar } from "../Component/Navbar"; 
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fullstact from "./../Images/fullstact.png";
import { Footer } from "../Component/Footer";


function Home() {
  const navigate = useNavigate();
  return (
    <div>
    <div className="pt-20 p-1 text-center">

      <Navbar/>
      <p className="pt-15 text-5xl font-bold text-gray-600"> “Building developers for tomorrow’s technology.”</p>
      <p className="pt-4 text-gray-500 text-1xl font-bold">Why to learn </p>
      <p className="pt-3  text-2xl text-gray-600 font-bold">“Learn to code to solve real problems, build ideas, and create your own future.”</p>
    </div>
    
    <div className="p-10 text-center space-x-14">
      <button className="p-3 px-6 border-2 border-[#F2A65A] border-solid bg-[#000000] text-white rounded-full hover:bg-[#F2A65A]"
      onClick={() => navigate("/contact")}
      >Connect With Us
        <span className=" pl-2">☎️ </span></button> 
      <button className="p-3 px-6 border-2 border-[#F2A65A] border-solid bg-[#000000] text-white rounded-full hover:bg-[#F2A65A]" onClick={()=>navigate("/course")}>Begin Your Journey <span className="pl-2" >🌐</span></button>
    </div>


<div className="w-[80%] border-2 border-[#ec7805] mx-auto mb-20 mt-5 rounded-[40px] flex pb-5 bg-[#FFF8DE]">
  <div className="w-[45%]  ml-8 mt-5 rounded-[40px]">
        <img src={fullstact} alt="Full stack" className="w-[100%] h-[100%] rounded-[40px]" />
  </div>
  <div className="w-[50%]  ml-8 mt-5 ">
    <h1 className="text-4xl font-bold text-gray-600 p-2">Full Stact Web Development </h1><br></br>
    <span className="text-[28px] font-bold text-gray-700 ml-30 text-center">What you will Learn</span>
    <p className="text-[20px] font-bold text-gray-800 p-2">Build creative full-stack web apps using HTML, CSS, JavaScript, React, Node.js, Express.js & MongoDB.</p>

   <div className=" font-bold text-gray-800  flex justify-between w-[90%]">
      <span className="space-x-2 p-3">  <span className="text-gray-500 text-2xl line-through">₹4999</span>
      <span className="text-green-600 text-2xl font-bold">₹2999</span></span>
      <button className="p-2 px-7 mt-3 ml-3 border-2 border-[#F2A65A] border-solid bg-[#000000] text-white rounded-full hover:bg-[#F2A65A] mr-5" onClick={()=>navigate("/course")}>Start Now <span className="pl-2" >🌐</span></button>
    </div>

  <div className="w-[100%]  mx-auto mt-5 ">
    <p className="text-[20px] font-bold text-gray-800 p-2 pl-5"> 🗓️ valid till = <span className="text-red-600">30 /june/ 2026</span></p>
    <p className="text-[20px] font-bold text-gray-800 p-2 pl-5"> 🎯 Why Add These?
      <ul className="pl-1 list-disc space-y-2 text-gray-700 text-[18px]">
  <li>Skill Level – Beginner to Advanced</li>
  <li>Mode – Online, Project-Based Learning</li>
  <li>Certification – Certificate of Completion</li>
  <li>Hands-on Projects – Real-World Projects Included</li>
</ul>


    </p>

    
  </div>
  </div>
 



</div>

<Footer/>
    </div>
  );
}

export default Home;
