import React from 'react'
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";


const Contact = () => {

  const [showPass, hidePass] = useState (false)

  const handelShowPass = ()=>{
    hidePass(!showPass)
  }
  return (
    <>

    <div className="log">
    <form className=' flex flex-col items-center gap-[5px] mt-24'>
        <h1 className=" text-[25px] font-bold items-center mb-5">For contact me , please sign up!</h1>
        <input className='w-[300px] h-[50px] border-2 border-[#0e0e0d] rounded-lg' type="text" placeholder='Name' />
        <input className='w-[300px] h-[50px] border-2 border-[#0e0e0d] rounded-lg' type="email" placeholder='E-mail' />
        <div className=" relative w-[300px] h-[50px]">
          {
            showPass?
            <FiEye onClick={handelShowPass} className=" absolute top-[50%] right-5 translate-y-[-50%]"/>
            :
            <FaRegEyeSlash onClick={handelShowPass} className=" absolute top-[50%] right-5 translate-y-[-50%]"/>
          }
          
          
        <input className='w-[300px] h-[50px] border-2 border-[#0b0b0b] rounded-lg' type={showPass? "text" : "password"}  placeholder='Password'/>
        </div>
        <button className=' w-[300px] h-[40px] bg-emerald-300 text-xl text-white rounded-lg mt-3'>Sign Up</button>
       
      </form>

    </div>

      
    </>
  )
}

export default Contact
