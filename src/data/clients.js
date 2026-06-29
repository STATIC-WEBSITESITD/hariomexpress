const clientModules = import.meta.glob('../assets/clients/*.png', {
  eager: true,
  import: 'default',
})

export const clientCategories = [
  { id: 'elevators-mnc', title: 'Elevators MNC', from: 28, to: 32 },
  { id: 'elevators-india', title: 'Elevators India', from: 33, to: 44 },
  { id: 'elevators-supplier', title: 'Elevators Supplier', from: 45, to: 50 },
  { id: 'it-telecom', title: 'IT / Telecom', from: 51, to: 58 },
  { id: 'mfg-indust', title: 'Mfg. Indust.', from: 59, to: 60 },
  { id: 'cables', title: 'Cables', from: 61, to: 61 },
  { id: 'fmcg', title: 'FMCG', from: 62, to: 63 },
]

const allClientLogos = Object.entries(clientModules)
  .map(([path, src]) => {
    const id = path.match(/(\d+)\.png$/)?.[1] ?? path
    return { id, src, alt: `Client logo ${id}` }
  })
  .sort((a, b) => Number(a.id) - Number(b.id))

const logoById = Object.fromEntries(allClientLogos.map((logo) => [logo.id, logo]))

export const clientLogos = allClientLogos

export const groupedClientLogos = clientCategories.map((category) => ({
  ...category,
  clients: Array.from(
    { length: category.to - category.from + 1 },
    (_, index) => logoById[String(category.from + index)]
  ).filter(Boolean),
}))
