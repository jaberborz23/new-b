import React from 'react'
import hn_1 from "../Assets/im_1.png"
import hn_2 from "../Assets/im_2.png"
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io"
const Test = () => {
  return (
    <div className='py-[60px]'>
    <div className="max-w-container mx-auto">

    <div className="w-full text-center relative after:absolute after:content-[''] after:w-[0px] after:h-[3px] after:bottom-[-10px] xxs:after:left-[140px] xs:after:left-[260px] sm:after:left-[290px] md:after:left-[320px] lg:after:left-[450px] xl:after:left-[620px]  hover:after:bg-sk hover:after:transition ease-in-out delay-[0.5s] hover:after:w-[130px]   " >
        <h2 className=' font-pt leading-[1px] font-[700] text-sc  '>TESTIMONIAL</h2>
     </div>

    
         <div className=" flex flex-wrap    justify-evenly     items-center  mt-[127px]  gap-x-2   w-full xxs:gap-y-[75px]    ">   
         <div className="  sm:w-[45%]  xs:w-full xxs:w-full lg:w-[45%]  bg-wh   ">

         <div className="relative">
          <img src={hn_1} alt="hn_1" width='full' className=' absolute  xl:left-[230px] lg:left-[197px] xxs:left-[150px] xs:left-[178px] sm:left-[128px] md:left-[135px] top-[-98px]'   />
          </div>

         <div className="">

          <h2 className=' xxs:text-center xl:pr-[87px] font-pt font-bold text-[16px]  leading-[1.5] text-lb 	text-transform: uppercase '  >Shahin Alom </h2>
        <div className=" relative">
         <div className=" flex absolute lg:left-[180px] xl:left-[217px] xxs:left-[135px] sm:left-[116px] xs:left-[149px] items-center  gap-x-1  ">
         <i className='  text-nt '>   <IoIosStar /> </i>    
         <i className=' text-nt'>   <IoIosStar /> </i>    
         <i className=' text-nt'>   <IoIosStar /> </i>    
         <i className=' text-nt'>   <IoIosStar /> </i>    
         <i className=' text-nt rotate-45'>   <IoIosStar /> </i>    
        
         </div>
         </div> 
         <h3 className=' text-center xl:pr-[87px] xxs:pt-4 lg:pt-3 xxs:text-center font-pt font-normal text-[13px]  leading-[1.846] text-sc  '>Chairman</h3>
         <p className=' text-center xl:pl-[77px] font-pt font-normal text-[13px]  leading-[1.846] text-lb lg:w-[416px] w-auto    '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
         
        
         </div>
         
         
         
         
         
         
         
         </div>
    
         <div className="  sm:w-[45%]  xs:w-full xxs:w-full lg:w-[45%]  bg-wh   ">

<div className="relative">
 <img src={hn_2} alt="hn_2" width='full' className=' absolute  xl:left-[230px] lg:left-[197px] xxs:left-[150px] xs:left-[178px] sm:left-[128px] md:left-[135px] top-[-98px]'   />
 </div>

<div className="">

 <h2 className=' xxs:text-center xl:pr-[87px] font-pt font-bold text-[16px]  leading-[1.5] text-lb 	text-transform: uppercase '  >MAhadi Tahsan </h2>
<div className=" relative ">
<div className=" flex absolute lg:left-[180px] xl:left-[217px] xxs:left-[135px] sm:left-[116px] xs:left-[149px] items-center  gap-x-1  ">
         <i className=' text-nt'>   <IoIosStar /> </i>    
         <i className=' text-nt'>   <IoIosStar /> </i>    
         <i className=' text-nt'>   <IoIosStar /> </i>    
         <i className=' text-nt'>   <IoIosStar /> </i>    
         <i className=' text-nt  rotate-45  '>   <IoIosStar /> </i>    
        

                       
</div>
</div> 
<h3 className=' text-center xl:pr-[87px] xxs:pt-4 lg:pt-3 xxs:text-center font-pt font-normal text-[13px]  leading-[1.846] text-sc  '>Executive Director</h3>
<p className=' text-center xl:pl-[77px] font-pt font-normal text-[13px]  leading-[1.846] text-lb lg:w-[416px] w-auto    '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>


</div>








</div>



    </div>






</div>
</div>
  )
}

export default Test