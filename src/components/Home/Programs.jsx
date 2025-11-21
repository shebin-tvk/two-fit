import React from 'react'
import ProgramCard from './ProgramCard';
import CardImg1 from "../../assets/images/progarmCardImg1.jpg"

const Programs = () => {
  return (
    <div className="py-30">
      <div className="flex flex-col items-center justify-center w-full gap-25">
        <div className="flex flex-col items-center justify-center w-full gap-[26px]">
          <h1 className="text-[75px] tracking-[-4%] leading-none font-bold text-center">
            Everything You <br /> Need for Better Health
          </h1>
          <p className="text-[22px] text-center leading-[150%]">
            Access dietitians, trainers, doctors, and therapists with
            personalized plans <br /> for weight loss, diabetes, PCOD, and
            postpartum recovery.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 w-full">
          <ProgramCard img={CardImg1}/>
        </div>
      </div>
    </div>
  );
}

export default Programs