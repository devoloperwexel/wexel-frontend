import React from 'react'
//
import Hero from './partials/hero'
import Management from './partials/management'
import Features from './partials/features'
import AppReview from './partials/app-review'
import Pricing from './partials/pricing' 
import Testmonial from './partials/testmonial'
import Faq from './partials/faq'

const Home = () => {
  return (
    <div id='__home' >
      <Hero />
      <Management />
      <Features />
      <AppReview />
      <Pricing />
      <Testmonial />
      <Faq />
    </div>
  )
}

export default Home