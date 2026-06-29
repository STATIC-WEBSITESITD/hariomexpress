import React, { useEffect, useState } from 'react'
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown
} from 'react-bootstrap'

import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import { solutions } from '../data/solutions'

const solutionCategories = [...new Set(solutions.map((item) => item.category))]

function Header() {

  const [scrolled, setScrolled] = useState(false)
  const [navbarExpanded, setNavbarExpanded] = useState(false)

  const closeMobileNav = () => setNavbarExpanded(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', navbarExpanded)

    return () => {
      document.body.classList.remove('mobile-nav-open')
    }
  }, [navbarExpanded])

  return (
    <Navbar
      expand="lg"
      expanded={navbarExpanded}
      onToggle={setNavbarExpanded}
      className={`custom-header py-3 ${scrolled ? 'header-scrolled' : ''}`}
    >
      <Container>
        {/* Left Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo"
            height="55"
          />
        </Navbar.Brand>
        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Center Menu */}
          <Nav className="mx-auto gap-lg-4 text-lg-center">
            <Nav.Link as={Link} to="/about-us" onClick={closeMobileNav}>
              About Us
            </Nav.Link>
            <NavDropdown
              title="Solutions"
              id="solutions-dropdown"
              className="custom-dropdown solutions-megamenu"
              onToggle={(_, meta) => meta?.originalEvent?.stopPropagation()}
            >
              <div className="solutions-megamenu-panel">
                <NavDropdown.Item
                  as={Link}
                  to="/solutions"
                  className="solutions-megamenu-all"
                  onClick={closeMobileNav}
                >
                  All Solutions
                </NavDropdown.Item>

                <div className="solutions-megamenu-grid">
                  {solutionCategories.map((category) => (
                    <div key={category} className="solutions-megamenu-column">
                      <p className="solutions-megamenu-title">{category}</p>
                      <ul className="solutions-megamenu-list">
                        {solutions
                          .filter((item) => item.category === category)
                          .map((solution) => (
                            <li key={solution.slug}>
                              <Link
                                to={`/${solution.slug}`}
                                className="solutions-megamenu-link"
                                onClick={closeMobileNav}
                              >
                                {solution.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </NavDropdown>
            <Nav.Link as={Link} to="/tracking" onClick={closeMobileNav}>
              Tracking
            </Nav.Link>
            <Nav.Link as={Link} to="/our-clients" onClick={closeMobileNav}>
              Our Clients
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" onClick={closeMobileNav}>
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={closeMobileNav}>
              Contact Us
            </Nav.Link>
            {/* <NavDropdown
              title="Login"
              id="login-dropdown"
              className="custom-dropdown"
              onToggle={(_, meta) => meta?.originalEvent?.stopPropagation()}
            >
              <NavDropdown.Item as={Link} to="https://admin.hariomexpress.com" target="_blank" onClick={closeMobileNav}>
                Admin Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://online.hariomexpress.com" target="_blank" onClick={closeMobileNav}>
                Customer Login
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

          {/* Right Buttons */}
          <div className="d-flex align-items-center gap-3 flex-column flex-lg-row mt-3 mt-lg-0">
            <Button
              as="a"
              href="https://wa.me/919321656547"
              target="_blank"
              rel="noreferrer"
              variant="light"
              className="rounded-pill px-4 py-2 whatsapp-btn text-success"
            >
              <i className="fa-brands fa-whatsapp me-2"></i>
              +91 93216 56547
            </Button>
            <Button
              as="a"
              href="https://admin.hariomexpress.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-pill px-4 py-2 login-btn text-white"
            >
              <i className="fa-solid fa-user me-2"></i>
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
