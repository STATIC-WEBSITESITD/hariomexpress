import React from 'react'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import WarehouseBanner from '../components/WarehouseBanner'
import WarehouseStrengths from '../components/WarehouseStrengths'
import WarehouseCapabilities from '../components/WarehouseCapabilities'
import WarehouseWorkflow from '../components/WarehouseWorkflow'
import WarehouseFaq from '../components/WarehouseFaq'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

function WarehouseLogistics() {
  const warehouseSeo = {
    title: 'Reliable Warehousing & 3PL Solutions | HariOm Express',
    description: 'Secure storage, inventory management, distribution, and fulfillment solutions across India with trusted 3PL partner.',
    keywords: 'warehousing solutions, 3PL warehousing, order fulfillment, distribution logistics, HariOm Express'
  }

  return (
    <>
      {/* SEO details */}
      <PageMeta {...warehouseSeo} />
      
      {/* Header (Navigation Bar) */}
      <Header />
      
      {/* Warehouse Banner */}
      <WarehouseBanner />
      
      {/* Core Strengths Section */}
      <WarehouseStrengths />
      
      {/* Capabilities Section */}
      <WarehouseCapabilities />
      
      {/* Operational Flow (Process Timeline) Section */}
      <WarehouseWorkflow />
      
      {/* FAQ Section */}
      <WarehouseFaq />
      
      {/* Call to Action Banner */}
      <CtaBanner />
      
      {/* Footer */}
      <Footer />
    </>
  )
}

export default WarehouseLogistics
