import React from 'react'
import { NavLink } from "react-router-dom"
import logo from './../assets/main-logo.png'

export function Navbar() {
  const activeClass =
    "font-semibold border-b-5 text-5md border-[#e9cbad]-600   hover:bg-[#e9cbad] border-[#F2A65A] px-4 py-1 rounded-xl transition"

  const inactiveClass =
    "text-gray-800 hover:bg-[#e9cbad] px-4 py-1 rounded-xl transition"

  return (
    
 <nav className="flex flex-col md:flex-row fixed top-0 left-0 w-full z-50 
                justify-between items-center 
                bg-[#8CA9FF] px-4 md:px-6 py-3 
                shadow-md rounded-xl gap-3 md:gap-0">

  
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Dev-Orbit Logo"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full"
        />
        <span className="text-xl md:text-2xl font-bold">
          Dev-Orbit
        </span>
      </div>

     
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <NavLink to="/" end className={({ isActive }) =>
          isActive ? activeClass : inactiveClass
        }>
          Home
        </NavLink>

        <NavLink to="/about" end className={({ isActive }) =>
          isActive ? activeClass : inactiveClass
        }>
          About
        </NavLink>

        <NavLink to="/course" className={({ isActive }) =>
          isActive ? activeClass : inactiveClass
        }>
          Course
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? activeClass : inactiveClass
        }>
          Contact
        </NavLink>
      </div>

      <div className="flex gap-2 md:gap-4">
        <NavLink
          to="/login"
          className="hover:bg-[#e9cbad] px-4 py-1 rounded-xl transition"
        >
          Login
        </NavLink>

        <NavLink
          to="/signin"
          className="bg-[#F2A65A] px-4 py-1 rounded-xl hover:bg-[#e9cbad] transition"
        >
          SignUp
        </NavLink>
      </div>

    </nav>
  )
}
