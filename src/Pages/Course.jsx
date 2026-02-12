import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer"
import { Items, Headline } from './../Config/Course'
import Coursecard from '../Component/Coursecard'

function Course() {
  return (
    <div className="pt-20 p-1 text-center">
      <Navbar />

      <h1 className="text-4xl mt-4 mb-3 text-gray-600 font-bold">
        "{Headline}"
      </h1>

    
      <div className="mb-2 flex flex-wrap gap-4 justify-center">
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
