import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import aboutImg from '../assets/team1.png'

function AboutIntro() {
  return (
    <section className="about-section about-intro-section section-padding">
      <Container>

        <div className="about-wrapper">

          <Row className="align-items-center g-5">

            <Col lg={5}>
              <div className="about-image-box">

                <img
                  src={aboutImg}
                  alt="HariOm Express team and logistics"
                  className="img-fluid about-image"
                />

              </div>
            </Col>

            <Col lg={7}>

              <div className="section-header text-start mb-4">
              <h6 className="section-subtitle">
                  About HariOm Express
                </h6>
                <h2 className="section-title">Leaders Thought</h2>
              </div>

              <p className="section-para mb-4">
                At HariOm, we believe logistics is about much more than moving
                shipments from one place to another. It is about helping
                businesses stay on schedule, meet commitments, and operate
                without disruption.
              </p>

              <p className="section-para mb-4">
                With years of industry experience and a passion for customer
                service, Mr. Keshav Choudhary has built HariOm on the principles
                of trust, reliability, and long-term relationships. His vision
                has always been simple — to create a logistics company that
                understands customer challenges and delivers practical solutions
                that keep businesses moving.
              </p>

              <p className="section-para mb-4">
                Today, that same commitment continues to drive HariOm&apos;s
                growth as a trusted logistics and supply chain partner for
                businesses across India.
              </p>

              <blockquote className="about-founder-quote">
                <p className="about-founder-quote-text mb-3">
                  &quot;Every shipment carries a commitment. Our responsibility
                  is to ensure it reaches where it needs to be, when it needs to
                  be there.&quot;
                </p>
                <footer className="about-founder-quote-author">
                  – Keshav Choudhary, Managing Director
                </footer>
              </blockquote>

            </Col>

          </Row>

        </div>

      </Container>
    </section>
  )
}

export default AboutIntro
