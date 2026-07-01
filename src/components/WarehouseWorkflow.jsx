import React from 'react'
import { Container } from 'react-bootstrap'

function WarehouseWorkflow() {
  const steps = [
    {
      number: '1',
      title: 'Receive Inventory',
      text: 'We receive, inspect, verify quantities, check quality, barcode, and document incoming shipments into our warehouse database.'
    },
    {
      number: '2',
      title: 'Store Securely',
      text: 'Goods are allocated to optimized pallet racks or secure bulk zones matching product-specific safety profiles.'
    },
    {
      number: '3',
      title: 'Manage Stock',
      text: 'Real-time inventory levels, automated cycle counts, and stock level notifications are processed continuously.'
    },
    {
      number: '4',
      title: 'Pick & Pack',
      text: 'As orders arrive, items are picked accurately using electronic picking sheets and packed using durable transit-safe materials.'
    },
    {
      number: '5',
      title: 'Dispatch',
      text: 'Shipments are loaded into scheduled logistics fleet routes and dispatched with active tracking IDs provided to clients.'
    }
  ]

  return (
    <section className="logistics-timeline-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Operational Flow</h6>
          <h2 className="section-title">
            Our Warehouse Process
          </h2>
          <p className="section-para" style={{ maxWidth: '700px', margin: '0 auto' }}>
            A highly organized, step-by-step workflow designed to keep your cargo secure and shipments flowing on time.
          </p>
        </div>

        <div className="logistics-timeline-container">
          {steps.map((item, index) => (
            <div className="logistics-timeline-item" key={index}>
              <div className="logistics-timeline-badge">
                {item.number}
              </div>
              <div className="logistics-timeline-content">
                <h4 className="logistics-timeline-title">
                  {item.title}
                </h4>
                <p className="logistics-timeline-text">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WarehouseWorkflow
