import React from 'react'
import { motion as Motion } from "framer-motion";


const PossibleCard = ({cardData}) => {
  return (
    <div className="overflow-y-scroll scrollbar-hide pl-[250px] pr-5">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl flex items-center justify-between gap-5"
      >
        {cardData.map((data) => (
          <div>
            <div className="relative w-70 h-100">
              <img
                src={data.img}
                alt="card img"
                className="h-full rounded-xl object-cover"
              />
              <h2 className="absolute top-[310px] left-8 text-white font-bold text-[35px] leading-[100%] tracking-[-0.04em]">
                {data.heading}
              </h2>
            </div>
          </div>
        ))}
      </Motion.div>
    </div>
  );
}

export default PossibleCard