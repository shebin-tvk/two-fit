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
    <DesignedForYou/>
    <SeeWhatPossible/>
    <Faq/>
    <JoinTheMovement/>
   </div>

  )
}

export default Home