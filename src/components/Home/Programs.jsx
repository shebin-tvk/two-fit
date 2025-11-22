import React from 'react'
import ProgramCard from './ProgramCard';
import { cardData } from '../../utils/constants';
import Heading from './Heading';



const Programs = () => {
  return (
    <div className="py-30 ">
      <div className="flex flex-col items-center justify-center w-full gap-25 ">
        <Heading
          heading={
            <>
              Everything You <br /> Need for Better Health
            </>
          }
          description={
            <>
              Access dietitians, trainers, doctors, and therapists with
              personalized plans <br/> for weight loss, diabetes, PCOD, and postpartum
              recovery.
            </>
          }
        />
        <div className="flex items-center justify-center gap-2 w-full ">
          <ProgramCard cardData={cardData} />
        </div>
        {/* <div className="mx-[250px] text-black">
          <hr className="w-full" />
        </div> */}
      </div>
    </div>
  );
}

export default Programs