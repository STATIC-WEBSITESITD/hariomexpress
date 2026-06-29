import React from 'react'
import { Container } from 'react-bootstrap'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import { PAGE_SEO } from '../data/seo'
import BlogGrid from '../components/BlogGrid'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

function BlogsPage() {
  return (
    <>
      <PageMeta {...PAGE_SEO.blogs} />
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">HariOm Express</p>
          <h1 className="page-banner-title">Our Blogs</h1>
          <p className="page-banner-text">
            Stay updated with the latest news, tips, and insights from HariOm Express.
          </p>
        </Container>
      </section>

      <section className="blogs-page-section section-padding">
        <Container>
          <BlogGrid />
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default BlogsPage
