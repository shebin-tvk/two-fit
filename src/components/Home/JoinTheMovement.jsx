import React from 'react'
import Heading from '../shared/Heading'
import MemberCard from './MemberCard';
import { users } from '../../utils/constants';
// import { cardData } from '../../utils/constants';

import ProgramCard from './ProgramCard';

const JoinTheMovement = () => {
  return (
    <div className="py-15 w-full">
      <Heading
        heading={"Join the Movement"}
        description={"Stronger, healthier lives together."}
      />
      <div className="w-full">
          <MemberCard cardData={users} />
          {/* <ProgramCard cardData={cardData}/> */}

      </div>
    </div>
  );
}

export default JoinTheMovement