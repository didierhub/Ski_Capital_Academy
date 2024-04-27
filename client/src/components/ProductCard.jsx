import React from "react";
import Button from "./Button";

function ProductCard() {
  return (
    <div className="  mx-auto  grid grid-cols-1  gap-4 w-[80%]  shadow-ml mb-4 ">
      <h1 className="text-white text-xl lg:text-2xl text-center font-semibold col-span-1">
        Product
      </h1>

      {/* contenair */}
      <div className=" grid grid-cols-2">
        {/* card left */}
        <div className="grid grid-cols-1 bg-white p-4 gap-8  col-span-2 lg:col-span-1">
          <h1 className="text-center ">Full stack</h1>
          <p className="text-center text-sm lg:text-md">
            This one time payment offers lifetime access to : Course , Discord
            Community , Trade Setups and my Support to help and answer any
            questions you may have
          </p>
          <div className=" grid grid-cols-2 rounded-md  shadow-md items-center px-2 w-[80%] mx-auto lg:w-[50%]">
            {" "}
            <span className=" text-purple-700"> 250$</span> <Button name="join now" />{" "}
          </div>
        </div>
    {/* card right */}
        <div className="hidden  md:col-span-1 lg:col-span-1 lg:grid">
          <img  className=" w-full" src="https://images.unsplash.com/photo-1707087140532-aaa20f87911e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lJTIwdHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
