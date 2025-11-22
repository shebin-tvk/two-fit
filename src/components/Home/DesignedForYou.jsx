import React from 'react'
import Heading from './Heading';
import DesignCard from './DesignCard';
import { designData } from '../../utils/constants';
import SlidingArrow from './SlidingArrow';


const DesignedForYou = () => {
  return (
    <div className="w-full py-15  bg-[#f1ece8]">
      <div className="flex flex-col items-center justify-center w-full gap-10">

        <Heading
          heading={"Designed for You"}
          description={"Personalized Program for Optimal Results."}
        />

        <div className="flex items-center justify-center gap-2 w-full ">
          <DesignCard cardData={designData} />
        </div>

        <SlidingArrow/>
        
      </div>
    </div>
  );
}

export default DesignedForYou