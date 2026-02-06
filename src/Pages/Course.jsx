import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer";
import {Items , Headline} from './../Config/Course'
import Coursecard from '../Component/Coursecard'
function Course() {
  return (
   <div className="pt-20 p-1 text-center">
      <Navbar/>
      <h1 className="text-4xl mt-4 mb-3 text-gray-600 font-bold">"{Headline}"</h1>

      <div className='mb-2 flex flex-wrap Spaced-x-2'>
          {Items.map((items) => {
            const {  name, Image, oldPrice,price, duration, description } = items;

         return (
            <Coursecard 
    
                  name={name}
                  Image={Image}
                  oldPrice={oldPrice}
                  price={price}
                  duration={duration}
                  description={description}
              />
            );
          })}
      </div>



      <Footer/>

    </div>
  )
}

export default Course