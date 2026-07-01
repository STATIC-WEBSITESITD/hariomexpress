import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import { getSolutionBySlug } from '../data/solutions'

function WarehouseFaq() {
  const solution = getSolutionBySlug('warehousing-fulfillment')
  const faqs = solution ? solution.faqs : []

  return (
    <section className="faq-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">FAQ</h6>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-para">
            Quick answers about warehousing, fulfillment, inventory management, and distribution support.
          </p>
        </div>

        <Accordion defaultActiveKey="0">
          {faqs.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="faq-item"
            >
              <Accordion.Header>
                {item.question}
              </Accordion.Header>
              <Accordion.Body>
                {item.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export default WarehouseFaq
