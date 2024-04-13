import React from 'react';
import ReactPlayer from 'react-player';

export const EmbedVideo = () => {

function handlePlay(){
  return true
} 

  return (
    <div className='flex self-center justify-center md:w-[85%] rounded-lg py-3 md:py-5 bg-gray-dark mb-24 md:my-12 z-20'>
        <ReactPlayer url='../video/video.mp4' 
          width='95%' height='90%' playing={handlePlay()} 
          muted={true} loop={true} controls={true}/>
    </div>
  )
}


