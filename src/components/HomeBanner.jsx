import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import courierBoy from '../assets/delivery-boy.webp'
import bannerVideo from '../assets/banner.mp4'

function HomeBanner() {
    const navigate = useNavigate()

    const handleTrackSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const params = new URLSearchParams()
        params.set('searchSelected', formData.get('searchSelected'))
        params.set('tracking_no', formData.get('tracking_no').trim())
        navigate(`/tracking?${params.toString()}`)
    }

    return (
        <section className="home-banner home-banner-2">
            <video
                className="home-banner-video"
                src={bannerVideo}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
            />
            <Container>
                <div className="banner-wrapper">
                    <div className="row align-items-end g-0 g-md-5">
                        <div className="col-lg-7">
                            <h1 className="fw-bold display-6 mb-3 text-uppercase">
                                Logistics Solutions Designed for Business Continuity
                            </h1>
                            <p className="fs-5 mb-4">
                                Specializing in Elevator Industry Logistics, IT Equipment Transportation, Critical Shipments, Air Cargo, Warehousing, and Supply Chain Solutions that help businesses move faster, operate smarter, and deliver with confidence.
                            </p>
                            <div className="row g-4 banner-features mb-5">
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0">
                                                20+ Years of Experience
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0">
                                                33,000+ Pin Codes Covered
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0">
                                                PAN India Network
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-2 gap-lg-3 flex-wrap justify-content-center justify-content-md-start mb-5">
                                <Button
                                    as={Link}
                                    to="/contact-us"
                                    className="theme-dark-btn px-3 px-md-4 py-3 py-md-3"
                                >
                                    Contact Us<i className="fa-solid fa-angles-right ms-2"></i>
                                </Button>
                                <Button
                                    as={Link}
                                    to="/tracking"
                                    className="theme-light-btn px-3 px-md-4 py-3 py-md-3"
                                >
                                    Track Your Shipment<i className="fa-solid fa-angles-right ms-2"></i>
                                </Button>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="card">
                                <h4 className="mb-4 text-center text-white">Track Your Shipment</h4>
                                <form className="track-form" onSubmit={handleTrackSubmit}>
                                    <select name="searchSelected" id="searchSelected" className="form-control" required>
                                        <option value="1">AWB No.</option>
                                        <option value="6">Forwarding No.</option>
                                        <option value="2">Reference No.</option>
                                    </select>
                                    <input type="text" name="tracking_no" className="form-control" placeholder="Enter tracking number…" required />
                                    <Button type='submit' className="theme-light-btn px-3 px-md-4 py-3 py-md-3 w-100">
                                        Track Now<i className="fa-solid fa-magnifying-glass ms-2"></i>
                                    </Button>
                                </form>
                                <hr className="my-4 border-white" />
                                <p className="mb-4">Your AWB (tracking) number is shared on email and WhatsApp after your shipment is booked. Separate multiple numbers with commas.</p>
                            </div>
                            {/* <div className="courier-boy-box">
                                <img
                                    src={courierBoy}
                                    alt="HariOm Express delivery partner"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HomeBanner
