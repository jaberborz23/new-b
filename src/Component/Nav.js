import React, { useState } from 'react'

import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../Assets/logo.png"
import ScrollspyNav from "react-scrollspy-nav";

const Nav = () => {
  let [show,setShow] = useState(false)
  let handleShow = ()=>{
    setShow(!show)
  }
  return (
    <section className='py-[40px] bg-white w-full fixed z-50'>
       <div className="max-w-container  mx-auto">
        <div className='flex justify-between items-center  '>
      <div className="w-1/2"> <img src={logo} alt="logo" />
      </div>
      <div className="w-1/2">
      <ScrollspyNav
       scrollTargetIds={["banner", "service", "car","company", "lorem","map" ]}
       offset={100}
       activeNavClass="is-active"
       scrollDuration="1000"
       headerBackground="true"
      
      
      >
      <ul className={` lg:flex sm:flex xs:flex xs:justify-evenly sm:justify-evenly items-center    gap-x-5 absolute left-0 top-0 lg:static ${show == true ? "top-[50px] sm:top-[80px] xxs:top-[70px] md:top-[80px] left-0 w-full bg-[#222]  transition duration-300 ease-in-out py-4 text-center z-[100]" : "top-[-370px] w-full left-0 transition duration-300 ease-in-out "}  ` } >
      <li><a href="#" className=' text-[14px] leading-[1.714] text-bl font-pt font-[400]'>   Home</a> </li>
         <li><a href="#" className=' text-[14px] leading-[1.714] text-[#000] font-pt font-[400]'  >About us</a></li>
         <li><a href="#" className=' text-[14px] leading-[1.714] text-[#000] font-pt font-[400]' >  Gallery</a></li>
         <li><a href="#" className=' text-[14px] leading-[1.714] text-[#000] font-pt font-[400]' >Testimonial</a></li>
         <li><a href="#"  className=' text-[14px] leading-[1.714] text-[#000] font-pt font-[400]'> Blogs</a></li> 
         <li><a href="#"  className=' text-[14px] leading-[1.714] text-[#000] font-pt font-[400]' > Contact</a></li>

       </ul>
       </ScrollspyNav>
      </div>
      <div className="lg:hidden mx-2" onClick={handleShow}>
        {show == true ? <ImCross /> : <FaBars />}
      </div>
        </div>
      

       


       </div>

    </section>
  )
}

export default Nav