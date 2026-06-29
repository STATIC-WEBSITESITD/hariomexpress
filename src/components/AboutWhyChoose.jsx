import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AboutWhyChoose() {
  const reasons = [
    {
      icon: 'fa-solid fa-handshake',
      title: 'Customer-First Approach',
      text:
        'Every logistics solution is built around customer requirements, operational priorities, and service expectations.'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Logistics Intelligence',
      text:
        'We combine experience, planning, and execution to create efficient logistics solutions that support business objectives.'
    },
    {
      icon: 'fa-solid fa-map-location-dot',
      title: 'Nationwide Reach',
      text:
        'With extensive transportation and delivery coverage, we support businesses across India through a strong logistics network.'
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Dedicated Support',
      text:
        'Our team remains committed to responsive communication, proactive coordination, and reliable service throughout the logistics journey.'
    },
    {
      icon: 'fa-solid fa-layer-group',
      title: 'End-to-End Capabilities',
      text:
        'From transportation and air cargo to warehousing, fulfillment, 3PL, and 4PL solutions, businesses can access multiple logistics services through a single partner.'
    }
  ]

  return (
    <section className="about-why-choose-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Why Choose Us</h6>
          <h2 className="section-title">Why Businesses Choose HariOm Express</h2>
        </div>

        <Row className="g-4 justify-content-center">
          {reasons.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <div className="purpose-card purpose-value-card h-100">
                <div className="purpose-icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
                <h4 className="purpose-value-title">{item.title}</h4>
                <p className="purpose-text">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default AboutWhyChoose
