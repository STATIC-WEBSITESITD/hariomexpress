import fs from 'fs'

const parsed = JSON.parse(
  fs.readFileSync(new URL('../src/data/blogs-parsed.json', import.meta.url), 'utf8'),
)

const meta = {
  'ftl-vs-ptl-vs-ltl': {
    category: 'Transportation',
    date: '8 Jun 2026',
    title: 'FTL vs PTL vs LTL: Understanding the Right Transportation',
    text:
      'Confused between FTL, PTL, and LTL transportation? Learn the differences, benefits, costs, and ideal use cases of each logistics solution to optimize your supply chain and transportation expenses.',
    keywords:
      'FTL vs PTL vs LTL, truck load comparison, freight transportation, supply chain, HariOm Express',
    image: 'fullTruckLoad',
  },
  'what-is-3pl': {
    category: '3PL Logistics',
    date: '8 Jun 2026',
    title: 'What Is 3PL? Benefits of Third-Party Logistics for Businesses',
    text:
      'Learn what 3PL means, how third-party logistics works, and how businesses can reduce costs, improve efficiency, and streamline supply chain operations.',
    keywords:
      '3PL logistics, third party logistics, supply chain outsourcing, HariOm Express',
    image: 'thirdPartyLogistics',
  },
  'elevator-logistics': {
    category: 'Elevator Logistics',
    date: '8 Jun 2026',
    title: 'Elevator Logistics: Challenges & Transportation Solutions',
    text:
      'Discover the unique challenges of elevator logistics and why specialized transportation, handling, warehousing, and project coordination are critical for successful elevator installations and maintenance projects.',
    keywords:
      'elevator logistics, elevator transportation, project freight, HariOm Express',
    image: 'elevatorIndustry',
  },
  'air-cargo-time-sensitive': {
    category: 'Air Cargo',
    date: '8 Jun 2026',
    title: 'Why Air Cargo Is Essential for Time-Sensitive Shipments',
    text:
      'Discover how air cargo services help businesses reduce transit times, handle urgent shipments, prevent delays, and maintain supply chain continuity.',
    keywords:
      'air cargo, time-sensitive shipments, express freight, HariOm Express',
    image: 'domesticInternational',
  },
  'warehousing-supply-chain': {
    category: 'Warehousing',
    date: '8 Jun 2026',
    title: 'Why Warehousing Is Critical for Modern Supply Chain Success',
    text:
      'Discover how warehousing improves inventory management, order fulfillment, distribution efficiency, and supply chain performance for modern businesses.',
    keywords:
      'warehousing, supply chain management, inventory fulfillment, HariOm Express',
    image: 'warehousing',
  },
  'understanding-4pl': {
    category: '4PL Logistics',
    date: '8 Jun 2026',
    title: 'What Is 4PL? Understanding Modern Supply Chain Management',
    text:
      'Learn what 4PL logistics is, how it differs from 3PL, and why businesses are using fourth-party logistics to improve supply chain visibility, control, and efficiency.',
    keywords:
      '4PL logistics, fourth party logistics, supply chain control, HariOm Express',
    image: 'fourthPartyLogistics',
  },
  'critical-shipment-handling': {
    category: 'Critical Shipments',
    date: '8 Jun 2026',
    title: 'How Critical Shipment Handling Prevents Business Downtime',
    text:
      'Learn why critical shipment handling is essential for business continuity, preventing operational disruptions, reducing downtime, and ensuring urgent deliveries reach on time.',
    keywords:
      'critical shipments, urgent logistics, business continuity, HariOm Express',
    image: 'criticalShipmentHandling',
  },
  'it-equipment-transportation': {
    category: 'IT Logistics',
    date: '8 Jun 2026',
    title: 'Safe Transportation of IT Equipment: Best Practices Guide',
    text:
      'Learn the best practices for transporting IT equipment safely. Discover how businesses can reduce risks, prevent damage, and ensure secure technology logistics.',
    keywords:
      'IT equipment transport, technology logistics, secure shipping, HariOm Express',
    image: 'itIndustry',
  },
  'monsoon-rain-packing': {
    category: 'Monsoon Logistics',
    date: '8 Jun 2026',
    title: 'How Rain Packing Protects Shipments During Monsoon Logistics',
    text:
      'Learn why rain packing is essential during monsoon transportation and how businesses can protect valuable cargo from moisture, water damage, and transit risks.',
    keywords:
      'rain packing, monsoon logistics, cargo protection, HariOm Express',
    image: 'rainPackaging',
  },
  'reliable-logistics-supply-chain': {
    category: 'Supply Chain',
    date: '8 Jun 2026',
    title: 'How Reliable Logistics Reduces Supply Chain Delays',
    text:
      'Discover how reliable logistics services help businesses reduce delays, improve supply chain efficiency, enhance customer satisfaction, and maintain operational continuity.',
    keywords:
      'reliable logistics, supply chain delays, freight efficiency, HariOm Express',
    image: 'expressLogistics',
  },
}

const posts = parsed.map((p) => ({
  slug: p.slug,
  ...meta[p.slug],
  metaTitle: p.metaTitle,
  metaDescription: p.metaDescription,
  metaKeywords: meta[p.slug]?.keywords,
  bannerTitle: p.bannerTitle,
  bannerText: p.bannerText,
  sections: p.sections,
}))

const imports = `import elevatorIndustry from '../assets/solutions/ELEVATOR.jpg'
import itIndustry from '../assets/solutions/IT INDUSTRY.jpg'
import rainPackaging from '../assets/solutions/RAIN PACKAGING.jpg'
import criticalShipmentHandling from '../assets/solutions/8.jpg'
import fullTruckLoad from '../assets/solutions/FULL TRUCK LOAD.jpg'
import expressLogistics from '../assets/solutions/EXPRESS LOGISTICS.jpg'
import domesticInternational from '../assets/solutions/DOMESTIC INTERNATIONAL.jpg'
import warehousing from '../assets/solutions/WAREHOUSING.jpg'
import thirdPartyLogistics from '../assets/solutions/3PL.jpg'
import fourthPartyLogistics from '../assets/solutions/4PL.jpg'

const images = {
  elevatorIndustry,
  itIndustry,
  rainPackaging,
  criticalShipmentHandling,
  fullTruckLoad,
  expressLogistics,
  domesticInternational,
  warehousing,
  thirdPartyLogistics,
  fourthPartyLogistics,
}
`

const postsWithImages = posts.map(({ image, ...rest }) => ({
  ...rest,
  imageKey: image,
}))

const body = `export const BLOG_POSTS = ${JSON.stringify(postsWithImages, null, 2).replace(
  /"imageKey": "(\w+)"/g,
  (_, key) => `"image": images.${key}`,
)}

export function getBlogBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
`

fs.writeFileSync(
  new URL('../src/data/blogs.js', import.meta.url),
  imports + '\n' + body,
)
console.log('wrote blogs.js with', posts.length, 'posts')
