import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import service1 from '../assets/w1.jpeg'
import service2 from '../assets/w2.jpeg'
import service3 from '../assets/w3.jpeg'

function WhoWeServe() {

  const services = [
  {
    image: service1,
    subtitle: 'Fast Courier Service for Quick & Reliable Deliveries',
    title: 'Personal & Family Shipments',
    text: 'Send parcels, essentials, and gifts safely across borders.',
    button: 'Know More »',
    link: '/about-us'
  },
  {
    image: service2,
    subtitle: 'Fast Courier Service for Quick & Reliable Deliveries',
    title: 'Business & Export Solutions',
    text: 'Reliable international logistics tailored for commercial shipments.',
    button: 'Know More »',
    link: '/about-us'
  },
  {
    image: service3,
    subtitle: 'Fast Courier Service for Quick & Reliable Deliveries',
    title: 'Students Shipping',
    text: 'Affordable and reliable shipping solutions for students moving abroad.',
    button: 'Know More »',
    link: '/about-us'
  }
]

  return (
    <section className="who-we-serve section-padding">
      <Container>

        {/* Heading */}
        <div className="section-header text-center">

          <h6 className="section-subtitle">
            WHO WE SERVE
          </h6>

          <h2 className="section-title">
            Solutions for Every
            Kind of Journey
          </h2>

        </div>

        {/* Cards */}
        <Row className="g-4">

          {services.map((item, index) => (
            <Col
              lg={4}
              md={6}
              key={index}
            >
              <div className="serve-card h-100">

                {/* Image */}
                <div className="serve-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid serve-image"
                  />
                </div>

                {/* Content */}
                <div className="serve-content">

                  <span className="serve-subtitle">
                    {item.subtitle}
                  </span>

                  <h3 className="serve-title">
                    {item.title}
                  </h3>

                  <p className="serve-text">
                    {item.text}
                  </p>

                  <Link to={item.link} className="serve-btn">
                    {item.button}
                  </Link>

                </div>

              </div>
            </Col>
          ))}

        </Row>

      </Container>
    </section>
  )
}

export default WhoWeServe