import React from 'react'
import one from "../Assets/1.png"
import one2 from "../Assets/2.png"
import one3 from "../Assets/3.png"
import one4 from "../Assets/t4.png"
import { FaFacebookF,FaLinkedinIn, FaPinterestP, FaTwitter  } from "react-icons/fa";

const Team = () => {
  return (
    <div className='py-[36px] bg-wh'>
      <div className="max-w-container mx-auto">


        <div className=" flex flex-wrap items-center justify-around gap-y-3">

          <div className="lg:w-[25%] w-1/2 xxs:w-full xs:w-full sm:w-1/2">

       <div className=" xxs:ml-[53px] lg:ml-0 ">

            <div className="relative overflow-hidden group">
<img src={one} alt="one" width='full' />
<div className="  absolute  h-[100%] w-[0] bottom-0 xl:right-[124px] lg:right-[35px] md:right-[101px] xxs:right-[75px] flex items-center justify-center bg-[rgba(0,0,0,0.68)]  transition-all duration-[0.6s] group-hover:bottom-0 opacity-[0] group-hover:opacity-100 group-hover:w-[75%]  ">
 

</div>
</div>
<div className="  ml-[68px] mt-2  ">
            <h2 className='  font-medium leading-[1.5] text-[16px] text-sc hover:text-sk'>Sajal Sarder</h2>
            <h3 className=' font-os font-normal text-[14px] leading-[1.714] text-lb '>Web Designer</h3>
            </div>
      
            </div>
         



















          </div>

        
          <div className="lg:w-[25%] w-1/2 xxs:w-full xs:w-full sm:w-1/2">

       <div className=" xxs:ml-[53px] lg:ml-0 ">

            <div className="relative overflow-hidden group">
<img src={one3} alt="one3" width='full' />
<div className="  absolute  h-[100%] w-[0] bottom-0 xl:right-[124px] lg:right-[35px] md:right-[101px] xxs:right-[75px] flex items-center justify-center bg-[rgba(0,0,0,0.68)]  transition-all duration-[0.6s] group-hover:bottom-0 opacity-[0] group-hover:opacity-100 group-hover:w-[75%]  ">
 

</div>
</div>
<div className="  ml-[68px] mt-2  ">
            <h2 className='  font-medium leading-[1.5] text-[16px] text-sc hover:text-sk '>Sakeba Aney</h2>
            <h3 className=' font-os font-normal text-[14px] leading-[1.714] text-lb '>Web Designer</h3>
            </div>
      
            </div>
         



















          </div>




          <div className="lg:w-[25%] w-1/2 xxs:w-full xs:w-full sm:w-1/2">

       <div className=" xxs:ml-[53px] lg:ml-0 ">

            <div className="relative overflow-hidden group">
<img src={one2} alt="one2" width='full' />
<div className="  absolute  h-[100%] w-[0] bottom-0 xl:right-[124px] lg:right-[35px] md:right-[101px] xxs:right-[75px] flex items-center justify-center bg-[rgba(0,0,0,0.68)]  transition-all duration-[0.6s] group-hover:bottom-0 opacity-[0] group-hover:opacity-100 group-hover:w-[75%]  ">
 <div className=" ">
<div className="border-2 h-[45px] relative  border-transparent w-[45px] rounded-[50%] bg-sb hover:bg-[gray]  ">
<i className='text-white absolute left-[12px] top-[10px] '> <FaFacebookF /></i>

</div>
<div className="mt-4 border-2 h-[45px] relative border-transparent w-[45px] rounded-[50%] bg-sb hover:bg-[gray] ">
<i className='text-white absolute left-[12px] top-[10px]  '> <FaLinkedinIn /></i>

</div>

<div className="mt-4 border-2 h-[45px] relative  border-transparent w-[45px] rounded-[50%] bg-sb hover:bg-[gray]  ">
<i className='text-white absolute left-[12px] top-[10px]  '>  <FaPinterestP /></i>

</div>
<div className="mt-4 border-2 h-[45px] relative  border-transparent w-[45px] rounded-[50%] bg-sb hover:bg-[gray]  ">
<i className='text-white absolute left-[12px] top-[10px]  '> <FaTwitter /></i>

</div>
 
 
 
 
     
       {/* <i className='text-white'> <FaLinkedinIn /></i>
       <i className='text-white'> <FaPinterestP /></i>
       <i className='text-white' > <FaTwitter /></i> */}
     
       






 </div>

</div>
</div>
<div className="  ml-[68px] mt-2  ">
            <h2 className='  font-medium leading-[1.5] text-[16px] text-sk hover:text-[#000] '>ABS Ujjal</h2>
            <h3 className=' font-os font-normal text-[14px] leading-[1.714] text-lb '>Web Designer</h3>
            </div>
      
            </div>
         



















          </div>










          <div className="lg:w-[25%] w-1/2 xxs:w-full xs:w-full sm:w-1/2">

       <div className=" xxs:ml-[53px] lg:ml-0 ">

            <div className="relative overflow-hidden group">
<img src={one4} alt="one4" width='full' />
<div className="  absolute  h-[100%] w-[0] bottom-0 xl:right-[124px] lg:right-[35px] md:right-[101px] xxs:right-[75px] flex items-center justify-center bg-[rgba(0,0,0,0.68)]  transition-all duration-[0.6s] group-hover:bottom-0 opacity-[0] group-hover:opacity-100 group-hover:w-[75%]  ">
 

</div>
</div>
<div className="  ml-[68px] mt-2  ">
            <h2 className='  font-medium leading-[1.5] text-[16px] text-sc hover:text-sk '>Aney Irin</h2>
            <h3 className=' font-os font-normal text-[14px] leading-[1.714] text-lb '>Web Designer</h3>
            </div>
      
            </div>
         



















          </div>



        </div>










      </div>






    </div>
  )
}

export default Team