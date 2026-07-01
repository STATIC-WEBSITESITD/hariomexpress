import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ElevatorServices() {
  const serviceGroups = [
    {
      icon: '🚛',
      title: 'Heavy Transport & Haulage',
      listLabel: 'Our transport solutions include:',
      items: [
        {
          title: 'Specialized Elevator Transport',
          desc: 'Handling every element of lift systems with absolute mechanical care, proper rigging, and custom packaging.'
        },
        {
          title: 'Traction Machine Transport',
          desc: 'Secured flatbed transport for heavy traction motors and gearless machines with specialized tie-downs.'
        },
        {
          title: 'Cabin & Panel Shipping',
          desc: 'Shockproof shipping containers configured to protect stainless steel and glass elevator cabin panels from scratch.'
        },
        {
          title: 'Guide Rail Logistics',
          desc: 'Flatbed trailer transport for heavy structural guide rails, brackets, and counterweight frames.'
        },
        {
          title: 'Escalator Transportation',
          desc: 'Specialized multi-axle trailers designed to handle heavy, oversized escalator trusses and walkways.'
        }
      ]
    },
    {
      icon: '🏗️',
      title: 'Site Support & Distribution',
      listLabel: 'Our specialized support includes:',
      items: [
        {
          title: 'Control Panel Logistics',
          desc: 'Waterproof and climate-protected courier solutions for delicate electronic control units and wiring harnesses.'
        },
        {
          title: 'Heavy Component Lifting',
          desc: 'Integrated crane and forklift hire to support loading at your factory and rigging at the site.'
        },
        {
          title: 'Just-in-Time Site Delivery',
          desc: 'Timed drop-offs matched with crane availability to avoid blocking busy municipal construction zones.'
        },
        {
          title: 'Reverse Logistics',
          desc: 'Efficient return management for heavy-duty metal pallets, wooden crates, and unused installation gear.'
        }
      ]
    }
  ]

  return (
    <section className="industry-expertise section-padding" style={{ backgroundColor: '#f9fafb' }}>
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Our Services</h6>
          <h2 className="section-title">
            Specialized Transport & Logistics for Elevator Systems
          </h2>
        </div>

        <Row className="g-4 justify-content-center">
          {serviceGroups.map((group, index) => (
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

export default ElevatorServices
