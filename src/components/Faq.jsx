import React from 'react'
import { Container, Accordion } from 'react-bootstrap'

function Faq() {

  const faqs = [
    {
      question: 'What logistics services does HariOm Express provide?',
      answer:
        'HariOm Express offers a wide range of logistics and supply chain solutions, including Full Truck Load (FTL), Part Truck Load (PTL), Less Than Truck Load (LTL), Same-Day Delivery, Reverse Pickup, Express Logistics, Surface Transportation, Domestic & International Air Cargo, Warehousing & Fulfillment, 3PL, 4PL, and specialized logistics solutions for the Elevator Industry and IT Equipment transportation.',
    },
    {
      question: 'Does HariOm provide logistics services across India?',
      answer:
        'Yes. HariOm operates through a PAN India logistics network covering 33,000+ pin codes with support from 2,200+ last-mile delivery centers, enabling reliable transportation and delivery services across the country.',
    },
    {
      question: 'What industries does HariOm serve?',
      answer:
        'We support businesses across multiple industries, including Manufacturing, Engineering, Elevator, Electronics, Information Technology, Telecom, FMCG, Industrial Equipment, Infrastructure, and Trading sectors.',
    },
    {
      question: 'What is the difference between FTL, PTL, and LTL services?',
      answer: (
        <>
          <p className="mb-2">
            <strong>FTL (Full Truck Load):</strong> A dedicated vehicle for your shipment.
          </p>
          <p className="mb-2">
            <strong>PTL (Part Truck Load):</strong> Ideal for medium-sized shipments that do not require an entire truck.
          </p>
          <p className="mb-2">
            <strong>LTL (Less Than Truck Load):</strong> Suitable for smaller shipments sharing vehicle space with other consignments.
          </p>
          <p className="mb-0">
            Our team can help determine the most cost-effective option based on your shipment size and urgency.
          </p>
        </>
      ),
    },
    {
      question: 'Do you handle urgent and time-sensitive deliveries?',
      answer:
        'Yes. We offer Same-Day Delivery, Express Logistics, Critical Shipment Handling, and Air Cargo services for urgent business requirements where speed and reliability are essential.',
    },
    {
      question: 'What makes HariOm different from other logistics companies?',
      answer:
        'HariOm combines over 20 years of logistics expertise with a customer-first approach, specialized industry knowledge, PAN India reach, warehousing capabilities, dedicated coordination, and customized logistics solutions designed around business requirements.',
    },
    {
      question: 'Do you provide warehousing and inventory management services?',
      answer:
        'Yes. Our Warehousing & Fulfillment solutions include inventory management, storage, order fulfillment, pick & pack services, cross docking, distribution management, and value-added services through strategically located facilities across India.',
    },
    {
      question: 'Do you provide domestic and international air cargo services?',
      answer:
        'Yes. HariOm offers both Domestic and International Air Cargo solutions for time-sensitive shipments, business deliveries, commercial cargo, and urgent transportation requirements, ensuring faster transit and reliable delivery.',
    },
    {
      question: 'Can HariOm handle specialized logistics requirements?',
      answer:
        'Absolutely. We specialize in Elevator Industry Logistics, IT Equipment Transportation, Critical Shipment Handling, Rain Packing, Reverse Logistics, and customized logistics solutions designed to meet industry-specific challenges.',
    },
    {
      question: 'Do you offer shipment tracking and delivery updates?',
      answer:
        'Yes. We believe transparency is essential. Customers receive shipment updates and communication throughout the transportation process, helping them stay informed and plan with confidence.',
    },
    {
      question: 'How can I request a quote for logistics services?',
      answer:
        'You can contact our team through the website, call us directly, or submit an inquiry through our contact form. Our logistics experts will understand your requirements and provide a customized solution and quotation.',
    },
    {
      question: 'Do you support businesses with regular transportation requirements?',
      answer:
        'Yes. We work with businesses of all sizes and provide customized logistics solutions for recurring transportation, distribution, warehousing, and supply chain requirements.',
    },
  ]

  return (
    <section className="faq-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">
            FAQ
          </h6>
          <h2 className="section-title">
            Frequently Asked
            Questions
          </h2>
          <p className="section-para">
            Find answers to common questions about HariOm Express logistics and supply chain services across India.
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

export default Faq
