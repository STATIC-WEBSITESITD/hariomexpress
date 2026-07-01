import React from 'react'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import ElevatorBanner from '../components/ElevatorBanner'
import CoreStrengths from '../components/CoreStrengths'
import ElevatorServices from '../components/ElevatorServices'
import ElevatorWorkflow from '../components/ElevatorWorkflow'
import ElevatorFaq from '../components/ElevatorFaq'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

function ElevatorLogistics() {
  // Hum abhi ke liye home page wale banner ko reuse kar rahe hain
  const elevatorSeo = {
    title: 'Elevator Logistics | HariOm Express',
    description: 'Specialized elevator component transportation and logistics solutions.',
    keywords: 'elevator logistics, elevator transport, HariOm Express'
  }

  return (
    <>
      {/* SEO details */}
      <PageMeta {...elevatorSeo} />
      
      {/* Header (Navigation Bar) */}
      <Header />
      
      {/* Elevator Banner */}
      <ElevatorBanner />
      
      {/* Core Strengths Section */}
      <CoreStrengths />
      
      {/* Elevator Services Section */}
      <ElevatorServices />
      
      {/* Elevator Workflow Section */}
      <ElevatorWorkflow />
      
      {/* Elevator FAQ Section */}
      <ElevatorFaq />
      
      {/* Call to Action Banner */}
      <CtaBanner />
      
      {/* Footer */}
      <Footer />
    </>
  )
}

export default ElevatorLogistics
