import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

const prohibitedItems = [
  'Animal products such as skins, furs, horns (including Ivory and Ivory products).',
  'Goods of exceptional value such as works of art, antiques, precious metals or stones.',
  'Money or any items considered as negotiable items, e.g. credit or bankcards, stocks, and bonds.',
  'Dangerous or hazardous materials. These include items considered to be inflammable, explosive, corrosive, toxic, magnetic, radioactive, biohazards, pressurised containers etc.',
  'Live animals, e.g. cattle, sheep, pigs, chinchillas, ocelots or the Reticulated Python of South East Asia',
  'Perishable items',
  'Counterfeit or pirated goods or materials',
  'Narcotics; illegal drugs',
  'Human remains',
  'Pornography',
  'Dry ice',
  'Jewellery; including watches, rings, necklaces, pendants or brooches.',
  'Perfume and other, similar, alcohol based products.',
  'Passports (by special arrangement only)',
  'Weapons or items that may be construed as lethal. These include guns, knives, swords, daggers replicas or otherwise.',
]

function ProhibitedGoods() {
  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">HariOm Express</p>
          <h1 className="page-banner-title">Prohibited Goods</h1>
          <p className="page-banner-text">
            Items that cannot be booked through our usual courier services, and
            guidance on destination-specific restrictions.
          </p>
        </Container>
      </section>

      <section className="policy-page-section section-padding">
        <Container>
          <div className="policy-content">
            <p className="policy-intro mb-4">
              Although we can, generally, arrange to ship almost any commodity,
              many items are prohibited or restricted from our usual courier
              services (if your goods can be carried we can and will be quite
              happy to arrange for a carrier, on your behalf, through our list
              of Specialist Agents). The list below, though not exhaustive,
              shows the majority and type of goods that are not able to be
              booked for carriage through our usual services. Please read this
              carefully and if, when you are done, you remain unsure, please do
              not hesitate to contact our Customer Services Team to inquire
              further. It is far better to make sure that your goods are allowed
              to travel without special considerations than to have to suffer
              possible delays, confiscation or, possibly, the destruction of
              your shipment/s.
            </p>

            <ul className="policy-list">
              {prohibitedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="policy-intro mt-4 mb-0">
              Added to this list, there may also be restrictions placed on many
              other goods, depending on the destination country. For example, it
              is not advised to send alcohol to the majority of Muslim countries
              or to the U.S.A., as you will encounter problems. If you have any
              questions regarding possible restrictions or prohibitions, we
              would advise that you, either, contact our Customer Services Team
              or liaise with the proper Customs Authorities in the relevant
              country to ensure that your goods will be allowed entry.
            </p>

            <p className="policy-back mt-5 mb-0">
              If you require further assistance or have any questions our customer
              service team will be more than happy to help you.{' '}
              <Link to="/contact-us">Contact us</Link>.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default ProhibitedGoods
