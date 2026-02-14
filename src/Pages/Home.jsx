import { Navbar } from "../Component/Navbar"; 
import { useNavigate } from "react-router-dom";
import fullstack from "./../assets/Full-Stack.png";

import { Footer } from "../Component/Footer";
import { Headline1,Headline2,Headline3,Headline4,Headline5,Headline6,Description,Descriptioncontant,oldPrice,price,Validity,ValidityTime,DescriptionList } from "../Config/Home";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
    <div className="pt-20 p-1 text-center">

      <Navbar/>
      <p className="pt-13 text-5xl font-bold text-gray-600"> “{Headline1}”</p>
      <p className="pt-4 text-gray-500 text-1xl font-bold">{Headline2} </p>
      <p className="pt-3  text-2xl text-gray-600 font-bold"> {Headline3}</p>
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
        <img src={fullstack} alt="Full stack" className="w-[100%] h-[100%] rounded-[40px]" />
  </div>
  <div className="w-[50%]  ml-8 mt-5 ">
    <h1 className="text-4xl font-bold text-gray-600 p-2">{Headline4}</h1><br></br>
    <span className="text-[28px] font-bold text-gray-700 ml-30 text-center">{Headline5}</span>
    <p className="text-[20px] font-bold text-gray-800 p-2">{Headline6}</p>

   <div className=" font-bold text-gray-800  flex justify-between w-[90%]">
      <span className="space-x-2 p-3">  <span className="text-gray-500 text-2xl line-through">{oldPrice}</span>
      <span className="text-green-600 text-2xl font-bold">{price}</span></span>
      <button className="p-2 px-7 mt-3 ml-3 border-2 border-[#F2A65A] border-solid bg-[#000000] text-white rounded-full hover:bg-[#F2A65A] mr-5" onClick={()=>navigate("/course")}>Start Now <span className="pl-2" >🌐</span></button>
    </div>

  <div className="w-[100%]  mx-auto mt-5 ">
    <p className="text-[20px] font-bold text-gray-800 p-2 pl-5"> 🗓️ {Validity}= <span className="text-red-600">{ValidityTime}</span></p>
    
    <p className="text-[20px] font-bold text-gray-800 p-2 pl-5"> 🎯{Descriptioncontant}</p>
  </div>
  <div>
    <ul className="list-disc pl-8 space-y-2 text-gray-700 text-[18px]">
  {DescriptionList.map((item, index) => (
    <li
      key={index}
      className="font-bold hover:text-[#ec7805] transition"
    >
      {item}
    </li>
  ))}
</ul>
  </div>
  </div>

</div>
<Footer/>
    </div>
  );
}

export default Home;
