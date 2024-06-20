import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import firebaseApp from '../firebase/FirebaseConfig';
import ReactPlayer from 'react-player';
import Video from '../components/Video';
import { FaPlayCircle } from "react-icons/fa";
import VideoPlayer from '../components/VideoPlayer';
import Logo from "../assets/images/logo.png"
import { userAuthHook } from '../hook/UserHook';
 import { useNavigate } from 'react-router-dom';


function Videos() {
  const [videoUrls, setVideoUrls] = useState([]);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user}=userAuthHook()
  const navigate=useNavigate()

  useEffect(() => {
    const fetchVideoUrls = async () => {
      try {
        const storage = getStorage(firebaseApp);
        const videoFileNames = [
          "intro.mp4",
          "INTRO TRADING.mp4",
          "BULLS AND BEARS.mp4",
          "INSTRUMENT DU TRADING.mp4",
          "COURTIER.mp4",
          "EFFET DE LEVIER.mp4",
          "Market Structure.mp4",
          "Liquidite.mp4",
          "Imbalance.MP4",
          "Bloc d'ordre.mp4",
          "LOCALISER CORRECTEMENT SES ZONES.mp4",
          "OFFRE ET DEMANDE.MP4",
          "CYCLE DU PRIX.mp4",
          "PSYCHOLOGY.mp4",
        ];

        const urls = await Promise.all(videoFileNames.map(async (fileName) => {
          const videoRef = ref(storage, 'SkiCapitalAcademy/' + fileName);
          const url = await getDownloadURL(videoRef);
          return { fileName, url };
        }));

        setVideoUrls(urls);
      } catch (error) {
        console.error('Error fetching video URLs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoUrls();
  }, []);

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
  };

  return (

      <main className='h-[80vh] w-[80vw]  absolute top-[50%] translate-y-[-50%] left-[50%]  translate-x-[-50%]    overflow-hidden'>
      {user?  <div className='  h-full w-full flex flex-col justify-between  items-center  relative lg:flex-row '>
      {/* Video viewer */}
      <div className='  w-[100%] h-[49%]  lg:w-[70%] lg:h-full    relative'>
        {/* React Player */}
      <VideoPlayer videoUrls={videoUrls} selectedVideoIndex={selectedVideoIndex} />
      </div>
      {/* Video list */}
      <div className='  w-[100%]  h-[49%] lg:w-[28%]  lg:h-full  relative flex items-center '>
        {loading ? (
          <div>Loading...</div>
        ) : (
           <Video  videoUrls={videoUrls} handleVideoClick={handleVideoClick}/>
        )}
      </div>
    
    </div>: navigate("Login") 
         

      }
      
      </main>
  );
}

export default Videos;
