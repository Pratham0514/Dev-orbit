import React from 'react'
import { Navbar } from '../Component/Navbar'
import { useNavigate } from 'react-router-dom'
import { headline1,headline3,headline4 } from '../Config/Login'
import loginimage from './../assets/login.png';
function Login() {
  const navigate = useNavigate();
  return (
  <div className="pt-20 p-1 text-center">
      <Navbar/>
      <h1 className="text-5xl font-bold mt-[1%] text-gray-600">{headline1}</h1>

      <div className='border-2 border-balck rounded-[40px] border-dashed flex flex-warp w-[60%] mx-auto p-2  mt-[2%] '>
        <div className=' w-[50%]'>
            <h1  className="text-6xl pt-8 text-gray-600 font-bold">{headline3}</h1>
          <h1 className="text-1xl pt-1 text-gray-600 font-bold">{headline4}</h1>

        <form>
          <input type="text" placeholder="Email" className='border-2 border-balck mt-5  p-2 w-[80%] rounded-[40px]' />
          <input type="password" placeholder="Password" className='border-2 border-balck mt-3 mb-5 p-2 w-[80%] rounded-[40px]' />
          <button type="submit" className='border-2 border-balck mt-3 mb-5 p-2 w-[80%] bg-[#000000] rounded-[40px] text-white hover:bg-[#F2A65A]'>Login</button>
        </form>
         <p>Don't have an account? <button className='text-[blue] mb-2'onClick={()=>navigate("/signin")} >Sign Up</button></p>
        </div>
        <div className=' w-[60%] rounded-[40px]'>
            <img src={loginimage} alt="Signin" className="w-[90%] h-[100%] mx-auto rounded-[40px]" />
        </div>
      </div>
        
      </div>
  )
}

export default Login