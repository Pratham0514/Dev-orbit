import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer";
import {Headline,Description,Description2,Headline2,Description3,Headline3,Description4,Headline4,Headline5,TeamMembers } from './../Config/About'
import Teamcard from '../Component/Teamcard'

function About() {
  return (
  <div>
 <div className="pt-20 p-1 text-center">
      <Navbar/>
      <p className="text-4xl mt-6 mb-5 text-gray-600 font-bold">"{Headline}"</p>
       <div className='w-[70%] mx-auto boder-2 bg-white w-1/2 p-2  rounded-[40px] flex pb-2 bg-[#FFF8DE]'>
              <p className=" mx-auto text-xl mt-6 mb-5 text-gray-500 font-bold">"{Description}"</p>
            </div>

      <div>
        <div className=" w-[70%] mt-10  min-h-[380px] p-4 mx-auto">
          <h1 className="text-4xl text-gray-600 font-bold mb-6">{Headline2}</h1>
            <div className="flex gap-4">
              <div className="border-2 border-black w-1/2  flex items-center justify-center">
                {/* Image */}image
            </div>
            <div className="bg-white w-1/2  p-6 rounded-2xl shadow-lg">
              <ul className="space-y-4">
                  {Description2.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                    <span className="text-[#F2A65A] text-xl">✔</span>
                        <span className="text-gray-700 font-medium">
                      {item}
                    </span>
                  </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

            <h1 className="text-4xl text-gray-600 font-bold mb-6">{Headline3}</h1>
             <div className='w-[70%] mx-auto boder-2 bg-white w-1/2 p-2  rounded-[40px] flex pb-2 bg-[#FFF8DE]'>
              <p className=" mx-auto text-xl mt-6 mb-5 text-gray-500 font-bold">"{Description3}"</p>
            </div>

            <h1 className="text-4xl text-gray-600 font-bold mb-6 mt-9" >{Headline4}</h1>
                  <div className='w-[70%] mx-auto boder-2 bg-white w-1/2 p-2  rounded-[40px] flex pb-2 bg-[#FFF8DE]'>
              <p className=" mx-auto text-xl mt-6 mb-5 text-gray-500 font-bold">"{Description4}"</p>
            </div>

        <h1 className="text-4xl text-gray-600 font-bold mb-6 mt-9">{Headline5}</h1>
            <div className="flex gap-6 flex-wrap mb-4">
            {TeamMembers.map((item) => {
            const { id, image, name, role, description } = item;
            return (
                <Teamcard
                      key={id}
                      id={id}
                      img={image}
                      name={name}
                      role={role}
                      description={description}
                  />
                  );
        })}
     </div>
    </div>
      <Footer/>
  </div>
  )
}

export default About