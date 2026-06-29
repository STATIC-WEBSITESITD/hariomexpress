const API_BASE =
  'https://admin.hariomexpress.com/api/tracking_api/get_tracking_data'

const API_QUERY =
  'customer_code=superadmin&company=hariom-express-logistics-solution&api_company_id=5'

export function formatDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return ' '
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  return `${day}/${monthIndex + 1}/${year}`
}

export function getSearchTypeParam(searchSelected) {
  if (searchSelected === '1' || searchSelected === 1) return 'tracking_no'
  if (searchSelected === '6' || searchSelected === 6) return 'forwarding_no1'
  if (searchSelected === '2' || searchSelected === 2) return 'reference_no'
  return 'tracking_no'
}

export function normalizeTrackingInput(raw) {
  if (!raw) return []
  const trimmed = raw.trim().split(/\s+/).join(',')
  return trimmed.split(',').map((n) => n.trim()).filter(Boolean)
}

export function buildTrackingApiUrl(searchSelected, trackingNo) {
  const searchtype = getSearchTypeParam(searchSelected)
  const normalized = normalizeTrackingInput(trackingNo).join(',')
  return `${API_BASE}?${searchtype}=${encodeURIComponent(normalized)}&${API_QUERY}`
}

export function getDocketLabel(docket, searchSelected) {
  const by = String(searchSelected)
  if (by === '1') return `AWB: ${docket.tracking_no}`
  if (by === '2') return `Reference: ${docket.reference_no}`
  if (by === '3') return `Order: ${docket.order_no}`
  if (by === '4') return `Eway Bill: ${docket.eway_bill_no}`
  if (by === '5') return `Invoice: ${docket.invoice_no}`
  if (by === '6') return `Forwarding : ${docket.forwarding_no}`
  return `Forwarding 2: ${docket.forwarding_no2}`
}

export function formatDeliveryDate(value) {
  const d = new Date(value)
  if (Number.isNaN(d.getTime()) || value === 'undefined') return ' '
  return formatDate(d)
}

export function formatEventTime(eventAt) {
  if (!eventAt) return ' '
  const parts = eventAt.split(' ')
  return parts[1] ? parts[1].slice(0, 5) : ' '
}

export async function fetchTrackingData(searchSelected, trackingNo) {
  const url = buildTrackingApiUrl(searchSelected, trackingNo)
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch tracking data')
  return res.json()
}
