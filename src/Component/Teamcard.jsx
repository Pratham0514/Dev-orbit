import React from "react";

function Teamcard({ img, name, role, description }) {
  return (
    <div className="border-2 border-[#ec7805] bg-[#FFF8DE] w-[220px] p-4 rounded-xl text-center ml-[3%]">
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-20 h-20 mx-auto rounded-full mb-3 "
        />
      ) : (
        <div className="w-20 h-20 mx-auto rounded-full mb-3 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm">No Image</span>
        </div>
      )}
      <h2 className="font-bold text-gray-600 text-lg">{name}</h2>
      <h3 className="text-[#F2A65A]  text-md font-semibold">{role}</h3>
      <p className="text-md text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default Teamcard;
