import {useState}from 'react'
import { userAuthHook } from '../hook/UserHook';
import { useNavigate,NavLink } from 'react-router-dom';


function Login() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error,setError]=useState()
  const {loginUser}=userAuthHook()
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
   setError("")
   try{
     await loginUser(email,password)
     navigate ("/")
      
   }
   catch(error){
     setError(error.message)
     console.log(error.message)
   }
 };
  return (
   
     <form
    action=""
    onSubmit={handleSubmit}
    className=" grid grid-cols-1  gap-x-2   w-[300px] border shadow-md h-[300px] absolute left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%] "
  >
  
    <h3 className=" text-center text-2xl pt-3 text-purple-900">Log in</h3>
    <div className=" grid grid-cols-1  w-full ">
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className='text-gray-400'>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className=" border border-gray-400"
        />
      </div>
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className='text-gray-400'>Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className=" border border-gray-400"
         
        />
      </div>
     
     
    </div>
    <div className=" flex justify-center items-center ">
      <button
        // disabled={isLoading}
        type="submit"
        className=" bg-purple-500 py-1 px-4 rounded-md text-white "
      >
        Log in
      </button>
    </div>
    {error && <div className="  text-sm text-center text-red-500 grid grid-cols-1 gap-1 px-4 ">{error}</div>} 
    <div className=' text-center'><h1>don't have account?  
        <NavLink
             to="/Signup"
              className=" text-center text-purple-600 underline"
            >
              Sign up
            </NavLink></h1>
            </div>
  </form>
   
  )
}

export default Login