const BRAND = 'HariOm Express Logistics Solutions'

export const PAGE_SEO = {
  home: {
    title: `${BRAND} | Nationwide Logistics, Courier & Supply Chain`,
    description:
      'HariOm Express delivers FTL, PTL, LTL, air cargo, warehousing, 3PL, 4PL, and specialized logistics across India with 33,000+ pin codes and 10+ Years of Experience.',
    keywords:
      'HariOm Express, logistics solutions, courier services, FTL, PTL, LTL, air cargo, warehousing, 3PL, 4PL, supply chain India',
  },
  about: {
    title: `About Us | ${BRAND}`,
    description:
      'Learn how HariOm Express helps businesses ship nationwide from Mumbai with reliable logistics, supply chain management, and customer-focused service since 2016.',
    keywords:
      'about HariOm Express, logistics company Mumbai, supply chain partner India, courier and cargo services',
  },
  solutions: {
    title: `Logistics Solutions | ${BRAND}`,
    description:
      'Explore HariOm Express logistics solutions — truckload, express courier, air cargo, reverse pickup, warehousing, 3PL, 4PL, and last-mile delivery across India.',
    keywords:
      'logistics solutions, FTL PTL LTL, express logistics, air cargo, reverse pickup, warehousing, 3PL, 4PL, HariOm Express',
  },
  tracking: {
    title: `Track Your Shipment | ${BRAND}`,
    description:
      'Track your HariOm Express shipment in real time. Enter your AWB, forwarding, or reference number to view delivery status and updates.',
    keywords:
      'shipment tracking, AWB tracking, courier tracking, HariOm Express tracking, logistics status',
  },
  clients: {
    title: `Our Clients | ${BRAND}`,
    description:
      'See the businesses across India that trust HariOm Express for secure shipping, real-time tracking, and dependable logistics solutions.',
    keywords:
      'HariOm Express clients, trusted logistics partner, corporate courier India, business shipping',
  },
  contact: {
    title: `Contact Us | ${BRAND}`,
    description:
      'Contact HariOm Express for shipping quotes, pickup bookings, and logistics support. Reach our team in Thane, Mumbai for fast assistance.',
    keywords:
      'contact HariOm Express, logistics quote, courier booking, Thane Mumbai logistics',
  },
  blogs: {
    title: `Blogs & Insights | ${BRAND}`,
    description:
      'Read the latest logistics insights, supply chain tips, and industry updates from HariOm Express experts.',
    keywords:
      'logistics blog, supply chain insights, freight transportation tips, HariOm Express blog',
  },
  privacy: {
    title: `Privacy Policy | ${BRAND}`,
    description:
      'How HariOm Express collects, uses, and protects your personal information when you use our website and services.',
    keywords:
      'privacy policy, HariOm Express data protection, personal information',
  },
  terms: {
    title: `Terms and Conditions | ${BRAND}`,
    description:
      'Terms of Service governing your use of the HariOm Express website, tools, and logistics services.',
    keywords:
      'terms and conditions, HariOm Express terms of service, website terms',
  },
  refund: {
    title: `Refund Policy | ${BRAND}`,
    description:
      'Information about refunds for HariOm Express logistics and courier services.',
    keywords:
      'refund policy, HariOm Express refunds, service refund',
  },
  shipping: {
    title: `Shipping Policy | ${BRAND}`,
    description:
      'Shipping policy for HariOm Express courier, cargo, and logistics services across India.',
    keywords:
      'shipping policy, HariOm Express delivery terms, courier shipping',
  },
}

