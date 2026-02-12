import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../images/Main-logo-1.png";

export function Footer() {
  const activeClass =
    "font-semibold text-md border-b-2 border-[#F2A65A] px-4 py-1 rounded-xl transition hover:bg-[#e9cbad]";
  const inactiveClass =
    "text-gray-800 px-4 py-1 rounded-xl transition hover:bg-[#e9cbad]";

  return (
    <footer className="flex flex-wrap justify-between bg-[#E8E2D8] px-6 py-6 shadow-inner text-gray-700">
      
      {/* Logo and Info */}
      <div className="flex flex-col items-start gap-2 w-[400px]">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={logo}
            alt="Dev-Orbit Logo"
            className="w-14 h-14 rounded-full"
          />
          <span className="text-2xl font-bold">Dev-Orbit</span>
        </div>

        <p className="text-sm mb-2 font-semibold">
          At DevOrbit, we believe quality education should be accessible to all.
          Our programming courses are designed for beginners and professionals alike.
        </p>
      </div>

  
      <div className="w-[200px] text-center">
        <p className="mb-2 text-xl font-bold">Quick Links</p>

        <div className="flex flex-col gap-2">
          <NavLink to="/" end className={({ isActive }) =>
            isActive ? activeClass : inactiveClass
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? activeClass : inactiveClass
          }>
            About
          </NavLink>

          <NavLink to="/course" className={({ isActive }) =>
            isActive ? activeClass : inactiveClass
          }>
            Course
          </NavLink>
        </div>
      </div>

      {/* Contact */}
      <div className="w-[300px]">
        <p className="mb-2 text-center text-xl font-bold">Contact Us</p>

        <label htmlFor="email" className="font-semibold">
         
        </label>
        <a
          id="email"
          href="mailto:
          Devorbit@gmail.com"
          className="text-blue-600 block"
        >
         <span className="text-black">📩 Email :</span>  Devorbit@gmail.com
        </a>

        <label htmlFor="phone" className="font-semibold">
         
        </label>
        <a
          id="phone"
          href="tel:+919834673813"
          className="text-blue-600 block"
        >
          <span className="text-black"> ☎️ Phone :</span> +91 9834673813
        </a>

        <p className="font-semibold mt-2">
          📍 Address: XYZ Street, Nashik, Maharashtra, India
        </p>
      </div>

    </footer>
  );
}
