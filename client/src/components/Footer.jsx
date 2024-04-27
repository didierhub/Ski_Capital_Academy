import React from "react";
import { NavLink } from "react-router-dom";
import { SiInstagram, SiYoutube } from "react-icons/si";
function Footer() {
  return (
    <div className="grid grid-cols-1 gap-2   lg:flex  justify-around  bg-purple-500  py-4 text-white">
      <div className="  grid grid-rows-1  gap-2 justify-center text-center">
        {/* Menu */}
        <h1 className="text-xl text-purple-900 font-semibold">Menu</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Payment">Start NOw</NavLink>
      </div>
      {/* Quick Link */}
      <div className="grid grid-rows-1 gap-2 justify-center text-center">
        <h1 className="text-xl text-purple-800 font-semibold">QUick links</h1>
        <NavLink to="Login">Log in</NavLink>
        <NavLink to="Signup">Sign up</NavLink>
      </div>
      {/* Social media */}
      <div className=" grid grid-rows-1 gap-2 justify-center text-center">
        <h1 className="text-xl text-purple-900 font-semibold">Social media</h1>
        <NavLink className="flex justify-center">
          <SiInstagram  className=" size-6"/>
        </NavLink>
        <NavLink className="flex justify-center">
          <SiYoutube  className=" size-6"/>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
