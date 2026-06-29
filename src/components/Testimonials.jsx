import React from 'react'
import { Container } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

function Testimonials() {

  const testimonials = [
    {
      text:
        'Best service. Very polite and well-mannered staff. All shifting was carried out smoothly.',
      name: 'Stephan Seigieth'
    },
    {
      text:
        'It has been meticulously crafted to cause as little disruption as possible while providing the greatest possible return on investment.',
      name: 'Rahul Mahto'
    },
    {
      text:
        'One of the best companies with the fastest delivery across Pan India at reasonable rates.',
      name: 'Akhil Patnayak'
    },
    {
      text:
        'Excellent service for both domestic and international locations.',
      name: 'Rakesh Panigarhi'
    },
    {
      text:
        'Best domestic cargo and courier service. Appreciated for their delivery services and professional work.',
      name: 'Papercraft'
    }
  ]

  return (
    <section className="testimonial-section section-padding">
      <Container>

        {/* Heading */}
        <div className="section-header text-center">

          <h6 className="section-subtitle">
            Testimonials
          </h6>

          <h2 className="section-title">
            What Our Clients Say
          </h2>

          <p className="section-para">
            Trusted by customers for reliable,
            fast, and professional shipping services.
          </p>

        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}

          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3
            }
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="testimonial-card h-100">

                <div className="quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>

                <p className="testimonial-text">
                  {item.text}
                </p>

                <h5 className="testimonial-name">
                  {item.name}
                </h5>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </Container>
    </section>
  )
}

export default Testimonials