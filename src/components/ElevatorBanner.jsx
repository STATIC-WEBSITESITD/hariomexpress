import React from 'react'
import { Container, Button } from 'react-bootstrap'
import elevatorBg from '../assets/solutions/ELEVATOR.jpg'

function ElevatorBanner() {
    const handleScrollToForm = (e) => {
        e.preventDefault();
        const element = document.getElementById('elevator-quote-form');
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
                src={elevatorBg}
                alt="Elevator Logistics Background"
                aria-hidden="true"
                style={{ objectPosition: 'center 35%' }}
            />

            <Container>
                <div className="banner-wrapper">
                    <div className="row align-items-center g-0 g-md-5">
                        {/* Left Side Content */}
                        <div className="col-lg-7">
                            <h1 className="fw-bold display-6 mb-3 text-uppercase text-white text-start">
                                Safe, Precise & On-Time Elevator Logistics Solutions
                            </h1>
                            
                            <p className="fs-5 mb-4 text-white text-start">
                                End-to-end heavy transport, customized wooden crating, and just-in-time site delivery for elevators, escalators, and components across India.
                            </p>

                            {/* Bullets using project's existing feature classes */}
                            <div className="row g-4 banner-features mb-5">
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0 text-white">
                                                Elevator Manufacturers
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0 text-white">
                                                Real Estate Projects
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0 text-white">
                                                Metro & Infrastructure
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0 text-white">
                                                Industrial Contractors
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
                                <h4 className="mb-4 text-center text-white fw-bold">Request a Quote</h4>
                                <form id="elevator-quote-form" className="track-form" action="thankyou.html" method="GET">
                                    
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
                                        id="form-cargo" 
                                        name="cargo" 
                                        className="form-control" 
                                        required 
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Primary Cargo Type*</option>
                                        <option value="Complete Elevator Units">Complete Elevator Units</option>
                                        <option value="Escalators / Moving Walks">Escalators / Moving Walks</option>
                                        <option value="Motors & Heavy Machinery">Motors & Heavy Machinery</option>
                                        <option value="Cabin Panels & Glass">Cabin Panels & Glass</option>
                                        <option value="Guide Rails & Steel Frame">Guide Rails & Steel Frame</option>
                                    </select>
                                    
                                    <select 
                                        id="form-destination" 
                                        name="destination" 
                                        className="form-control" 
                                        required 
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Estimated Payload Weight*</option>
                                        <option value="Less than 2 Tons">Less than 2 Tons</option>
                                        <option value="2 - 5 Tons">2 - 5 Tons</option>
                                        <option value="5 - 10 Tons">5 - 10 Tons</option>
                                        <option value="10+ Tons">10+ Tons</option>
                                        <option value="Custom Project / Multiple Trucks">Custom Project / Multiple Trucks</option>
                                    </select>
                                    
                                    <textarea 
                                        id="form-message" 
                                        name="message" 
                                        className="form-control" 
                                        placeholder="Describe your transport requirement (Origin, Destination, Timeline)..."
                                        style={{ height: 'auto', minHeight: '100px' }}
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

export default ElevatorBanner
