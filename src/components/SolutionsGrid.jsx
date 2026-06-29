import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { solutions, getSolutionImage } from '../data/solutions'

function SolutionCard({ item }) {
  return (
    <Col lg={4} md={6}>
      <div className="service-card h-100">
        <span className="service-category">{item.category}</span>

        <div className="d-flex justify-content-between align-items-start mb-4">
          <h3 className="service-title">{item.title}</h3>

          <Link
            to={`/${item.slug}`}
            className="service-arrow"
            aria-label={`Learn more about ${item.title}`}
          >
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>

        <p className="service-text">{item.cardText}</p>

        <div className="service-image-box">
          <img
            src={getSolutionImage(item)}
            alt={item.title}
            className="img-fluid service-image"
          />
        </div>
      </div>
    </Col>
  )
}

function SolutionsGrid({ limit, groupByCategory = false }) {
  const visibleSolutions =
    typeof limit === 'number' ? solutions.slice(0, limit) : solutions

  if (groupByCategory && typeof limit !== 'number') {
    const categories = [...new Set(visibleSolutions.map((item) => item.category))]

    return (
      <>
        {categories.map((category) => (
          <div key={category} className="service-category-group mb-5">
            <h3 className="service-category-heading">{category}</h3>
            <Row className="g-4">
              {visibleSolutions
                .filter((item) => item.category === category)
                .map((item) => (
                  <SolutionCard key={item.slug} item={item} />
                ))}
            </Row>
          </div>
        ))}
      </>
    )
  }

  return (
    <Row className="g-4">
      {visibleSolutions.map((item) => (
        <SolutionCard key={item.slug} item={item} />
      ))}
    </Row>
  )
}

export default SolutionsGrid
