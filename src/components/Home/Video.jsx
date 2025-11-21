import React from 'react'
import VideoBg from "../../assets/videos/homeVideo.mp4";


const Video = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsinline
        className="absolute top-0 left-0 w-full h-244 object-cover"
      >
        <source src={VideoBg} type="video/mp4" />
      </video>

      <div className="absolute bottom-25 z-1 flex flex-col items-center md:items-start justify-center mx-[250px] gap-[50px]">
        <div className="flex flex-col items-center md:items-start justify-center gap-5">
          <h1 className="text-white text-[100px] font-bold tracking-[-4%] leading-none">
            Your Journey <br /> to a Healthier You
          </h1>
          <p className="text-white text-[20px] leading-[26px] tracking-normal">
            Customized plans that help you heal, transform, and thrive anytime,
            anywhere.
          </p>
        </div>
        <button className="font-semibold text-4 text-[#0a4f48] bg-white px-16 py-4 rounded-full">
          Join Now
        </button>
      </div>

    </div>
  );
}

export default Video