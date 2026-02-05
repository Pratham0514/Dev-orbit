import React from 'react'
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
  <nav className="flex gap-6 bg-white px-6 py-3 shadow-md">
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      isActive
        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    end
    className={({ isActive }) =>
      isActive
        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }
  >
    About
  </NavLink>

  <NavLink
    to="/course"
    className={({ isActive }) =>
      isActive
        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }
  >
    Course
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `px-3 py-1 rounded transition
      ${isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"}`
    }
  >
    Contact
  </NavLink>

  <NavLink
    to="/login"
    className="ml-auto text-gray-700 hover:text-blue-600"
  >
    Login
  </NavLink>

  <NavLink
    to="/signup"
    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
  >
    SignUp
  </NavLink>
</nav>

  )
}