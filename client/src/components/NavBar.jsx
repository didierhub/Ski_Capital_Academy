import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState,useEffect } from "react";
import Logo from "../assets/images/logo.png";
import { userAuthHook } from "../hook/UserHook";
import { GoSun } from "react-icons/go";
import WecomeBack from "./WecomeBack";
import CheckoutButton from "./CheckoutButton";
import { checkPaymentStatus } from "../payment/CheckPayementStatus";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };

  const { user, logoutUser } = userAuthHook();
  const [hasPaid, setHasPaid] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/");
      localStorage.removeItem('user');
      
    } catch (erro) {
      console.log(erro.message);
    }
  };

  useEffect(() => {
    const verifyPayment = async () => {
      if (user) {
        const paymentStatus = await checkPaymentStatus(user);
        setHasPaid(paymentStatus);
      }
    };

    verifyPayment();
  }, [user]);

  return (
    <div className="  bg-black/5 w-full flex justify-between   p-2 items-center  z-20  pr-8">
      {/* logo */}
      <div className="col-span-3 flex justify-center gap-4 items-center ">
       
       
        <NavLink  className="flex items-center gap-2" to="/">
          <img src={Logo} alt="" className="rounded-full h-[50px] w-[50px]  object-cover" />
        </NavLink>
        <WecomeBack />{" "}
      </div>

      {/* menu  laptop*/}
      <div className="   hidden  lg:flex  gap-8 col-span-5 text-sm  items-center ">
        <NavLink to="/">Home</NavLink>
       
        <div className=" col-span-1"> {user && <div className="text-purple-700">{user.displayName }</div>} </div>
        {!hasPaid?<CheckoutButton action='start now'/> :"" } 
        {user && hasPaid && <NavLink to="/Videos">Dashboard</NavLink>}
        {user ? (
          <>
            <button onClick={handleLogout}  className=" text-center text-white py-1 px-3 bg-purple-500 rounded">Log out</button>
          </>
        ) : (
          <>
            {" "}
            <NavLink
              to="Login"
              className=" text-center text-white py-1 px-3 bg-purple-500 rounded hover:scale-105"
            >
              Log in
            </NavLink>
            {/* <NavLink
              to="/Signup"
              className=" text-center text-white py-1 px-3 bg-purple-500 rounded"
            >
              Sign up
            </NavLink> */}
          </>
        )}

        <div>
          {" "}
          <span ><GoSun className="text-[30px]"/></span>
        </div>
      </div>

      {/* menu icon */}
      <div className="  absolute left-[20%]  h-10 w-9 flex justify-center lg:hidden text-black" onClick={handleClick}>
        {!menu ? <IoMdClose size={30} /> : <HiOutlineMenuAlt2 size={30} />}
      </div>
      {/* menu  mobile*/}
      <div
        className={
          !menu
            ? " pt-24 fixed left-0 top-0   w-[50%]  border-r-2 bg-black/90 border-gray-400 h-full  ease-in-out duration-500 lg:hidden"
            : " fixed left-[-100%]   lg:hidden"
        }
      >
        <div className=" pl-2  text-white grid grid-rows-1 gap-4">
          <NavLink to="/">Home</NavLink>
          <div className=" col-span-1"> {user && <div className="text-purple-700">{user.displayName }</div>} </div>
          {!hasPaid?<CheckoutButton action='start now'/> :"" } 
          {user ? (
          <>
            <button onClick={handleLogout}  className=" text-center text-white py-1 px-3 bg-purple-500 rounded hover:scale-105">Log out</button>
          </>
        ) : (
          <>
            {" "}
            <NavLink
              to="Login"
              className=" text-left text-white py-1 "
            >
            
            <button className="px-3 bg-purple-500 rounded">Log in</button>
            </NavLink>
            {/* <NavLink
              to="/Signup"
              className=" text-center text-white py-1 px-3 bg-purple-500 rounded"
            >
              Sign up
            </NavLink> */}
            <div>
            
            
            </div>
          </>
        )}
          <div>
            {" "}
            <span> <GoSun className="text-[30px]"/></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
