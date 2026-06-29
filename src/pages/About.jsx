import React from 'react'
import { Container } from 'react-bootstrap'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import { PAGE_SEO } from '../data/seo'
import AboutIntro from '../components/AboutIntro'
import AboutPurpose from '../components/AboutPurpose'
import AboutWhyChoose from '../components/AboutWhyChoose'
import AboutFaq from '../components/AboutFaq'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <PageMeta {...PAGE_SEO.about} />
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">HariOm Express</p>
          <h1 className="page-banner-title">
            About Us
          </h1>
          <p className="page-banner-text">
            Learn how HariOm Express helps businesses and exporters ship worldwide from Mumbai with reliability and care.
          </p>
        </Container>
      </section>

      <AboutIntro />
      <AboutPurpose />
      <AboutWhyChoose />
      <AboutFaq />
      <CtaBanner />
      <Footer />
    </>
  )
}

export default About
