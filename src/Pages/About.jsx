import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer";

function About() {
  return (
 <div className="pt-20 p-1 text-center">
      <Navbar/>
      <h1 className="text-2xl font-bold">About Page</h1>
      <Footer/>
      </div>
  )
}

export default About