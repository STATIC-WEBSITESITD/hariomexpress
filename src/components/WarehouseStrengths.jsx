import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function WarehouseStrengths() {
  const strengths = [
    {
      icon: '⏱️',
      title: '20+ Years Experience',
      text: 'Two decades of logistics excellence and operational expertise you can trust for seamless business storage.'
    },
    {
      icon: '🇮🇳',
      title: 'PAN India Network',
      text: 'Extensive countrywide coverage connecting raw materials, hubs, and end-consumers effortlessly.'
    },
    {
      icon: '🏢',
      title: 'Dedicated Warehouses',
      text: 'State-of-the-art facility infrastructure spread across key industrial corridors and major cities.'
    },
    {
      icon: '📈',
      title: 'Inventory Management',
      text: 'Real-time stock tracking and inventory visibility with detailed stock reports to optimize your buffer stock.'
    },
    {
      icon: '🛡️',
      title: 'Safe Storage',
      text: '24/7 round-the-clock physical security, continuous CCTV monitoring, and complete fire protection protocols.'
    },
    {
      icon: '⚡',
      title: 'Fast Dispatch',
      text: 'Immediate order processing with strict SLAs ensuring same-day pick, pack, and transition to dispatch.'
    },
    {
      icon: '🚛',
      title: 'Distribution Support',
      text: 'Integrated transport network facilitating FTL, PTL, and express deliveries directly from storage hubs.'
    },
    {
      icon: '🤝',
      title: 'B2B Logistics Experts',
      text: 'Tailored supply chain workflows customized for manufacturers, distributors, and large retail brands.'
    }
  ]

  return (
    <section className="what-sets-us-apart section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Core Strengths</h6>
          <h2 className="section-title">
            Why Choose HariOm Express?
          </h2>
          <p className="section-para" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Maximize your supply chain reliability with our industry-leading storage and delivery operations.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {strengths.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="process-card h-100">
                <div className="process-icon">
                  {item.icon}
                </div>
                <h4 className="process-title" style={{ fontSize: '18px' }}>
                  {item.title}
                </h4>
                <p className="process-text" style={{ fontSize: '14px' }}>
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

export default WarehouseStrengths
