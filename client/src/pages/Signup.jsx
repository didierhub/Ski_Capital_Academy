import {useState}from 'react'
import { userAuthHook } from '../hook/UserHook';
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleSignUp from '../components/GoogleSignUp';
 

function Signup() {

  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState('login');

  // const { signup, isLoading, error } = useSignup();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error,setError]=useState()
  const {createUser,GoogleSignIn}=userAuthHook()
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      // Assuming you have firstName and lastName variables defined in your component
      await createUser(email, password, firstName, lastName);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  
  
  const handlegoogleSignUp =async()=>{
    try{
       await GoogleSignIn()
      navigate("/")
    }
    catch(error){
      console.log(error.message)
      setError(error.message)
    }
  }
  
  
  return (
    <form
    action=""
    onSubmit={handleSubmit}
    className="   grid grid-cols-1  gap-x-2   w-[300px] border shadow-md min-h-[450px] absolute left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%]  "
  >
    <h3 className=" text-center text-2xl pt-3 text-purple-900">sing up</h3>
    <div className=" grid grid-cols-1  w-full ">
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className=" text-gray-400">FirstName</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          name='firstName'
          required
          className=" border border-gray-400"
        />
      </div>
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className=" text-gray-400">LastName</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
         name='lastname'
          required
          className=" border border-gray-400"
        />
      </div>
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className=" text-gray-400">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
         name='email'
          required
          className=" border border-gray-400 pl-1"
        />
      </div>
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className=" text-gray-400">Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        name='password'
          required
          className=" border border-gray-400 pl-1"
        />
      </div>
     
     
    </div>
    
    <div className=' text-center flex items-center justify-center text-gray-500'><h1>already have account?  
        <NavLink
              to="/Login"
              className=" text-center text-purple-600 underline"
            >
              Log in
            </NavLink></h1>
            </div>
    <div className=" flex justify-center items-center ">
      <button
        // disabled={isLoading}
        type="submit"
        className=" bg-purple-500 py-1 px-4 rounded-md text-white "
      >
        sing up
      </button>
    </div>
  
    {error && <div className="  text-sm text-center text-red-500 grid grid-cols-1 gap-1 px-4 ">{error}</div>} 
      <h1 className=' text-center'>sign in with:</h1>
       <GoogleSignUp handlegoogleSignUp={handlegoogleSignUp} />
      
  </form>

  )
}

export default Signup