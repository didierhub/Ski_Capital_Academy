import React from 'react'
import { IoIosArrowUp } from "react-icons/io";


function Chapter({chapter}) {
  return (
   
  
    <div className='grid grid-cols-5 mx-auto bg-white shadow-md w-[90%] p-2 items-center relative z-0' >
    <div className=' relative grid grid-cols-2 col-span-4 itmes-center '> <h1 className='  w-8 h-8 bg-purple-500 rounded-full '></h1><span className=' absolute left-20  text-gray-800 text-sm lg:text-2xl'>{chapter.chapt}</span> </div>
    <div className=' absolute right-4  '><IoIosArrowUp className=' size-7 lg:size-10' /></div>
    </div>

  )
}

export default Chapter