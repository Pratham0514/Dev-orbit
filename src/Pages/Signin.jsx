import React from "react";
import { Navbar } from "../Component/Navbar";
import { useNavigate } from "react-router-dom";
import { headline1, headline3, headline4 } from "../Config/Signin";
import signinImg from "./../assets/Signin.png";

function Signin() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-4 text-center">
      <Navbar />

      <h1 className="text-2xl md:text-5xl font-bold text-gray-600">
        {headline1}
      </h1>

      <div className="max-w-5xl mx-auto mt-10 border-2 border-black border-dashed rounded-3xl p-6 flex flex-col md:flex-row items-center gap-8">

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl text-gray-600 font-bold">
            {headline3}
          </h2>

          <p className="text-gray-600 font-semibold mt-2">
            {headline4}
          </p>

          <form className="mt-6 flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-black p-3 w-full rounded-full"
            />

            <input
              type="password"
              placeholder="Password"
              className="border-2 border-black p-3 w-full rounded-full"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="border-2 border-black p-3 w-full rounded-full"
            />

            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-full hover:bg-[#F2A65A] transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4">
            Have an account?{" "}
            <button
              className="text-blue-600 font-semibold hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={signinImg}
            alt="Signin"
            className="w-full max-w-md mx-auto rounded-3xl"
          />
        </div>

      </div>
    </div>
  );
}

export default Signin;