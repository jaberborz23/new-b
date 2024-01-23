import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaPinterestP, FaBehance  } from "react-icons/fa";


const Header = () => {
  return (
    <div className=' bg-bl py-[20px]'>
     <div className='max-w-container mx-auto'>
     <div className='flex flex-wrap  justify-between items-center'>
      <div className='w-[60%]'>
      
        <p className='font-pt text-[14px] leading-[1.714] text-left text-wh font-[400]'> Welcome to Beatles</p>

      
      
       
        </div>
      <div className="w-[40%]  ">
        <div className="flex flex-wrap justify-around  ">
         
       <i className='text-white'> <FaFacebookF /></i>
       <i className='text-white' > <FaTwitter /></i>
       <i className='text-[#000]'> <FaLinkedinIn /></i>
       <i className='text-white'> <FaPinterestP /></i>
       <i className='text-white'> < FaBehance /></i>
       
    

      

        </div>
      

       
    










      </div>

   
     </div>






     </div>
  




   


  

 


   
    </div>
  )
}

export default Header