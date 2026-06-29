import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function WhatSetsUsApart() {

  const features = [
    {
      icon: '🕐',
      title: 'Anytime Service',
      text: "Business requirements don't always happen during business hours. Our team remains responsive and available when your operations need support."
    },
    {
      icon: '⚡',
      title: 'Same-Day Delivery',
      text: 'For urgent and time-critical shipments, we provide fast and dependable delivery solutions designed to minimize downtime and keep operations running smoothly.'
    },
    {
      icon: '📊',
      title: 'Logistics Intelligence',
      text: 'Successful logistics is about planning, coordination, visibility, and execution. We combine operational expertise with strategic logistics planning to improve efficiency and reliability.'
    },
    {
      icon: '🤝',
      title: 'Customer-First Approach',
      text: 'Every shipment is handled with a focus on communication, accountability, and service excellence.'
    },
    {
      icon: '🔄',
      title: 'Reverse Pickup Solutions',
      text: 'Efficient reverse logistics support that helps businesses manage returns, collections, and reverse supply chain requirements with ease.'
    },
    {
      icon: '☔',
      title: 'Rain Packing Protection',
      text: 'Specialized packaging solutions designed to protect shipments from weather-related risks and transit damage.'
    }
  ]

  return (
    <section className="what-sets-us-apart section-padding">
      <Container>

        <div className="section-header text-center">

          <h6 className="section-subtitle">
            What Sets Us Apart
          </h6>

          <h2 className="section-title">
            Built for Reliability
            When It Matters Most
          </h2>

        </div>

        <Row className="g-4">

          {features.map((item, index) => (
            <Col
              lg={4}
              md={6}
              key={index}
            >
              <div className="process-card h-100">

                <div className="process-icon">
                  {item.icon}
                </div>

                <h4 className="process-title">
                  {item.title}
                </h4>

                <p className="process-text">
                  {item.text}
                </p>

              </div>
            </Col>
          ))}

        </Row>

      </Container>
    </section>
  )
}

export default WhatSetsUsApart
