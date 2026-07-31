// import React from 'react'

import About from "./About"
// import Card from "./Card"
import Client from "./Client"
import Core from "./Core"
import Executive from "./Executive"
import Hero from "./Hero"
import Programme from "./Programme"
import Training from "./Training"
import Vision from "./Vision"

const HomeComp = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Core/>
        <Vision/>
        
        <Training/>
        <Programme/>
        <Client/>
        {/* <Card/> */}
        <Executive/>
    </div>
  )
}

export default HomeComp