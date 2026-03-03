import React from "react";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";
import { AboutContent, TeamContent } from "../Config/About";
import Teamcard from "../Component/Teamcard";
import { Reviews, Headline6 } from "../Config/Review";
import Reviewcard from "../Component/Reviewcard";
import whyus from "../assets/whyus.png";

function About() {
  return (
    <div>
      <Navbar />

      <div className="pt-24 px-4 text-center">

        {/* Main Headline */}
        <p className="text-2xl md:text-4xl mt-6 mb-5 text-gray-600 font-bold">
          "{AboutContent.headline}"
        </p>

        {/* Main Description */}
        <div className="w-[95%] md:w-[70%] mx-auto p-4 rounded-[40px] bg-[#FFF8DE]">
          <p className="text-base md:text-xl text-gray-500 font-bold">
            "{AboutContent.description}"
          </p>
        </div>

        {/* Why Us Section */}
        <div className="w-[95%] md:w-[70%] mt-10 mx-auto">
          <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6">
            {AboutContent.differencesHeadline}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-center">

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={whyus}
                alt="Why Us"
                className="w-[90%] md:w-[70%] h-auto rounded-[40px]"
              />
            </div>

            {/* Points */}
            <div className="bg-white w-full md:w-1/2 p-6 rounded-2xl shadow-lg">
              <ul className="space-y-4 text-left">
                {AboutContent.differences.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#F2A65A] text-xl">✔</span>
                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Vision Section */}
        <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6 mt-10">
          {AboutContent.visionHeadline}
        </h1>

        <div className="w-[95%] md:w-[70%] mx-auto p-4 rounded-[40px] bg-[#FFF8DE]">
          {AboutContent.vision.map((item, index) => (
            <p key={index} className="text-base md:text-xl text-gray-500 font-bold mb-3">
              {item}
            </p>
          ))}
        </div>

        {/* Short Section */}
        <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6 mt-10">
          {AboutContent.compactHeadline}
        </h1>

        <div className="w-[95%] md:w-[70%] mx-auto p-4 rounded-[40px] bg-[#FFF8DE]">
          <p className="text-base md:text-xl text-gray-500 font-bold">
            "{AboutContent.compactDescription}"
          </p>
        </div>

        {/* Team Section */}
        <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6 mt-10">
          {TeamContent.headline}
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mb-10 md:gap-2">
          {TeamContent.members.map((item) => (
            <Teamcard
              key={item.id}
              pimage={item.image}
              name={item.name}
              role={item.role}
              description={item.description}
            />
          ))}
        </div>

        {/* Reviews Section */}
        <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6 mt-10">
          {Headline6}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Reviews.map((item) => (
            <Reviewcard
              key={item.id}
              name={item.name}
              review={item.review}
              rating={item.rating}
            />
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;