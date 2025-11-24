import React from "react";
import { motion as Motion } from "framer-motion";


const MemberCard = ({ cardData }) => {
  return (
    <div className="overflow-y-scroll scrollbar-hide pl-[250px] pr-5">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="  flex items-center justify-between gap-5"
      >
        {cardData.map((data) => (
          <div className="flex items-center justify-between gap-2 p-1 pr-8 bg-[#F1F1F1] rounded-full">
            <img src={data.img} alt="" className="w-8 rounded-full"/>
            <p>{data.name}</p>
          </div>
        ))}
      </Motion.div>
    </div>
  );
};

export default MemberCard;
