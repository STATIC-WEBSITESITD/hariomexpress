import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { groupedClientLogos } from '../data/clients'

function Clients() {
  const previewCategories = groupedClientLogos.slice(0, 2)

  return (
    <section className="clients-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Our Clients</h6>
          <h2 className="section-title">Why Our Clients Trust Us</h2>
          <p className="section-para">
            Trusted by businesses and individuals for secure international
            shipping, real-time tracking, and reliable delivery.
          </p>
        </div>

        {previewCategories.map((category) => (
          <div key={category.id} className="client-category-group mb-5">
            <h3 className="client-category-heading">{category.title}</h3>

            <Row className="g-4">
              {category.clients.map((client) => (
                <Col xl={2} lg={3} md={4} sm={6} xs={6} key={client.id}>
                  <div className="brand-box">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        <div className="text-center mt-2">
          <Link to="/our-clients" className="btn btn-primary rounded-pill px-4 py-2">
            View All Clients
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Clients
