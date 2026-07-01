import React from 'react'
import { Container, Button } from 'react-bootstrap'
import warehouseBg from '../assets/solutions/WAREHOUSING.jpg'

function WarehouseBanner() {
    const handleScrollToForm = (e) => {
        e.preventDefault();
        const element = document.getElementById('warehouse-quote-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const firstInput = document.getElementById('form-name');
            if (firstInput) firstInput.focus();
        }
    }

    return (
        <section className="home-banner home-banner-2">
            {/* Background Image instead of Video */}
            <img
                className="home-banner-video"
                src={warehouseBg}
                alt="Warehouse Logistics Background"
                aria-hidden="true"
                style={{ objectPosition: 'center 35%' }}
            />

            <Container>
                <div className="banner-wrapper">
                    <div className="row align-items-center g-0 g-md-5">
                        {/* Left Side Content */}
                        <div className="col-lg-7">
                            <h1 className="fw-bold display-6 mb-3 text-uppercase text-white text-start">
                                Reliable Warehousing Solutions That Scale With Your Business
                            </h1>
                            
                            <p className="fs-5 mb-4 text-white text-start">
                                Secure storage, inventory management, distribution and fulfillment solutions across India. Boost supply chain efficiency with India's trusted 3PL partner.
                            </p>

                            {/* Bullets using project's existing feature classes */}
                            <div className="row g-4 banner-features mb-5">
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0 text-white">
                                                E-Commerce Brands
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0 text-white">
                                                Manufacturing
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0 text-white">
                                                FMCG & Retail
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0 text-white">
                                                Industrial Goods
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="d-flex gap-2 gap-lg-3 flex-wrap justify-content-start mt-4 mb-5 mb-lg-0">
                                <Button
                                    onClick={handleScrollToForm}
                                    className="theme-dark-btn px-3 px-md-4 py-3 py-md-3"
                                >
                                    GET QUOTE<i className="fa-solid fa-angles-right ms-2"></i>
                                </Button>
                                <Button
                                    as="a"
                                    href="tel:+919321656547"
                                    className="theme-light-btn px-3 px-md-4 py-3 py-md-3"
                                >
                                    CALL NOW<i className="fa-solid fa-phone ms-2"></i>
                                </Button>
                            </div>
                        </div>

                        {/* Right Side Form Card */}
                        <div className="col-lg-5 col-md-12">
                            <div className="card">
                                <h4 className="mb-4 text-center text-white fw-bold">GET YOUR WAREHOUSE QUOTE</h4>
                                <form id="warehouse-quote-form" className="track-form" action="thankyou.html" method="GET">
                                    
                                    <input 
                                        type="text" 
                                        id="form-name" 
                                        name="name" 
                                        className="form-control" 
                                        placeholder="Full Name*" 
                                        required 
                                    />
                                    
                                    <input 
                                        type="tel" 
                                        id="form-phone" 
                                        name="phone" 
                                        className="form-control" 
                                        placeholder="Phone Number*" 
                                        required 
                                    />
                                    
                                    <input 
                                        type="email" 
                                        id="form-email" 
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Email Address*" 
                                        required 
                                    />
                                    
                                    <select 
                                        id="form-storage" 
                                        name="storage" 
                                        className="form-control" 
                                        required 
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Storage Requirement*</option>
                                        <option value="Less than 1,000 sq. ft.">Less than 1,000 sq. ft.</option>
                                        <option value="1,000 - 5,000 sq. ft.">1,000 - 5,000 sq. ft.</option>
                                        <option value="5,000 - 10,000 sq. ft.">5,000 - 10,000 sq. ft.</option>
                                        <option value="10,000+ sq. ft.">10,000+ sq. ft.</option>
                                        <option value="Not Sure / Customized">Not Sure / Customized</option>
                                    </select>
                                    
                                    <select 
                                        id="form-volume" 
                                        name="volume" 
                                        className="form-control" 
                                        required 
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Monthly Volume (Approx.)*</option>
                                        <option value="Less than 500 orders">Less than 500 orders</option>
                                        <option value="500 - 2,000 orders">500 - 2,000 orders</option>
                                        <option value="2,000 - 5,000 orders">2,000 - 5,000 orders</option>
                                        <option value="5,000+ orders">5,000+ orders</option>
                                        <option value="B2B Palletized Storage Only">B2B Palletized Storage Only</option>
                                    </select>
                                    
                                    <textarea 
                                        id="form-message" 
                                        name="message" 
                                        className="form-control" 
                                        placeholder="Tell us about your requirement..."
                                        style={{ height: 'auto', minHeight: '80px' }}
                                    ></textarea>
                                    
                                    <Button 
                                        type="submit" 
                                        className="theme-light-btn px-3 px-md-4 py-3 py-md-3 w-100"
                                    >
                                        REQUEST QUOTE<i className="fa-solid fa-angles-right ms-2"></i>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WarehouseBanner
