import React from 'react'
import { Navigate, useLocation, Link } from 'react-router-dom'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import { getSolutionSeo } from '../data/seo'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner'
import { getSolutionBySlug, getSolutionImage } from '../data/solutions'

function SolutionParagraph({ text }) {
  const colonIndex = text.indexOf(':')
  if (colonIndex > 0 && colonIndex < 80) {
    return (
      <p className="service-detail-paragraph">
        <strong>{text.slice(0, colonIndex + 1)}</strong>
        {text.slice(colonIndex + 1)}
      </p>
    )
  }
  return <p className="service-detail-paragraph">{text}</p>
}

function SolutionDetailPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return <Navigate to="/" replace />
  }

  const benefitItems = solution.whyChooseItems || solution.benefits || []
  const benefitSectionTitle = solution.whyChooseTitle || 'Key Benefits'
  const seo = getSolutionSeo(solution)

  return (
    <>
      <PageMeta {...seo} />
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">{solution.category}</p>
          <h1 className="page-banner-title">{solution.bannerTitle}</h1>
          <p className="page-banner-text">{solution.bannerText}</p>
        </Container>
      </section>

      <section className="service-hero-image-section">
        <Container>
          <div className="service-hero-image-wrap">
            <img
              src={getSolutionImage(solution)}
              alt={solution.title}
              className="img-fluid service-hero-image"
            />
          </div>
        </Container>
      </section>

      <section className="service-detail-section section-padding">
        <Container>
          <div className="service-detail-block">
            <h2 className="service-detail-heading">{solution.introTitle}</h2>
            {solution.introParagraphs.map((paragraph, index) => (
              <SolutionParagraph key={index} text={paragraph} />
            ))}
          </div>

          {solution.challengesTitle && solution.challenges && (
            <div className="service-detail-block">
              <h2 className="service-detail-heading">{solution.challengesTitle}</h2>
              {solution.challengesIntro && (
                <p className="service-detail-paragraph">{solution.challengesIntro}</p>
              )}
              <ul className="expertise-list">
                {solution.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="service-detail-block">
            <h2 className="service-detail-heading">{solution.whatWeDoTitle}</h2>
            {solution.whatWeDoItems.map((item, index) => (
              <SolutionParagraph key={index} text={item} />
            ))}
          </div>

          {solution.expertiseTitle && solution.expertiseSections && (
            <div className="service-detail-block">
              <h2 className="service-detail-heading">{solution.expertiseTitle}</h2>
              <Row className="g-4">
                {solution.expertiseSections.map((section, index) => (
                  <Col lg={6} md={12} key={index}>
                    <div className="process-card expertise-card h-100">
                      <h3 className="process-title">{section.title}</h3>
                      <p className="expertise-list-label">{section.listLabel}</p>
                      <ul className="expertise-list">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Container>
      </section>

      <section className="service-benefits-section section-padding">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title service-benefits-title">
              {benefitSectionTitle}
            </h2>
            {solution.benefitsTagline && (
              <p className="section-para">{solution.benefitsTagline}</p>
            )}
          </div>

          <Row className="g-4">
            {benefitItems.map((benefit, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="service-benefit-card h-100">
                  {benefit.icon && (
                    <div className="service-benefit-icon">
                      <i className={benefit.icon} aria-hidden="true"></i>
                    </div>
                  )}
                  <h3 className="service-benefit-title">{benefit.title}</h3>
                  <p className="service-benefit-text">{benefit.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="faq-section section-padding">
        <Container>
          <div className="section-header text-center">
            <h6 className="section-subtitle">FAQ</h6>
            <h2 className="section-title">
              Frequently Asked
              Questions
            </h2>
            {solution.faqIntro && (
              <p className="section-para">{solution.faqIntro}</p>
            )}
          </div>

          <Accordion defaultActiveKey="0">
            {solution.faqs.map((item, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={index}
                className="faq-item"
              >
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <p className="policy-back mt-5 text-center">
            <Link to="/contact-us">Contact us</Link> for a quote or pickup
            booking.
          </p>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default SolutionDetailPage
