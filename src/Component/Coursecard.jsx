import React from 'react'
import { NavLink } from 'react-router-dom'
function Coursecard({id,name,cimage,oldPrice,price,duration,description}) {


  return (
<div className="border-2 border-[#ec7805] mx-auto mb-5 mt-5
                rounded-[40px] flex flex-col md:flex-row
                pb-4 bg-[#FFF8DE] w-[95%] md:w-[49%]
                shadow-lg gap-6">

 
 <div className="w-full md:w-[50%] mt-5 md:ml-3 rounded-[40px] 
                overflow-hidden 
                flex items-center justify-center">
    
    {cimage ? (
      <img
        src={cimage}
        alt={name}
        className="w-[100%] h-[90%] object-cover"
      />
    ) : (
      <p className="text-gray-500 text-lg font-semibold">
        No Image
      </p>
    )}
  </div>

  
<div className="w-full md:w-[45%] mt-5 rounded-[40px] 
                p-5 flex flex-col justify-between">

    

    <p className="text-2xl md:text-4xl font-bold text-gray-600 text-left">
      {name}
    </p>
    <span className="text-xl md:text-[28px] font-bold text-gray-700 mt-3 text-left">
      What you will Learn
    </span>

   <p className="text-sm md:text-[18px] text-gray-700 mt-3 leading-relaxed text-justify">
      {description}
    </p>

    <div className='mt-2 text-center text-left'>
       <span className="text-lg md:text-[20px] font-bold text-gray-800 mt-2">
      ₹{oldPrice}
    </span>

    <span className="text-xl md:text-2xl font-bold text-green-600 mt-2 ml-5">
      ₹{price}
    </span>
    </div>

   <p className="text-lg md:text-[20px] font-bold text-gray-800 mt-2 text-left">
      ⏱Duration : {duration}
    </p>

    <NavLink to={`/form/${id}`} className="p-3 mt-3 px-6 border-2 border-[#F2A65A] border-solid bg-[#000000] text-white rounded-full hover:bg-[#F2A65A] " >
      Enroll Now
      <span className=" pl-2">🌐</span>
    </NavLink>
  </div>
</div>
  )
}

export default Coursecard