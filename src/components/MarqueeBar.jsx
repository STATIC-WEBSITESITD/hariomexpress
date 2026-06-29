import React from 'react'

import allcargoLogo from '../assets/partners/allcargo.png'
import movinLogo from '../assets/partners/movin.svg'
import bluedartLogo from '../assets/partners/bluedart.jpg'
import dhlLogo from '../assets/partners/dhl.svg'
import delhiveryLogo from '../assets/partners/delhivery.svg'

const partners = [
  { name: 'Allcargo', slug: 'allcargo', logo: allcargoLogo },
  { name: 'Movin', slug: 'movin', logo: movinLogo },
  { name: 'Blue Dart', slug: 'bluedart', logo: bluedartLogo },
  { name: 'DHL', slug: 'dhl', logo: dhlLogo },
  { name: 'Delhivery', slug: 'delhivery', logo: delhiveryLogo },
]

function PartnerLogos({ items, keyPrefix = '' }) {
  return items.map((partner) => (
    <div
      className={`marquee-partner${partner.slug === 'movin' ? ' marquee-partner--movin' : ''}`}
      key={`${keyPrefix}${partner.name}`}
    >
      <img src={partner.logo} alt={partner.name} loading="lazy" />
    </div>
  ))
}

function MarqueeBar() {
  return (
    <section className="marquee-section" aria-label="Our partners">
      <div className="marquee-section-inner">
        <p className="marquee-label">Our Partners</p>

        <div className="marquee-wrapper">
          <div className="marquee-content">
            <PartnerLogos items={partners} keyPrefix="a-" />
            <PartnerLogos items={partners} keyPrefix="b-" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarqueeBar
