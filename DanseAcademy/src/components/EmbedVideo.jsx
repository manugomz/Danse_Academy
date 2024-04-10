import React from 'react';
import ReactPlayer from 'react-player';

export const EmbedVideo = () => {

function handlePlay(){
  return true
} 

  return (
    <div className='flex justify-center mb-24 md:my-32 z-20'>
        <ReactPlayer url='../video/video.mp4' playing={handlePlay()} muted={true} loop={true} controls={true}/>
    </div>
  )
}


