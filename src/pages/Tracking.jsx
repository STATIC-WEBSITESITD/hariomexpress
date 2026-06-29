import React, { useEffect, useRef, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import { PAGE_SEO } from '../data/seo'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import TrackingAccordionItem from '../components/TrackingAccordion'
import {
  fetchTrackingData,
  normalizeTrackingInput,
} from '../utils/tracking'

function Tracking() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const resultRef = useRef(null)

  const urlSearchSelected = searchParams.get('searchSelected') || '1'
  const urlTrackingNo = searchParams.get('tracking_no') || ''

  const [searchSelected, setSearchSelected] = useState(urlSearchSelected)
  const [trackingNo, setTrackingNo] = useState(urlTrackingNo)
  const [dockets, setDockets] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    setSearchSelected(urlSearchSelected)
    setTrackingNo(urlTrackingNo)
  }, [urlSearchSelected, urlTrackingNo])

  useEffect(() => {
    if (!urlTrackingNo.trim()) {
      setShowResults(false)
      setDockets([])
      return
    }

    const numbers = normalizeTrackingInput(urlTrackingNo)
    if (numbers.length > 10) {
      alert('Up to 10 tracking numbers are allowed at a time')
      setDockets([])
      setShowResults(false)
      return
    }

    let cancelled = false
    setLoading(true)
    setShowResults(true)

    fetchTrackingData(urlSearchSelected, urlTrackingNo)
      .then((data) => {
        if (cancelled) return
        setDockets(Array.isArray(data) ? data : [])
        setActiveIndex(0)
      })
      .catch(() => {
        if (!cancelled) setDockets([])
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [urlSearchSelected, urlTrackingNo])

  useEffect(() => {
    if (!showResults || loading) return
    const timer = window.setTimeout(() => {
      const el = resultRef.current
      if (!el) return
      const header = document.querySelector('.custom-header')
      const offset =
        el.getBoundingClientRect().top +
        window.scrollY -
        (header?.offsetHeight ?? 80) -
        20
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }, 300)
    return () => window.clearTimeout(timer)
  }, [showResults, loading, dockets])

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    params.set('searchSelected', searchSelected)
    params.set('tracking_no', trackingNo.trim())
    navigate(`/tracking?${params.toString()}`)
  }

  const handleAccordionToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <>
      <PageMeta {...PAGE_SEO.tracking} />
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">HariOm Express</p>
          <h1 className="page-banner-title">Track Your Shipment</h1>
          <p className="page-banner-text">
            Enter your AWB, forwarding, or reference number to view real-time
            shipment status and delivery updates.
          </p>
        </Container>
      </section>

      <section className="tracking-page-section section-padding">
        <Container>
          <div className="track-form-card">
            <h3 className="track-form-title">Track Your Shipment</h3>
            <form
              className="track-form"
              action="/tracking"
              method="get"
              onSubmit={handleSubmit}
            >
              <select
                name="searchSelected"
                id="searchSelected"
                className="track-form-select"
                value={searchSelected}
                onChange={(e) => setSearchSelected(e.target.value)}
                required
              >
                <option value="1">AWB No.</option>
                <option value="6">Forwarding No.</option>
                <option value="2">Reference No.</option>
              </select>
              <input
                type="text"
                name="tracking_no"
                className="track-form-input"
                placeholder="Enter your tracking number..."
                value={trackingNo}
                onChange={(e) => setTrackingNo(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="theme-light-btn light_btn px-3 px-md-4 py-3 py-md-3"
              >
                Track Now
                <i className="fa-solid fa-magnifying-glass ms-2"></i>
              </Button>
            </form>
            <p className="track-form-hint small mt-4 mb-0">
              Your AWB (tracking) number is shared on email and WhatsApp after
              your shipment is booked. Separate multiple numbers with commas.
            </p>
          </div>

          <div
            ref={resultRef}
            className={`track-result track-block ${showResults ? 'is-visible' : ''}`}
          >
            {loading && (
              <p className="text-center text-muted py-4">Loading tracking data…</p>
            )}
            {!loading && showResults && dockets.length === 0 && (
              <p className="text-center text-muted py-4">
                No tracking records found for the number(s) entered.
              </p>
            )}
            <div className="tracking-data-accordion">
              {dockets.map((docket, index) => (
                <React.Fragment key={docket.tracking_no ?? index}>
                  <TrackingAccordionItem
                    docket={docket}
                    searchSelected={urlSearchSelected}
                    isActive={activeIndex === index}
                    onToggle={() => handleAccordionToggle(index)}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default Tracking
