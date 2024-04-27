import {useState}from 'react'

function Signup() {

  // const { signup, isLoading, error } = useSignup();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // await signup(firstName, lastName, email, userId, password);
  };
  
  return (
    <form
    action=""
    onSubmit={handleSubmit}
    className="   grid grid-cols-1  gap-x-2   w-[300px] border shadow-md h-[400px] absolute left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%]  "
  >
    <h3 className=" text-center text-2xl pt-3 text-purple-900">sing up</h3>
    <div className=" grid grid-cols-1  w-full ">
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className=" text-gray-400">FirstName</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
          className=" border border-gray-400"
        />
      </div>
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className=" text-gray-400">LastName</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
          className=" border border-gray-400"
        />
      </div>
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className=" text-gray-400">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className=" border border-gray-400"
        />
      </div>
      <div className=" grid grid-cols-1 gap-1 px-4 ">
        <label className=" text-gray-400">Password</label>
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
        sing up
      </button>
    </div>
    {/* {error && <div className=" text-center">{error}</div>} */}
  </form>

  )
}

export default Signup