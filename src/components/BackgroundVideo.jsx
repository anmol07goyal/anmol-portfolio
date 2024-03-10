import React from "react";

const BackgroundVideo = () => {
  return (
    <video
      className="top-0 left-0 w-full h-screen object-cover"
      width="400"
      autoPlay
      muted
      loop
      controls
    >
      <source src="/sizelreelBg.mp4" type="video/mp4" />
      background video
    </video>
  );
};

export default BackgroundVideo;
