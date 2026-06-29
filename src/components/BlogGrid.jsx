import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blogs'

function BlogGrid({ limit }) {
  const posts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS

  return (
    <Row className="g-4">
      {posts.map((item) => (
        <Col lg={4} md={6} key={item.slug}>
          <article className="blog-card h-100">
            <div className="blog-image-box">
              <span className="blog-category">{item.category}</span>
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid blog-image"
              />
            </div>

            <div className="blog-content">
              <span className="blog-date">{item.date}</span>

              <h3 className="blog-title">{item.title}</h3>

              <p className="blog-text">{item.text}</p>

              <Link to={`/blog/${item.slug}`} className="blog-btn">
                Explore Now
              </Link>
            </div>
          </article>
        </Col>
      ))}
    </Row>
  )
}

export default BlogGrid
