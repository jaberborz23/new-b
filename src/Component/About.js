import React from 'react'
import abt from "../Assets/about.png"
import shp from "../Assets/shp.png"

const About = () => {
  return (
    <div className='py-[56px]'>
        <div className="max-w-container mx-auto">

        <div className="w-full text-center relative after:absolute after:content-[''] after:w-[0px] after:h-[3px] after:bottom-[-10px] xxs:after:left-[140px] xs:after:left-[260px] sm:after:left-[290px] md:after:left-[320px] lg:after:left-[450px] xl:after:left-[620px]  hover:after:bg-sk hover:after:transition ease-in-out delay-[0.5s] hover:after:w-[130px]   " >
            <h2 className=' font-pt leading-[1px] font-[700] text-sc  '> ABOUT US</h2>
         </div>



            <div className="flex flex-wrap mt-[60px]">

                <div className="lg:w-[40%] w-full relative">

                <img src={shp} alt="abt" className='w-full' />

                <img src={abt} alt="abt" className='w-full absolute top-[0px] xxs:left-[-18px] xs:left-[-31px] lg:left-[-32px]'  />
               



                </div>
                <div className=" lg:w-[60%] w-full">


                    <p className=' xl:w-[558px] w-auto text-left font-op text-[13px] pt-[53px] text-lb leading-[1.846]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiaeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                


                    
                

                </div>








            </div>



        </div>
    
    
    
    
    
    </div>
  )
}

export default About