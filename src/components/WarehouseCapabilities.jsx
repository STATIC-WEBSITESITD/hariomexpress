import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function WarehouseCapabilities() {
  const capabilityGroups = [
    {
      icon: '🏢',
      title: 'Core Storage & Management',
      listLabel: 'Our warehousing solutions include:',
      items: [
        {
          title: '3PL Warehousing',
          desc: 'Complete outsourced supply chain management from receiving raw materials to final shipping and returns.'
        },
        {
          title: 'Inventory Storage',
          desc: 'Flexible racking and block stack storage space optimized for materials, electronics, FMCG, and heavy cargo.'
        },
        {
          title: 'Inventory Management',
          desc: 'Advanced tracking systems that monitor batch codes, expiry dates, serial numbers, and real-time inventory updates.'
        },
        {
          title: 'Packaging',
          desc: 'Value-added support including product kitting, customized bundling, barcode labeling, and premium shrink wrapping.'
        }
      ]
    },
    {
      icon: '⚙️',
      title: 'Fulfillment & Distribution',
      listLabel: 'Our operational solutions include:',
      items: [
        {
          title: 'Order Fulfillment',
          desc: 'Reliable pick-and-pack services catering to both bulk B2B commercial shipments and individual e-commerce purchases.'
        },
        {
          title: 'Cross Docking',
          desc: 'Streamlined handling that unloads inbound items and loads them directly into outbound vehicles, minimizing storage times.'
        },
        {
          title: 'Distribution',
          desc: 'Efficient multi-city logistics and transportation ensuring inventory reaches retail networks and stockists on schedule.'
        },
        {
          title: 'Last Mile Dispatch',
          desc: 'Integrated regional shipping networks providing timely final delivery directly to storefronts or residential doors.'
        }
      ]
    }
  ]

  return (
    <section className="industry-expertise section-padding" style={{ backgroundColor: '#f9fafb' }}>
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Our Capabilities</h6>
          <h2 className="section-title">
            End-To-End Warehouse Services
          </h2>
          <p className="section-para" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Scale your business smoothly with our comprehensive third-party logistics and storage capabilities.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {capabilityGroups.map((group, index) => (
            <Col lg={6} md={12} key={index}>
              <div className="process-card expertise-card h-100">
                <div className="process-icon">
                  {group.icon}
                </div>
                <h4 className="process-title">
                  {group.title}
                </h4>
                <p className="expertise-list-label">
                  {group.listLabel}
                </p>
                <ul className="expertise-list">
                  {group.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default WarehouseCapabilities
