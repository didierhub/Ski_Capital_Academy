import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

function Video({videoUrls,handleVideoClick}) {
  const getFileNameWithoutExtension = (fileName) => {
    // Split the file name by '.' and remove the last element (which is the extension)
    const fileNameParts = fileName.split('.');
    fileNameParts.pop(); // Remove the last element (extension)
    return fileNameParts.join('.'); // Join the remaining parts
  };

  
  return (
    <div className=' flex  flex-col items-center gap-2  h-full w-full absolute overflow-y-scroll '>
     {videoUrls.map((video,videoIndex)=>(
    <div key={videoIndex} className='w-full rounded-md grid grid-cols-5 border items-center  justify-center  py-1  hover:bg-purple-400 hover:text-white hover:scale-100' onClick={() => handleVideoClick(videoIndex)}>
    <div className='col-span-1 pl-1'>
    <FaPlayCircle  className=' text-[25px]'/>
    </div>
    
    <div className='col-span-4'>
    <h1 className='h-full text-sm'>{getFileNameWithoutExtension(video.fileName)}</h1>
    </div> 
  </div>
     ))}
  </div>
  )
}

export default Video