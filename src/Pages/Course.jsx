import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer";

function Course() {
  return (
   <div className="pt-20 p-1 text-center">
      <Navbar/>
      <h1 className="text-2xl font-bold">Course Page</h1>
      <Footer/>

    </div>
  )
}

export default Course