import React from 'react'
import { motion } from "framer-motion";


const ProgramCard = ({img}) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" bg-white shadow-lg  rounded-4xl"
      >
        <div className="flex items-center">
          <div className="relative h-[585px] w-[585px] rounded-2xl">
            <img
              src={img}
              alt="card img"
              className="w-full h-full rounded-4xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProgramCard