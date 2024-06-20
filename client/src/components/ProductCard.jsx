import React from "react";
import Button from "./Button";
import image from "../assets/images/card.svg"
import CheckoutButton from "./CheckoutButton";

function ProductCard() {
  return (
    <div className="  mx-auto  grid grid-cols-1  gap-4 w-[80%]  shadow-ml mb-4 ">
      <h1 className="text-white text-xl lg:text-2xl text-center font-semibold col-span-1">
        Product
      </h1>

      {/* contenair */}
      <div className=" grid grid-cols-2 gap-2 ">
        {/* card left */}
        <div className="grid grid-cols-1 bg-white p-4 gap-8  col-span-2 lg:col-span-1 rounded-xl shadow-md  hover:scale-[1.01]">
          <h1 className="text-center  lg:text-2xl text-purple-700 ">Full stack</h1>
          <p className=" flex items-center text-center text-sm  lg:text-3xl lg:text-left ">
            This one time payment offers lifetime access to :<br/> video Course , Discord
            Community , live stream and  Support to help and answer any
            questions you may have
          </p>
          <div className=" grid grid-cols-2 rounded-md   items-center px-2 w-[80%] mx-auto lg:w-[50%]">
            {" "}
            <span className=" text-purple-700 text-xl"> $250</span> <CheckoutButton action="join now" className="" />{" "}
          </div>
        </div>
    {/* card right */}
        <div className="hidden  md:col-span-1 lg:col-span-1 lg:grid rounded-xl  drop-shadow items-center hover:scale-[1.01] ">
          <img  className=" w-full  rounded-xl shadow object-cover   " src={image } alt=""  />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
