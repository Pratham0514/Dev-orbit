import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer"
import { Items, Headline } from './../Config/Course'
import Coursecard from '../Component/Coursecard'

function Course() {
  return (
    <div className="pt-20 px-4 text-center">
      
      <Navbar />

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl mt-6 mb-6 text-gray-600 font-bold">
        "{Headline}"
      </h1>

      {/* Course Cards Container */}
      <div className="mb-10 
                      flex flex-wrap 
                      justify-center 
                      gap-6">
        {Items.map((item) => {
          return (
            <Coursecard
              key={item.id}
              id={item.id}
              name={item.name}
              cimage={item.cimage}
              oldPrice={item.oldPrice}
              price={item.price}
              duration={item.duration}
              description={item.description}
            />
          )
        })}
      </div>

      <Footer />

    </div>
  )
}

export default Course