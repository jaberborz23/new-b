import React from 'react'
import ban from "../Assets/ban.png"

const Banner = () => {
  return (
    <section id='' className=' w-full py-[300px] z-[1] relative after:absolute after:top-0 after:left-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.64)] opacity-0.6 after:z-[-1] xs:w-auto xxs:w-auto'style={{ backgroundImage: `url(${ban})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",backgroundPosition: "center",width: "full", backgroundAttachment: "fixed" }} >
 
   <div className="max-w-container mx-auto ">

    <div className=" relative">
    <div className="w-[75%] text-right">
   
    <h2 className='text-right text-white font-os font-normal text-[30px] leading-[1.2]'>HI ! WE ARE</h2>
     <h1 className='text-right font-os font-bold text-wh xxs:text-[32px] xs:text-[36px] text-[40px] leading-[1.2]'> CREATIVE DESIGNER</h1>
     <p className='text-right text-[13px] lg:w-[453px] w-auto text-wh leading-[1.846] lg:absolute lg:left-[307px] xl:left-[567px] top-[100px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.    </p>
     



    </div>

    <div className="w-[25%] flex flex-wrap  items-center justify-evenly  absolute left-[90px]  sm:left-[350px] sm:top-[190px] lg:left-[580px]  xl:left-[830px] top-[210px] md:top-[160px] lg:top-[200px] ">
      <div className="w-full">
      <a className='border-2  border-[#000] bg-sk p-2  hover:bg-[#000] lg:text-[15px]  lg:leading-[1.2] text-white '>HIRE US</a>
      </div>
      <div className="w-full absolute left-[80px] top-[0px]">
      <a className='border-2 border-wh bg-transparent p-2 hover:bg-sk lg:text-[15px] text-white xxs:ms-2 xs:ms-2'>CONTACT</a>
 
 


      </div>

 

 

    </div>
    </div>
  
 


  



     
    
      



   </div>
 
 
 
 
  </section>
  )
}

export default Banner