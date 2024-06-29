import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";
import { BsMenuButtonWide } from "react-icons/bs";
import { useState } from "react";


const Navbar = () => {
  const [show, setShow]=useState(false)

  const handleShow=()=>{
    setShow(!show)
  } 
   

  return (
    <>
      <nav className="">
        <div className="container">
          <div className="manu_row p-5 flex justify-between flex-wrap mt-10">
            <div className="logo_col">
            <img src="pic/logo.png" alt="Logo" />
            </div>
            <div className="manu relative">
            <BsMenuButtonWide onClick={handleShow} className='text-xl md:hidden'/>
              {
                show &&
                <ul className=" gap-4 text-[13px] font-poppins font-medium absolute right-0 top-[90%]">
              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to="/"> <IoHomeOutline className="text-xl" /> Home</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/About'><FaRegAddressCard className="text-xl" /> About</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Resume'> <RiFileUserLine className="text-xl" /> Resume</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Works'><IoBriefcaseOutline className="text-xl" /> Works</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Blogs'> <FaRegNewspaper className="text-xl" /> Blogs</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Contact'><FaRegAddressBook className="text-xl" /> Contacts</NavLink></li>
              </ul>
              }
               <div className='hidden md:block'>
               <ul className="flex flex-wrap gap-4 text-[13px] font-poppins font-medium ">
              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to="/"> <IoHomeOutline className="text-xl" /> Home</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/About'><FaRegAddressCard className="text-xl" /> About</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Resume'> <RiFileUserLine className="text-xl" /> Resume</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Works'><IoBriefcaseOutline className="text-xl" /> Works</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Blogs'> <FaRegNewspaper className="text-xl" /> Blogs</NavLink></li>

              <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Contact'><FaRegAddressBook className="text-xl" /> Contacts</NavLink></li>
              </ul>
               </div>

            </div>
          </div>
          
        </div>
       

      </nav>
    </>
  )
}

export default Navbar

