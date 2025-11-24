import React from 'react'
import arrowLeft from "../../assets/Icons/VectorLeft.svg";
import arrowRight from "../../assets/Icons/VectorRight.svg";

const SlidingArrow = () => {
  return (
    <div className="flex justify-between items-center gap-4.5">
      <span className="bg-gray-100 rounded-full p-4">
        <img src={arrowLeft} alt="" />
      </span>
      <span className="bg-[#0a4f48] rounded-full p-4">
        <img src={arrowRight} alt="" />
      </span>
    </div>
  );
}

export default SlidingArrow