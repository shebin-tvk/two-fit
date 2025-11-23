import React from 'react'
import Heading from './Heading'
import MemberCard from './MemberCard';
import { users } from '../../utils/constants';

const JoinTheMovement = () => {
  return (
    <div className="py-15 w-full">
      <Heading
        heading={"Join the Movement"}
        description={"Stronger, healthier lives together."}
      />
      <div className="w-full">
        <div className="flex items-center gap-4 overflow-y-scroll scrollbar-hide w-full">
            <MemberCard cardData={users}/>
        </div>
      </div>
    </div>
  );
}

export default JoinTheMovement