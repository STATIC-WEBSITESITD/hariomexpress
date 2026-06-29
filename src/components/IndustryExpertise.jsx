import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function IndustryExpertise() {

  const industries = [
    {
      icon: '🛗',
      title: 'Elevator Industry',
      listLabel: 'Our expertise includes:',
      items: [
        'Elevator Component Transportation',
        'Site Deliveries',
        'Project-Based Logistics Support',
        'Time-Critical Shipments',
        'Secure Material Handling',
        'Nationwide Distribution'
      ]
    },
    {
      icon: '💻',
      title: 'IT Equipment',
      listLabel: 'Our capabilities include:',
      items: [
        'Secure Equipment Transportation',
        'Sensitive Asset Handling',
        'Protective Packaging',
        'Time-Sensitive Deliveries',
        'Nationwide Distribution',
        'Business-Critical Shipment Management'
      ]
    }
  ]

  return (
    <section className="industry-expertise section-padding">
      <Container>

        <div className="section-header text-center">

          <h6 className="section-subtitle">
            Our Industry Expertise
          </h6>

          <h2 className="section-title">
            Specialized Logistics for
            Complex Industries
          </h2>

        </div>

        <Row className="g-4 justify-content-center">

          {industries.map((item, index) => (
            <Col
              lg={6}
              md={12}
              key={index}
            >
              <div className="process-card expertise-card h-100">

                <div className="process-icon">
                  {item.icon}
                </div>

                <h4 className="process-title">
                  {item.title}
                </h4>

                <p className="expertise-list-label">
                  {item.listLabel}
                </p>

                <ul className="expertise-list">
                  {item.items.map((point, i) => (
                    <li key={i}>{point}</li>
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

export default IndustryExpertise
