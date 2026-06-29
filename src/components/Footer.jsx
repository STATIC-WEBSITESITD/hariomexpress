import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import logo from '../assets/logo.png'
import { policies, policyRoutes } from '../data/policies'

const footerPolicies = Object.entries(policyRoutes).map(([slug, key]) => ({
  slug,
  title: policies[key].title,
}))

const WHATSAPP_HREF = 'https://wa.me/919321656547'

function Footer() {
  return (
    <>
    <footer className="footer-section">

      <Container>

        {/* Top Footer */}
        <Row className="gy-5">

          {/* About */}
          <Col lg={4} md={6}>

            <img
              src={logo}
              alt="logo"
              height="70"
              className="mb-4" style={{ width: '120px', filter: 'brightness(0) invert(1)' }}
            />

            <p className="footer-text">
              Fast and secure international
              courier & cargo solutions with
              door-to-door service and
              real-time tracking.
            </p>

            <div className="social-icons d-flex gap-3 mt-4">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/hariomexpresslogistics?utm_source=qr&igsh=ZjBjNDBld2NmdmU4"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/hariom-express-logistics-solutions-pvt-ltd/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

            </div>

          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>

            <h5 className="footer-title fs-5">
              Quick Links
            </h5>

            <ul className="footer-links">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/our-clients">Our Clients</Link></li>
              <li><Link to="/tracking">Tracking</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>

          </Col>

          {/* Policies */}
          <Col lg={3} md={6}>

            <h5 className="footer-title fs-5">
            Legal Policies
            </h5>

            <ul className="footer-links">
              {footerPolicies.map((policy) => (
                <li key={policy.slug}>
                  <Link to={`/${policy.slug}`}>{policy.title}</Link>
                </li>
              ))}
            </ul>

          </Col>

          {/* Contact Us */}
          <Col lg={3} md={6}>

            <h5 className="footer-title fs-5">
              Contact Us
            </h5>

            <ul className="footer-contact list-unstyled mb-0">
              <li>
                <p className="footer-text mb-0">
                SB-153, 2nd floor, High Street Mall, Kapur Bavadi Junction, Thane (W), 400 601.
                </p>
              </li>
              <li>
                <a href="mailto:info@hariomairexpress.com">
                  <i className="fa-solid fa-envelope me-2" aria-hidden="true"></i>
                  info@hariomairexpress.com
                </a>
              </li>
              <li>
                <a href="tel:+919321656547">
                  <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                  +91 93216 56547
                </a>
              </li>
            </ul>

          </Col>

        </Row>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p className="mb-0">
            © 2026 HariOm Express.
          </p>

          <p className="footer-credit mb-0">
          <a
            href="https://itdgrowthlabs.com/" className="text-white text-decoration-none" target="_blank" rel="noreferrer"> Developed by ITD GrowthLabs</a>
          </p>

        </div>

      </Container>

    </footer>

    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      className="sticky-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>
    </>
  )
}

export default Footer