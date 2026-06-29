import React from 'react'
import { Container, Accordion } from 'react-bootstrap'

function AboutFaq() {

  const faqs = [
    {
      question: 'What is HariOm Express?',
      answer:
        'HariOm Express is an international courier and cargo service provider based in Mumbai, India, dedicated to helping individuals and businesses ship documents, parcels, and commercial goods worldwide.'
    },
    {
      question: 'Why should I choose HariOm Express for my international shipping needs?',
      answer:
        'We offer expertise in global logistics, door-to-door service, competitive rates, and dedicated customer support, ensuring reliable and hassle-free deliveries to 220+ countries and territories.'
    },
    {
      question: 'Do you provide packaging and documentation support?',
      answer:
        'Yes, we assist with international packaging guidelines and help prepare export documentation, including invoices, KYC, declarations, and other paperwork required for smooth customs clearance.'
    },
    {
      question: 'How do you ensure the safety of my shipments?',
      answer:
        'Every shipment is carefully handled, tracked at each step, and covered with timely updates. We partner with leading global carriers and implement strict security protocols throughout the process.'
    },
    {
      question: 'How can I get in touch or request a quote?',
      answer:
        'You can contact us via our website, call our helpline, or message us on WhatsApp. Share your shipping details for a prompt, customized quote or to discuss shipment requirements.'
    }
  ]

  return (
    <section className="faq-section about-faq-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">
            About HariOm Express
          </h6>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-para">
            Key information about our company, expertise, and international shipping services.
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
                <span className="faq-number">
                  {String(index + 1).padStart(2, '0')}.
                </span>
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

export default AboutFaq
