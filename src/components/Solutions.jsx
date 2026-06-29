import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import SolutionsGrid from './SolutionsGrid'

function Solutions({ limit = 3 }) {
  return (
    <section className="solutions-section section-padding">
      <Container>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-5">

          <div className="section-header text-start mb-4 mb-lg-0">

            <h6 className="section-subtitle">
              Logistics Solutions
            </h6>

            <h2 className="section-title mb-0">
              We Are Trusted For
              Our Solutions
            </h2>

          </div>
          <Button
            as={Link}
            to="/solutions"
            className="theme-light-btn light_btn px-3 px-md-4 py-3 py-md-3"
          >
            Explore More<i className="fa-solid fa-angles-right ms-2"></i>
          </Button>

        </div>

        <SolutionsGrid limit={limit} />

      </Container>
    </section>
  )
}

export default Solutions
