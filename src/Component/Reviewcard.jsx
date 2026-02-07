import React from 'react'


function Reviewcard({id, name, review, rating}) {
  
  return (
    <div className="border-2 border-[#ec7805] bg-[#FFF8DE] w-[220px] p-4 rounded-xl text-center ml-[3%]  ">
        <p className=" mb-4 mx-auto">{name}</p>
        <p  className=" mb-4 mx-auto text-center">{review}</p>
        <p  className=" mb-4 mx-auto">{rating}</p>
    </div>
  )
}

export default Reviewcard