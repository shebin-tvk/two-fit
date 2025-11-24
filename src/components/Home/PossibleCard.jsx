import React from 'react'
import { motion as Motion } from "framer-motion";


const PossibleCard = ({cardData}) => {
  return (
    <div className="overflow-y-scroll scrollbar-hide pl-[150px]">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl flex items-center justify-between gap-5 "
      >
        {cardData.map((data) => (
          <div>
            <div className="w-[700px] h-87 bg-[#f1ece8] p-4 rounded-2xl relative">
              <div className="flex items-center justify-between gap-15 w-full">
                <div className="relative w-1/3">
                  <img
                    src={data.img}
                    alt="card img"
                    className="object-cover w-full h-79 rounded-lg"
                  />
                  <div className="absolute bg-white rounded-full py-1 px-5.5 bottom-4 left-4">
                    <p className="text-[16px] ">Before</p>
                  </div>
                </div>

                <div className="relative flex flex-col items-start justify-center h-full  w-2/3">
                  <div className="bg-[#e5d8d1] rounded-full py-1 px-5 absolute -top-5 -right-1">
                    <p className="text-[16px]">1 Month</p>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 ">
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-[#0a4f48] font-semibold text-[28px] tracking-[-4%]">
                        {data.name}
                      </h2>
                      <p className="text-[18px] tracking-[-4%]">
                        {data.program}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px]">{data.about}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Motion.div>
    </div>
  );
}

export default PossibleCard