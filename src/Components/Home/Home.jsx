import React from 'react'
import Heroslide from './Heroslide'
import Bestsell from './Bestsell'
import TimelessLook from './TimelessLook'
import Discover from './Discover'
import Offersection from './Offersection'
import CharmingKids from './CharmingKids'
import ExclusiveSection from './ExclusiveSection'
import FrenshStyle from './FrenshStyle'
import TailoringAari from './TailoringAari'

const Home = () => {
  return (
    <div>
      <Heroslide/>
      <Bestsell />
      <Discover />
      <Offersection />
      <CharmingKids />
      <ExclusiveSection />
      <FrenshStyle />
      <TailoringAari />
    </div>
  )
}

export default Home