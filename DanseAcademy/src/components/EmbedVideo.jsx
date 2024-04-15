import React from "react";
import ReactPlayer from "react-player";

export const EmbedVideo = () => {
  
  const styles = {
    videoContainer:`flex justify-center self-center 
                z-20 mb-24
                rounded-lg bg-gray-dark py-3 
                md:w-[85%] md:my-12 md:py-5`
  };

  function handlePlay() {
    //TODO v2: when scroll
    return true;
  }

  return (
    <div className={styles.videoContainer}>
      <ReactPlayer
        url="../video/video.mp4"
        width="95%"
        height="90%"
        playing={handlePlay()}
        muted={true}
        loop={true}
        controls={true}
      />
    </div>
  );
};
