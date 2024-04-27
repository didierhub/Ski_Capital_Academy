import { NavLink } from "react-router-dom"
import { HiOutlineMenuAlt2} from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";



function NavBar() {
  const [menu,setMenu]=useState(false)
  const handleClick=()=>{
    setMenu(!menu)
    }

  return (
    <div className='  bg-white w-[1640px] flex justify-between   py-4 items-center   fixed top-0 z-10  pr-8'>

        {/* logo */}
        <div className="col-span-3 "><div className="h-10 w-10 border  rounded-full "> <img src="" alt="" /></div> </div>

        {/* menu  laptop*/}
        <div className="  hidden col-span-5 text-sm   lg:grid lg:grid-cols-6  gap-8">
          <NavLink to="/">Home</NavLink>
           <div> <span>UserName</span></div>
           <NavLink to="Payment">Start Now</NavLink>
           <NavLink  to="Login"className=" text-center text-white py-1 px-3 bg-purple-500 rounded">Log in</NavLink>
            <NavLink  to="Signup" className=" text-center text-white py-1 px-3 bg-purple-500 rounded">Sign up</NavLink>
            <div> <span>Mood</span></div>

        </div>

        {/* menu icon */}
        <div className=" flex justify-center lg:hidden" onClick={handleClick}>
         {

           (!menu?<IoMdClose size={20}/>: <HiOutlineMenuAlt2 size={20}/> )
                 
         }
         

        </div>
  {/* menu  mobile*/}
        <div className={!menu?" pt-24 fixed left-0 top-0   w-[60%]  border-r-2 bg-black/90 border-gray-400 h-full  ease-in-out duration-500 lg:hidden":" fixed left-[-100%]   lg:hidden"}>
          <div className=" pl-2  text-white grid grid-rows-1 gap-4">
           <NavLink to="/">Home</NavLink>
           <div> <span>UserName</span></div>
           <NavLink to="Payment">Start Now</NavLink>
           <NavLink  to="Login"className=" text-center text-white py-1 px-3 bg-purple-500 rounded">Log in</NavLink>
            <NavLink  to="Signup" className=" text-center text-white py-1 px-3 bg-purple-500 rounded">Sign up</NavLink>
            <div> <span>Mood</span></div>
            </div>
        </div>
    </div>
  )
}

export default NavBar