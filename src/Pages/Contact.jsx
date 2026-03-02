import { Navbar } from '../Component/Navbar'
import { Footer } from "../Component/Footer";
import { Headline1, description, Headline2 } from '../Config/Contactus'
import service from "./../assets/Service.png";

function Contact() {
  return (
    <div className="pt-20 px-4 text-center">
      
      <Navbar />

      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-6 text-gray-600">
        {Headline1}
      </h1>  

      <p className="text-lg md:text-2xl font-bold text-gray-500">
        {description}
      </p>  
        
      {/* Main Container */}
      <div className="flex flex-col md:flex-row 
                      w-[95%] md:w-[70%] mx-auto 
                      mt-8 mb-10 p-4 
                      rounded-[40px] gap-6">

        {/* Image Section */}
        <div className="w-full md:w-[65%] flex justify-center items-center">
          <img 
            src={service} 
            alt="Service" 
            className="w-[90%] md:w-[75%] h-auto rounded-[40px]" 
          />
        </div>

        {/* Form Section */}
        <form className="w-full md:w-[35%] 
                         rounded-[40px] px-4 py-6 
                         bg-[#FFF8DE] shadow-lg">

          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">
            {Headline2}
          </h1>

          <input
            type="text"
            placeholder="Name"
            className="w-full h-10 border-2 border-[#ec7805] mb-4 
                       rounded-[40px] px-4 bg-[#FFF8DE] 
                       focus:outline-none focus:ring-2 focus:ring-[#ec7805]"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-10 border-2 border-[#ec7805] mb-4 
                       rounded-[40px] px-4 bg-[#FFF8DE] 
                       focus:outline-none focus:ring-2 focus:ring-[#ec7805]"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full h-10 border-2 border-[#ec7805] mb-4 
                       rounded-[40px] px-4 bg-[#FFF8DE] 
                       focus:outline-none focus:ring-2 focus:ring-[#ec7805]"
          />

          <textarea
            placeholder="Message"
            className="w-full h-28 border-2 border-[#ec7805] mb-6 
                       rounded-[30px] px-4 py-2 bg-[#FFF8DE] 
                       resize-none focus:outline-none 
                       focus:ring-2 focus:ring-[#ec7805]"
          />

          <button
            type="submit"
            className="w-full h-11 rounded-[40px] 
                       bg-black text-white text-base md:text-lg 
                       hover:bg-[#ec7805] transition duration-300"
          >
            Submit
          </button>

        </form>
      </div>

      <Footer />
      
    </div>
  )
}

export default Contact