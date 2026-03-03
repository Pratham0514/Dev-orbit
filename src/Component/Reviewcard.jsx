import React from "react";

function Reviewcard({ id, name, review, rating }) {

  // ⭐ Generate 5 stars dynamically
  const renderStars = () => {
    const totalStars = 5;

    return Array.from({ length: totalStars }, (_, index) => {
      return (
        <span
          key={index}
          className={`text-xl ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    });
  };
  return (
    <div className="border-2 border-[#ec7805] bg-[#FFF8DE] w-[220px] p-5 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300">

      {/* Name */}
      <h3 className="font-bold text-gray-700 text-lg mb-2">
        {name}
      </h3>

      {/* Review Text */}
      <p className="text-gray-600 text-sm mb-4">
        {review}
      </p>

      {/* Stars */}
      <div className="flex justify-center mb-2">
        {renderStars()}
      </div>

      {/* Numeric Rating */}
      <p className="text-sm text-gray-500">
        {rating}/5
      </p>

    </div>
  );
}

export default Reviewcard;