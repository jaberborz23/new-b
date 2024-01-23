import React from 'react'
import ink from "../Assets/ink.png"
import pc from "../Assets/pc.png"
import gl from "../Assets/gl.png"

const Service = () => {
  return (
    <div className='py-[60px]'>
        <div className="max-w-container mx-auto">

        <div className="w-full text-center relative after:absolute after:content-[''] after:w-[0px] after:h-[3px] after:bottom-[-10px] xxs:after:left-[140px] xs:after:left-[260px] sm:after:left-[290px] md:after:left-[320px] lg:after:left-[450px] xl:after:left-[620px]  hover:after:bg-sk hover:after:transition ease-in-out delay-[0.5s] hover:after:w-[130px]   " >
            <h2 className=' font-pt leading-[1px] font-[700] text-sc  '> OUR SERVICE</h2>
         </div>

        

         <div className=" flex flex-wrap w-full items-center justify-evenly mt-[80px]">


        <div className=" lg:w-[30%] w-full relative bg-wh py-[60px]">
            <div className=" absolute top-[-10px] xl:left-[190px] lg:left-[140px] sm:left-[330px] md:left-[370px] xxs:left-[170px] ">
            <img src={ink} alt="ink"  />
            </div>
         
          <h2 className='font-pt font-[600] text-[16px] text-sc leading-[1.5] text-center '>Graphic Design</h2>
          <p className=' font-op font-[500] text-[13px] text-center lg:w-[px] w-auto text-lb leading-[1.846]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
          </p>
    




        </div>
        <div className=" lg:w-[30%] w-full relative bg-wh py-[60px]">
            <div className=" absolute top-[-10px] xl:left-[190px] lg:left-[140px] sm:left-[330px] md:left-[370px] xxs:left-[170px] ">
            <img src={pc} alt="pc"  />
            </div>
         
          <h2 className='font-pt font-[600] text-[16px] text-sc leading-[1.5] text-center '>Graphic Design</h2>
          <p className=' font-op font-[500] text-[13px] text-center lg:w-[px] w-auto text-lb leading-[1.846]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
          </p>
    




        </div>
        <div className=" lg:w-[30%] w-full relative bg-wh py-[60px]">
            <div className=" absolute top-[-10px] xl:left-[190px] lg:left-[140px] sm:left-[330px] md:left-[370px] xxs:left-[170px] ">
            <img src={gl} alt="gl"  />
            </div>
         
          <h2 className='font-pt font-[600] text-[16px] text-sc leading-[1.5] text-center '>Graphic Design</h2>
          <p className=' font-op font-[500] text-[13px] text-center  w-auto text-lb leading-[1.846]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
          </p>
    




        </div>
      










         </div>







        </div>
    
    
    
    
    
    
    </div>
  )
}

export default Service