import React from 'react'
import { curiculum } from '../data/chapterInfos'
import Chapter from './Chapter'

function Curriculum() {
  return (
    <div className='  mx-auto  grid grid-cols-1  gap-4 w-[80%] bg-purple-500 shadow-ml pt-4 pb-10'>
      <h1 className='text-white text-xl lg:text-2xl text-center font-semibold col-span-1'>cours Curriculum</h1>
        {
          curiculum.map((chapter,index)=>(
            <>
             <Chapter key={index.id} chapter={chapter} />
           </>
           
          ))
        }

       </div>
  )
}

export default Curriculum