import React from 'react'
import Video from '../components/Home/Video'
import Programs from '../components/Home/programs'
import DesignedForYou from '../components/Home/DesignedForYou'
import SeeWhatPossible from '../components/Home/SeeWhatPossible'
import Faq from '../components/shared/Faq'
import JoinTheMovement from '../components/Home/JoinTheMovement'

const Home = () => {
  return (
   <div>
    <Video/>
    <Programs/>
{/* <<<<<<< HEAD
    <DesignedForYou/>
    <SeeWhatPossible/>
    <Faq/>
    <JoinTheMovement/>
=======
    {/* <DesignedForYou/> */}
    {/* <SeeWhatPossible/> */}
    {/* <Faq/> */}
    {/* <JoinTheMovement/> */}
>>>>>>> 29d419e3e19b64ea173b064cb45350d6f5128acf */}
   </div>

  )
}

export default Home