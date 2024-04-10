import React from 'react';
import ReactPlayer from 'react-player';

export const EmbedVideo = () => {

function handlePlay(){
  return true
} 

  return (
    <div className='flex self-center justify-center w-[90%] rounded-lg py-5 bg-gray-dark mb-24 md:my-32 z-20'>
        <ReactPlayer url='../video/video.mp4' 
          width='98%' height='100%' playing={handlePlay()} 
          muted={true} loop={true} controls={true}/>
    </div>
  )
}


