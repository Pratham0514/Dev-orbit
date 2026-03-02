import { Navbar } from "../Component/Navbar"; 
import { useNavigate } from "react-router-dom";
import fullstack from "./../assets/Full-Stack.png";
import { Footer } from "../Component/Footer";
import {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Descriptioncontant,
  oldPrice,
  price,
  Validity,
  ValidityTime,
  DescriptionList
} from "../Config/Home";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 px-4 text-center">
        <p className="text-2xl md:text-5xl font-bold text-gray-600">
          “{Headline1}”
        </p>
        <p className="mt-4 text-gray-500 text-lg font-semibold">
          {Headline2}
        </p>
        <p className="mt-3 text-xl md:text-2xl text-gray-600 font-bold">
          {Headline3}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <button
            className="px-6 py-3 border-2 border-[#F2A65A] bg-black text-white rounded-full hover:bg-[#F2A65A] transition"
            onClick={() => navigate("/contact")}
          >
            Connect With Us ☎️
          </button>

          <button
            className="px-6 py-3 border-2 border-[#F2A65A] bg-black text-white rounded-full hover:bg-[#F2A65A] transition"
            onClick={() => navigate("/course")}
          >
            Begin Your Journey 🌐
          </button>
        </div>
      </div>

      {/* Course Highlight Section */}
      <div className="max-w-6xl mx-auto mt-16 mb-20 px-4">
        <div className="bg-[#FFF8DE] border-2 border-[#ec7805] rounded-3xl p-6 flex flex-col md:flex-row gap-8 items-center">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={fullstack}
              alt="Full stack"
              className="w-full rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">

            <h1 className="text-2xl md:text-4xl font-bold text-gray-600">
              {Headline4}
            </h1>

            <p className="text-xl md:text-2xl font-bold text-gray-700 mt-3">
              {Headline5}
            </p>

            <p className="text-lg font-semibold text-gray-800 mt-3">
              {Headline6}
            </p>

            {/* Price + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
              <div>
                <span className="text-gray-500 text-xl line-through mr-3">
                  {oldPrice}
                </span>
                <span className="text-green-600 text-2xl font-bold">
                  {price}
                </span>
              </div>

              <button
                className="px-6 py-2 border-2 border-[#F2A65A] bg-black text-white rounded-full hover:bg-[#F2A65A] transition"
                onClick={() => navigate("/course")}
              >
                Start Now 🌐
              </button>
            </div>

            {/* Validity */}
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-800">
                🗓️ {Validity} ={" "}
                <span className="text-red-600">{ValidityTime}</span>
              </p>

              <p className="text-lg font-semibold text-gray-800 mt-2">
                🎯 {Descriptioncontant}
              </p>
            </div>

            {/* Description List */}
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              {DescriptionList.map((item, index) => (
                <li
                  key={index}
                  className="font-semibold hover:text-[#ec7805] transition"
                >
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Home;