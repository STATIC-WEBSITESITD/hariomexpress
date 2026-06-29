import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import aboutImg from '../assets/about.webp'

function AboutUs() {
  return (
    <section className="about-section section-padding">
      <Container>

        <div className="about-wrapper">

          <Row className="align-items-center g-5">

            {/* Left Image */}
            <Col lg={6}>
              <div className="about-image-box">

                <img
                  src={aboutImg}
                  alt="HariOm Express team and logistics"
                  className="img-fluid about-image"
                />

                <div className="about-badge">
                Trusted Since 2016
                </div>

              </div>
            </Col>

            {/* Right Content */}
            <Col lg={6}>

              <div className="section-header text-start mb-4">

                <h6 className="section-subtitle">
                  About Us
                </h6>

                <h2 className="section-title">
                More Than Transportation. Complete Logistics Solutions.
                </h2>

              </div>

              <p className="section-para mb-4">
                Established in 2016, <strong>HariOm Express Logistics Solutions Pvt. Ltd.</strong> has evolved from a transportation service provider into a trusted logistics and supply chain management partner serving businesses across India.
              </p>

              <Button
                as={Link}
                to="/about-us"
                className="theme-light-btn light_btn px-3 px-md-4 py-3 py-md-3"
              >
                Know More<i className="fa-solid fa-angles-right ms-2"></i>
              </Button>

            </Col>

          </Row>

        </div>

      </Container>
    </section>
  )
}

export default AboutUs