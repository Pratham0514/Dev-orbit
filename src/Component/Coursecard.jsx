import React from 'react'
import FullStack from "./../Images/Full-Stack.png";
function Coursecard({id,name,Image,oldPrice,price,duration,description}) {

  return (
   <div className="border-2 border-[#ec7805] mx-auto  mb-5 mt-5 mr-1
                rounded-[40px] flex pb-2 bg-[#FFF8DE] w-[49%] 
                shadow-lg gap-6 gap-x-1">

  {/* Image Section */}
  <div className="w-[50%] ml-3 mt-5 rounded-[40px] 
                  overflow-hidden 
                  flex items-center justify-center ">
    
    {Image ? (
      <img
        src={Image}
        alt={name}
        className="w-[100%] h-[90%] object-cover"
      />
    ) : (
      <p className="text-gray-500 text-lg font-semibold">
        No Image
      </p>
    )}
  </div>

  {/* Content Section */}
  <div className="w-[45%]  mt-5 rounded-[40px] 
                p-5 
                  flex flex-col justify-between">

    {/* ID hidden but structure kept */}
    {/* <p>{id}</p> */}

    <p className="text-4xl font-bold text-gray-600 text-left">
      {name}
    </p>
    <span className="text-[28px] font-bold text-gray-700 mt-3 text-left">
      What you will Learn
    </span>

    <p className="text-[18px] text-gray-700 mt-3 leading-relaxed text-justify">
      {description}
    </p>

    <div className='mt-2 text-center text-left'>
        <span className="text-[20px] font-bold text-gray-800 mt-2 ">
      ₹{oldPrice}
    </span>

    <span className="text-green-600 text-2xl font-bold mt-2 ml-5">
      ₹{price}
    </span>
    </div>

    <p className="text-[20px] font-bold text-gray-800 mt-2 text-left ">
      ⏱Duration : {duration}
    </p>

    <button className="p-3 mt-3 px-6 border-2 border-[#F2A65A] border-solid bg-[#000000] text-white rounded-full hover:bg-[#F2A65A] " >
      Enroll Now
      <span className=" pl-2">🌐</span>
    </button>
  </div>
</div>
  )
}

export default Coursecard