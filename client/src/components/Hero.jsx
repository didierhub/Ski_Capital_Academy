import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className=" w-full  ">
      <div className="max-h-[700px] relative rounded-md">
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
            <div> <Button name='join us now' /></div>
         
           
          </div>
          {/*phone image  */}
          <div className=" hidden md:col-span-4  md:block lg:col-span-4  ">
            {/* image contenair */}
            <div className=" max-h-[700px]   translate-x-[-20%]  translate-y-[-50%] top-[50%]  lg:absolute  " >
              <img className=" w-full " src="https://www.interactivebrokers.com/images/web/ibkr-mobile-hero.png" alt="" /> </div>
            </div>
        </div>
        {/* background image */}
        <img
          className="  w-full max-h-[700px] object-cover rounded-md  "
          src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
