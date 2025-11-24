import React from 'react'
import Heading from '../shared/Heading';
import PossibleCard from './PossibleCard';
import { possible } from "../../utils/constants"
import SlidingArrow from './SlidingArrow';

const SeeWhatPossible = () => {
  return (
    <div className="w-full py-15">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <Heading
          heading={"See What’s Possible"}
          description={"Transformations made possible with TwoFit"}
        />

        <div className="flex items-center justify-center gap-2 w-full">
          <PossibleCard cardData={possible} />
        </div>

        <SlidingArrow />
      </div>
    </div>
  );
}

export default SeeWhatPossible