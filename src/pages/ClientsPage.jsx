import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import { PAGE_SEO } from '../data/seo'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import { groupedClientLogos } from '../data/clients'

function ClientsPage() {
  return (
    <>
      <PageMeta {...PAGE_SEO.clients} />
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">HariOm Express</p>
          <h1 className="page-banner-title">Our Clients</h1>
          <p className="page-banner-text">
            Trusted by businesses across India for secure shipping,
            real-time tracking, and reliable logistics solutions.
          </p>
        </Container>
      </section>

      <section className="clients-page-section section-padding">
        <Container>
          <div className="section-header text-center mb-5">
            <h6 className="section-subtitle">Partnerships That Matter</h6>
            <h2 className="section-title">Why Our Clients Trust Us</h2>
            <p className="section-para">
              From elevator manufacturers to IT, telecom, cables, and FMCG brands,
              HariOm Express supports diverse industries with dependable logistics.
            </p>
          </div>

          {groupedClientLogos.map((category) => (
            <div key={category.id} className="client-category-group mb-5">
              <h3 className="client-category-heading mb-4">{category.title}</h3>

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
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default ClientsPage
