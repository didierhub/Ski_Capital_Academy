import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Logo from "../assets/images/logo.png"
import chart from "../assets/images/chart.jpeg"

function VideoPlayer({ videoUrls, selectedVideoIndex }) {
  const [playedPercentage, setPlayedPercentage] = useState(0);

  const handleProgress = (progress) => {
    // Update the state with the played percentage
    setPlayedPercentage(progress.played * 100);
  };

  const getFileNameWithoutExtension = (fileName) => {
    // Split the file name by '.' and remove the last element (which is the extension)
    const fileNameParts = fileName.split('.');
    fileNameParts.pop(); // Remove the last element (extension)
    return fileNameParts.join('.'); // Join the remaining parts
  };

  if (!videoUrls || videoUrls.length === 0 || selectedVideoIndex === null) {
    return  <div className='row-span-9 bg-black/10 shadow-md rounded-2xl   h-full relative  ' style={{backgroundImage: `url(${chart})`, backgroundSize: 'cover'}}>
     
      <div className='absolute bg-black/40 w-full h-full flex justify-center items-center rounded-2xl'>
      <  img src={Logo} alt=""  className='rounded-full hover:scale-110'/>
      </div>
        </div>;
  }

  const selectedVideo = videoUrls[selectedVideoIndex];
  const fileNameWithoutExtension = getFileNameWithoutExtension(selectedVideo.fileName);

  return (
    <div className=' h-full w-full grid grid-rows-10 gap-2'>
      <div className='w-full   row-span-9 bg-black shadow-md rounded-2xl overflow-hidden flex '>

        
        <ReactPlayer
     
           height='100%'
           width='100%'
          url={selectedVideo.url}
          controls={true} // Show playback controls
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload', // Hide download button
              },
            },
          }}
          onProgress={handleProgress} // Update played percentage
        />
      </div>

      <div className=' border row-span-1 rounded-2xl flex justify-between items-center px-2 bg-purple-400 text-white '>
        <h2 className='text-sm lg:text-xl'>{fileNameWithoutExtension}</h2>
        <p className='flex items-center text-white'> {playedPercentage.toFixed(2)}%  <progress value={playedPercentage} max={100} className=' flex items-center mx-1 rounded-sm'  />

</p> {/* Display played percentage */}
       
      </div>
    </div>
  );
}

export default VideoPlayer;
