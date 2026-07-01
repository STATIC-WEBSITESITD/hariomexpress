import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function CoreStrengths() {
  const strengths = [
    {
      icon: '🏗️',
      title: 'Industrial Cargo Specialists',
      text: 'Our heavy lifting, specialized fleet, and site coordination guarantee seamless transit for precision engineering structures.'
    },
    {
      icon: '⏱️',
      title: '20+ Years Experience',
      text: 'Handling heavy elevator cabins, motors, and fragile glass structures for leading industrial projects.'
    },
    {
      icon: '🚛',
      title: 'Specialized Fleet',
      text: 'Tailored flatbeds, low-beds, and containerized trailers configured to ship oversized guide rails and panels.'
    },
    {
      icon: '⏳',
      title: 'Just-In-Time Coordination',
      text: 'We match construction site installation timelines to deliver items exactly when crane operators are scheduled.'
    },
    {
      icon: '🪵',
      title: 'Custom Wood Crating',
      text: 'Delicate components, guide rails, and heavy cabin panels are packed in industrial-grade wooden frames.'
    },
    {
      icon: '⚙️',
      title: 'Crane & Rigging Support',
      text: 'Handling heavy traction machines and elevator motors safely using specialized crane lifting gear.'
    },
    {
      icon: '🗺️',
      title: 'Real-Time Route Planning',
      text: 'In-depth route survey to bypass overhead constraints and bridge weight limits for heavy cargo.'
    },
    {
      icon: '🇮🇳',
      title: 'PAN India Operations',
      text: 'Seamless connectivity across all key industrial corridors and construction sites in India.'
    },
    {
      icon: '🤝',
      title: 'Dedicated B2B Support',
      text: 'Direct coordination with project engineers and site managers for zero delays at drop-off locations.'
    }
  ]

  return (
    <section className="what-sets-us-apart section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Core Strengths</h6>
          <h2 className="section-title">
            Built for Heavy & Complex Transportation
          </h2>
        </div>

        <Row className="g-4">
          {strengths.map((item, index) => (
            <Col lg={4} md={6} key={index}>
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

export default CoreStrengths