const SOLUTION_SEO = {
  'elevator-industry': {
    keywords:
      'elevator logistics, elevator component transportation, project site delivery, HariOm Express',
  },
  'it-equipment': {
    keywords:
      'IT equipment logistics, technology transportation, server shipping, HariOm Express',
  },
  'rain-packing': {
    keywords:
      'rain packing, monsoon logistics, moisture protection, cargo packaging, HariOm Express',
  },
  'critical-shipment-handling': {
    keywords:
      'critical shipment handling, urgent logistics, time-sensitive delivery, HariOm Express',
  },
  'full-truck-load-ftl': {
    keywords:
      'full truck load, FTL transportation, dedicated truck freight, HariOm Express',
  },
  'part-truck-load-ptl': {
    keywords:
      'part truck load, PTL transportation, shared truck freight, HariOm Express',
  },
  'less-than-truck-load-ltl': {
    keywords:
      'less than truck load, LTL transportation, small freight shipping, HariOm Express',
  },
  'same-day-delivery': {
    keywords:
      'same day delivery, urgent courier, express delivery India, HariOm Express',
  },
  'reverse-pickup': {
    keywords:
      'reverse pickup, reverse logistics, return collection, HariOm Express',
  },
  'express-logistics': {
    keywords:
      'express logistics, priority shipping, fast delivery, HariOm Express',
  },
  'domestic-courier': {
    keywords:
      'domestic courier, parcel delivery India, document courier, HariOm Express',
  },
  'international-courier': {
    keywords:
      'international courier, global parcel shipping, document courier India, HariOm Express',
  },
  'b2c-courier': {
    keywords:
      'B2C courier, last mile delivery, e-commerce distribution, HariOm Express',
  },
  'c2c-courier': {
    keywords:
      'C2C courier, personal parcel shipping, consumer courier India, HariOm Express',
  },
  'warehousing-fulfillment': {
    keywords:
      'warehousing, fulfillment services, inventory management, HariOm Express',
  },
  'third-party-logistics': {
    keywords:
      '3PL, third party logistics, outsourced supply chain, HariOm Express',
  },
  'fourth-party-logistics': {
    keywords:
      '4PL, fourth party logistics, supply chain management, HariOm Express',
  },
  'fifth-party-logistics': {
    keywords:
      '5PL, fifth party logistics, supply chain coordination, technology logistics, HariOm Express',
  },
}

const BLOG_KEYWORDS = {
  'ftl-vs-ptl-vs-ltl':
    'FTL vs PTL vs LTL, truck load comparison, freight transportation, supply chain, HariOm Express',
  'what-is-3pl':
    '3PL logistics, third party logistics, supply chain outsourcing, HariOm Express',
  'elevator-logistics':
    'elevator logistics, elevator transportation, project freight, HariOm Express',
  'air-cargo-time-sensitive':
    'air cargo, time-sensitive shipments, express freight, HariOm Express',
  'warehousing-supply-chain':
    'warehousing, supply chain management, inventory fulfillment, HariOm Express',
  'understanding-4pl':
    '4PL logistics, fourth party logistics, supply chain control, HariOm Express',
  'critical-shipment-handling':
    'critical shipments, urgent logistics, business continuity, HariOm Express',
  'it-equipment-transportation':
    'IT equipment transport, technology logistics, secure shipping, HariOm Express',
  'monsoon-rain-packing':
    'rain packing, monsoon logistics, cargo protection, HariOm Express',
  'reliable-logistics-supply-chain':
    'reliable logistics, supply chain delays, freight efficiency, HariOm Express',
}

export function getSolutionSeo(solution) {
  const extra = SOLUTION_SEO[solution.slug] || {}
  return {
    title: `${solution.bannerTitle} | ${BRAND}`,
    description: solution.bannerText,
    keywords: extra.keywords || `${solution.title}, logistics, HariOm Express`,
  }
}

export function getBlogSeo(post) {
  return {
    title: `${post.metaTitle || post.title} | ${BRAND}`,
    description: post.metaDescription || post.text,
    keywords:
      post.metaKeywords ||
      BLOG_KEYWORDS[post.slug] ||
      `${post.category}, logistics, HariOm Express`,
  }
}

export function getPolicySeo(policy, slug) {
  const key = slug.replace(/-/g, '').replace('policy', '').replace('andconditions', 'terms')
  const routeKey =
    slug === 'privacy-policy'
      ? 'privacy'
      : slug === 'terms-and-conditions'
        ? 'terms'
        : slug === 'refund-policy'
          ? 'refund'
          : slug === 'shipping-policy'
            ? 'shipping'
            : key

  const pageSeo = PAGE_SEO[routeKey]
  if (pageSeo) {
    return pageSeo
  }

  return {
    title: `${policy.title} | ${BRAND}`,
    description: policy.bannerText,
    keywords: `${policy.title}, HariOm Express`,
  }
}
