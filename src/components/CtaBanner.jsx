import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

// import courierBoy from '../assets/team.webp'

function CtaBanner() {
  return (
    <section className="cta-section section-padding">

      <Container>

        <div className="cta-wrapper py-5">

          <Row className="align-items-lg-stretch">

            {/* Left Image */}
            {/* <Col lg={4} className="cta-image-col">
              <div className="cta-image-box">

                <img
                  src={courierBoy}
                  alt="courier"
                  className="img-fluid cta-image"
                />

              </div>
            </Col> */}

            {/* Content */}
            <Col lg={9}>

              <div className="section-header text-start py-3 mb-0">

                <h6 className="section-subtitle text-white">
                  READY TO SHIP?
                </h6>

                <h2 className="section-title text-white mb-0">
                  Get started with
                  HariOm Express now!
                </h2>

                <p className="section-para text-white mt-3">
                  Fast, secure and reliable
                  international courier &
                  cargo services.
                </p>

              </div>

            </Col>

            {/* Button */}
            <Col lg={3} className="cta-btn-col text-lg-end mt-4 mt-lg-0">

            <Button
                as={Link}
                to="/contact-us"
                className="theme-light-btn px-3 px-md-4 py-3 py-md-3"
              >
                Get Instant Quote<i className="fa-solid fa-angles-right ms-2"></i>
              </Button>

            </Col>

          </Row>

        </div>

      </Container>

    </section>
  )
}

export default CtaBanner