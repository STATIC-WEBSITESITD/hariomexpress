import React from 'react'

import { Container } from 'react-bootstrap'

import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import { PAGE_SEO } from '../data/seo'

import SolutionsGrid from '../components/SolutionsGrid'

import CtaBanner from '../components/CtaBanner'

import Footer from '../components/Footer'



function SolutionsPage() {

  return (

    <>

      <PageMeta {...PAGE_SEO.solutions} />

      <Header />



      <section className="page-banner">

        <Container>

          <p className="page-banner-kicker">HariOm Express</p>

          <h1 className="page-banner-title">Solutions</h1>

          <p className="page-banner-text">

            End-to-end logistics for truckload, express courier, air cargo,

            reverse pickup, 3PL, and last-mile delivery across India.

          </p>

        </Container>

      </section>



      <section className="solutions-page-section section-padding">

        <Container>

          <SolutionsGrid groupByCategory />

        </Container>

      </section>



      <CtaBanner />

      <Footer />

    </>

  )

}



export default SolutionsPage

