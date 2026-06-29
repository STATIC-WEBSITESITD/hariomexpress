import React from 'react'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import { PAGE_SEO } from '../data/seo'
import HomeBanner from '../components/HomeBanner'
import MarqueeBar from '../components/MarqueeBar'
// import Clients from '../components/Clients'
import AboutUs from '../components/AboutUs'
// import HowItWorks from '../components/HowItWorks'
import WhatSetsUsApart from '../components/WhatSetsUsApart'
import IndustryExpertise from '../components/IndustryExpertise'
// import WhoWeServe from '../components/WhoWeServe'
import Solutions from '../components/Solutions'
import Faq from '../components/Faq'
// import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner'

function Home() {
    return (
      <>
        <PageMeta {...PAGE_SEO.home} />
        <Header />
        <HomeBanner />
        <MarqueeBar />
        {/* <Clients /> */}
        <AboutUs />
        {/* <HowItWorks /> */}
        <WhatSetsUsApart />
        <IndustryExpertise />
        {/* <WhoWeServe /> */}
        <Solutions />
        <Faq />
        {/* <Testimonials /> */}
        <Blogs />
        <CtaBanner />
        <Footer />
      </>
    )
  }
  
  export default Home