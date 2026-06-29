import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AboutPurpose() {
  const coreValues = [
    {
      icon: 'fa-solid fa-users',
      title: 'Customer First',
      text:
        'Every decision begins with understanding customer requirements and delivering solutions that support their goals.'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Reliability',
      text:
        'We believe consistency builds trust. Our commitment is to deliver dependable service at every stage of the logistics journey.'
    },
    {
      icon: 'fa-solid fa-clipboard-check',
      title: 'Accountability',
      text:
        'We take ownership of every shipment, every commitment, and every customer interaction.'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Solution-Oriented Thinking',
      text:
        'We focus on solving logistics challenges through planning, coordination, and operational expertise.'
    },
    {
      icon: 'fa-solid fa-scale-balanced',
      title: 'Integrity',
      text:
        'Transparency, honesty, and ethical business practices form the foundation of our relationships.'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Continuous Improvement',
      text:
        'We continuously refine our processes, infrastructure, and capabilities to serve our customers better.'
    }
  ]

  return (
    <section className="about-purpose-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Our Purpose</h6>
          <h2 className="section-title">Mission, Vision &amp; Values</h2>
          <p className="section-para">
            Dependable logistics, operational excellence, and a customer-first
            mindset guide how we support businesses across India and beyond.
          </p>
        </div>

        <Row className="g-4 mb-5">
          <Col lg={6}>
            <div className="purpose-card h-100">
              <div className="purpose-icon">
                <i className="fa-solid fa-bullseye" aria-hidden="true"></i>
              </div>
              <h3 className="purpose-title">Our Mission</h3>
              <p className="purpose-text">
                To deliver dependable, solution-driven logistics and supply
                chain services that help businesses operate efficiently,
                optimize costs, and maintain seamless movement across their
                operations.
              </p>
              <p className="purpose-text purpose-text-follow">
                Through customer-focused service, operational excellence, and
                continuous improvement, we strive to create logistics solutions
                that add value beyond transportation.
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="purpose-card h-100">
              <div className="purpose-icon">
                <i className="fa-solid fa-eye" aria-hidden="true"></i>
              </div>
              <h3 className="purpose-title">Our Vision</h3>
              <p className="purpose-text">
                To be recognized as one of India&apos;s most trusted logistics
                and supply chain partners, known for reliability, innovation,
                customer commitment, and the ability to solve complex logistics
                challenges across industries.
              </p>
              <p className="purpose-text purpose-text-follow">
                We envision a future where businesses can rely on HariOm as a
                strategic logistics partner that contributes to their growth,
                efficiency, and long-term success.
              </p>
            </div>
          </Col>
        </Row>

        <div className="section-header text-center mb-4">
          <h3 className="purpose-values-heading">Our Core Values</h3>
        </div>

        <Row className="g-4">
          {coreValues.map((item, index) => (
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

export default AboutPurpose
