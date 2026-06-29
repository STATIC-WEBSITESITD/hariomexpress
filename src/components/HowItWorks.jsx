import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function HowItWorks() {

  const process = [
    {
      icon: '📝',
      title: 'Request Quote',
      text: 'Share shipment details for the best rate.'
    },
    {
      icon: '🚚',
      title: 'Pickup Scheduled',
      text: 'Doorstep collection at your convenience.'
    },
    {
      icon: '📦',
      title: 'Secure Packaging',
      text: 'Handled carefully with professional packing.'
    },
    {
      icon: '🛃',
      title: 'Customs Clearance',
      text: 'Documentation and compliance managed by experts.'
    },
    {
      icon: '✅',
      title: 'Delivered Safely',
      text: 'Delivered on time with live tracking updates.'
    },
    {
      icon: '🛡️',
      title: 'Insurance Assistance',
      text: 'Optional shipment protection and claim support for extra peace of mind.'
    }
  ]

  return (
    <section className="how-it-works section-padding">
      <Container>

        {/* Common Heading */}
        <div className="section-header text-center">

          <h6 className="section-subtitle">
            How It Works
          </h6>

          <h2 className="section-title">
            A Simple Process Complete
            Peace Of Mind
          </h2>

        </div>

        {/* Cards */}
        <Row className="g-4">

          {process.map((item, index) => (
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

export default HowItWorks