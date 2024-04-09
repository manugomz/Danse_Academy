import React from 'react';
import ReactPlayer from 'react-player';

export const EmbedVideo = () => {

function handlePlay(){
  return false
} 

  return (
    <div className='flex justify-center py-32 shadow-md z-50'>
        <ReactPlayer url='../video/video.mp4' playing={handlePlay()} muted={true} loop={true} controls={true}/>
    </div>
  )
}


