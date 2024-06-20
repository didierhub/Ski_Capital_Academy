import React from "react";
import Button from "./Button";
import Phone from "../assets/images/tradingPhone.png"
import chart from "../assets/images/chart.jpeg"
import { NavLink } from "react-router-dom";
// import {final} from "../assets/images/final.mp4"
import CheckoutButton from "./CheckoutButton";
import ReactPlayer from "react-player";


function Hero() {
  return (
    <div className=" w-full  ">
     
      <div className="max-h-[100vh]  rounded-md relative">
        {/* overlay div */}
        <div className="grid grid-cols-10 absolute w-full h-full text-gray-200 max-h[500px] bg-black/40  items-center z-0  ">
          <div className=" col-span-10  grid grid-cols-1 gap-2 lg:gap-6 lg:col-span-6 pl-4">
            <h1 className=" text-4 text-2xl md:text-5xl lg:text-7xl font-bold">
             
              <span className="text-purple-500">Ski</span>
              Capital
              <span className="text-purple-500">Academy</span>
            </h1>
            <h1 className=" text-4 text-2xl md:text-5xl lg:text-7xl font-bold ">
              smc
              <span className="text-purple-500"> simplified </span>
             
            </h1>
            {/* descrption */}
            <p className="  text-sm lg:text-xl">
               by joining us you will have the access to the precorded videos teaching a simplify <br/>
               version of smc ,E-book ,live session during the week , weekly market break down,<br/> 
               access to the discord community with great support 
              
            </p>
            {/* buttom */}
            <NavLink to=""> <CheckoutButton action='join us now' /></NavLink>
         
           
          </div>
          {/*phone image  */}
          <div className="  relative hidden    md:grid md:col-span-4  lg:col-span-4   ">
            
            {/* image contenair */}
            <div className="  h-max-[700px]flex items-center   translate-x-[-20%]  translate-y-[-50%] top-[50%]  lg:absolute  " >
             
              <img className=" relative  h-[80%] " src={Phone} alt=""  />
            
          </div>
            </div>
        </div>
        {/* background image */}
        {/* <ReactPlayer
     
     height='100%'
     width='100%'
    url={final}
    controls={true} // Show playback controls
    config={{
      file: {
        attributes: {
          controlsList: 'nodownload', // Hide download button
        },
      },
    }}
   // Update played percentage
  /> */}

        <img
          className="  w-full max-h-[700px] object-cover rounded-md  "
          src={chart }
          alt=""
        />
        
      </div>
    </div>
  );
}

export default Hero;
