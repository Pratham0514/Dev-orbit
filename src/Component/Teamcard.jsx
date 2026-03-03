import React from "react";

function Teamcard({ pimage, name, role, description }) {
  return (
    <div
      className="border-2 border-[#ec7805]  bg-[#FFF8DE]  w-full sm:w-[240px] md:w-[260px] p-5 rounded-xl text-center mx-auto shadow-md hover:shadow-lg transition duration-300
      "
    >
      {/* Image */}
      {pimage ? (
        <img
          src={pimage}
          alt={name}
          className="w-16 h-16 mx-auto rounded-full mb-3 object-cover border-2 border-[#F2A65A]  md:w-24 md:h-24 md:mb-4"
        />
      ) : (
        <div className="w-20 h-20 mx-auto rounded-full mb-3 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm">No Image</span>
        </div>
      )}

      <h2 className="font-bold text-gray-600 text-lg">{name}</h2>

      <h3 className="text-[#F2A65A] text-md font-semibold">{role}</h3>

      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Teamcard;