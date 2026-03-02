import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer";
import { Headline, Description, Description2, Headline2, Description3, Headline3, Description4, Headline4, Headline5, TeamMembers } from './../Config/About'
import Teamcard from '../Component/Teamcard'
import { Reviews, Headline6 } from '../Config/Review';
import Reviewcard from '../Component/Reviewcard'
import whyus from "./../assets/whyus.png";

function About() {
  return (
    <div>
      
      <div className="pt-20 px-4 text-center">
        <Navbar />

        {/* Main Headline */}
        <p className="text-2xl md:text-4xl mt-6 mb-5 text-gray-600 font-bold">
          "{Headline}"
        </p>

        {/* Main Description */}
        <div className="w-[95%] md:w-[70%] mx-auto p-4 rounded-[40px] bg-[#FFF8DE]">
          <p className="text-base md:text-xl text-gray-500 font-bold">
            "{Description}"
          </p>
        </div>

        {/* Why Us Section */}
        <div className="w-[95%] md:w-[70%] mt-10 mx-auto">
          <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6">
            {Headline2}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-center">

            {/* Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={whyus}
                alt="Why Us"
                className="w-[90%] md:w-[70%] h-auto rounded-[40px]"
              />
            </div>

            {/* Points */}
            <div className="bg-white w-full md:w-1/2 p-6 rounded-2xl shadow-lg">
              <ul className="space-y-4 text-left">
                {Description2.map((item, index) => (
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

        {/* Section 3 */}
        <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6 mt-10">
          {Headline3}
        </h1>

        <div className="w-[95%] md:w-[70%] mx-auto p-4 rounded-[40px] bg-[#FFF8DE]">
          <p className="text-base md:text-xl text-gray-500 font-bold">
            "{Description3}"
          </p>
        </div>

        {/* Section 4 */}
        <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6 mt-10">
          {Headline4}
        </h1>

        <div className="w-[95%] md:w-[70%] mx-auto p-4 rounded-[40px] bg-[#FFF8DE]">
          <p className="text-base md:text-xl text-gray-500 font-bold">
            "{Description4}"
          </p>
        </div>

        {/* Team Section */}
        <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6 mt-10">
          {Headline5}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {TeamMembers.map((item) => {
            const { id, name, img, role, description } = item;
            return (
              <Teamcard
                key={id}
                id={id}
                pimage={img}
                name={name}
                role={role}
                description={description}
              />
            );
          })}
        </div>

        {/* Reviews Section */}
        <h1 className="text-2xl md:text-4xl text-gray-600 font-bold mb-6 mt-10">
          {Headline6}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Reviews.map((item) => {
            const { id, name, review, rating } = item;
            return (
              <Reviewcard
                key={id}
                id={id}
                name={name}
                review={review}
                rating={rating}
              />
            );
          })}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default About