import React from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import { getBlogSeo } from '../data/seo'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner'
import { getBlogBySlug } from '../data/blogs'

function BlogDetailPage() {
  const { slug } = useParams()
  const post = getBlogBySlug(slug)

  if (!post) {
    return <Navigate to="/blogs" replace />
  }

  const seo = getBlogSeo(post)

  return (
    <>
      <PageMeta {...seo} />
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">HariOm Express</p>
          <h1 className="page-banner-title">{post.bannerTitle}</h1>
          <p className="page-banner-text">{post.bannerText}</p>
        </Container>
      </section>

      <section className="blog-detail-section section-padding">
        <Container>
          <div className="blog-detail-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">{post.date}</span>
          </div>

          <div className="blog-detail-content policy-content">
            {post.sections.map((section) => (
              <div key={section.title} className="policy-block">
                <h2 className="policy-section-title">{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="blog-detail-paragraph">
                    {paragraph}
                  </p>
                ))}
                {section.list?.length > 0 && (
                  <ul className="policy-list blog-detail-list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <p className="policy-back mt-5">
            <Link to="/contact-us">Contact us</Link> if you have questions about
            this article.
          </p>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default BlogDetailPage
