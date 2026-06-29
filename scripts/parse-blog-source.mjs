import fs from 'fs'

const raw = fs.readFileSync(new URL('./blog-source.txt', import.meta.url), 'utf8')
const content = raw.trim()

const SLUGS = [
  'ftl-vs-ptl-vs-ltl',
  'what-is-3pl',
  'elevator-logistics',
  'air-cargo-time-sensitive',
  'warehousing-supply-chain',
  'understanding-4pl',
  'critical-shipment-handling',
  'it-equipment-transportation',
  'monsoon-rain-packing',
  'reliable-logistics-supply-chain',
]

function splitBlogs(text) {
  const lines = text.split('\n')
  const blocks = []
  let start = 0

  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i + 1]?.trim() === 'Meta Title' && lines[i]?.trim()) {
      if (i > start) blocks.push(lines.slice(start, i).join('\n'))
      start = i
    }
  }
  blocks.push(lines.slice(start).join('\n'))
  return blocks.filter((b) => b.trim())
}

function looksLikeProse(line) {
  if (!line) return false
  const wordCount = line.split(/\s+/).length
  if (wordCount <= 8 && line.length <= 75) return false
  if (line.length > 95) return true
  if (wordCount >= 12) return true
  return /\b(the|and|that|which|because|while|when|where|however|whether|since|into|from|with|have|has|been|will|can|their|they|this|these|your|our|its|are|was|not|but|also|more|than|such|often|many|most|every|all|both|each|other|about|after|before|during|through|across|between|within|without)\b/i.test(
    line,
  ) && wordCount >= 8
}

function isMajorSectionHeading(line) {
  if (!line) return false
  if (line === 'Conclusion') return true
  if (line.startsWith('About HariOm Express')) return true
  if (/^(Need Help|Looking for|Need Support|Need Faster|Need Monsoon|Need a Trusted)/.test(line)) {
    return true
  }

  const patterns = [
    /^FTL vs PTL vs LTL:/,
    /^What Is 3PL and/,
    /^What Is 3PL\?/,
    /^Elevator Logistics:/,
    /^Why Air Cargo Is Essential/,
    /^The Growing Importance of Warehousing/,
    /^Understanding 4PL:/,
    /^How Critical Shipment Handling/,
    /^Safe Transportation of IT/,
    /^Monsoon Logistics:/,
    /^How Reliable Logistics Can/,
    /^Understanding the Basics/,
    /^Understanding Third-Party/,
    /^Understanding Elevator/,
    /^Understanding the Role/,
    /^Understanding Supply Chain/,
    /^Understanding Rain Packing/,
    /^Understanding 4PL/,
    /^Understanding potential/,
    /^Understanding why/,
    /^What Is Full Truck/,
    /^What Is Part Truck/,
    /^What Is Less Than/,
    /^What Is 3PL\?/,
    /^What Is Air Cargo/,
    /^What Is 4PL/,
    /^What Is Critical Shipment/,
    /^What Services Does/,
    /^What Makes Logistics/,
    /^Why Elevator Logistics/,
    /^Why Monsoon Logistics/,
    /^Why Businesses /,
    /^Why Some Shipments/,
    /^Why Speed Matters/,
    /^Why Warehousing Matters/,
    /^Why Rain Packing/,
    /^Why Many Businesses/,
    /^Why IT Equipment/,
    /^Why Delivery Timing/,
    /^Why Pre-Delivery/,
    /^Why Specialized/,
    /^Why Logistics Partnerships/,
    /^How Transportation Choices/,
    /^How to Choose the Right Transportation/,
    /^How to Choose the Right 3PL/,
    /^How to Choose the Right 4PL/,
    /^How to Choose the Right Air/,
    /^How to Choose the Right Warehousing/,
    /^How Critical Shipment Handling Reduces/,
    /^How Reliable Logistics Reduces/,
    /^How 3PL Improves/,
    /^How 4PL Works/,
    /^How Logistics Impacts/,
    /^When Should Businesses/,
    /^When Businesses Should Consider/,
    /^Key Features of /,
    /^Key Benefits of /,
    /^Key Functions of /,
    /^Key Warehousing Functions/,
    /^Key Technological/,
    /^Advantages of /,
    /^Benefits of /,
    /^Comparing FTL/,
    /^Comparing /,
    /^Common Mistakes /,
    /^Common Signs /,
    /^Common Risks /,
    /^Common Causes /,
    /^Common Types /,
    /^Common Warehousing /,
    /^The Future of /,
    /^The Growing Importance of Reverse/,
    /^The Role of /,
    /^The Importance of /,
    /^The Real Cost of /,
    /^The Cost of Delayed/,
    /^The Business Impact /,
    /^The Competitive Advantage /,
    /^The Evolution of /,
    /^Challenge #\d+/,
    /^Choosing the Right /,
    /^Industries That /,
    /^Signs Your /,
    /^Best Practices for /,
    /^Managing Nationwide/,
    /^Managing Spare Parts/,
    /^Managing Office/,
    /^Technology and Visibility/,
    /^Technology's Impact/,
    /^Domestic and International/,
    /^Domestic Air Cargo/,
    /^International Air Cargo/,
    /^Air Cargo vs /,
    /^3PL vs /,
    /^4PL vs /,
    /^Simple Comparison$/,
    /^First-Party Logistics/,
    /^Second-Party Logistics/,
    /^Third-Party Logistics/,
    /^Fourth-Party Logistics/,
    /^Strategic Warehousing/,
    /^Building a Resilient/,
    /^Reverse Logistics for/,
    /^Reverse Logistics$/,
    /^Office Relocations/,
    /^IT Equipment Logistics/,
    /^Warehousing Support/,
    /^Rain Packing$/,
    /^Protect Against/,
    /^Conduct a Detailed/,
    /^Use Appropriate/,
    /^Label Shipments/,
    /^Choose the Right Transportation Method/,
    /^Choose the Right Logistics Partner/,
    /^Choose the Right Air Cargo/,
    /^Choose the Right Warehousing/,
    /^Choose the Right 3PL/,
    /^Choose the Right 4PL/,
  ]

  return patterns.some((p) => p.test(line))
}

function isListIntro(line) {
  if (!line.endsWith(':')) return false
  return !isMajorSectionHeading(line)
}

function isListItem(line) {
  if (!line) return false
  if (isMajorSectionHeading(line)) return false
  if (isListIntro(line)) return false
  if (looksLikeProse(line)) return false
  return line.length <= 80
}

function afterIntroContentType(lines, index) {
  const current = lines[index]
  const next = lines[index + 1]
  if (!current) return 'prose'
  if (isListItem(current) && next && isListItem(next)) return 'list'
  if (isMinorLabel(current, next)) return 'labels'
  if (current.length < 50 && next?.endsWith('?')) return 'labels'
  return 'prose'
}

function isMinorLabel(line, next) {
  if (!line || !next) return false
  if (line.length > 55 || next.length < 15) return false
  if (isMajorSectionHeading(line) || isMajorSectionHeading(next)) return false
  if (looksLikeProse(line)) return false
  if (line.endsWith('?')) return false
  return true
}

function parseSectionContent(lines, start) {
  const paragraphs = []
  const list = []
  let i = start

  while (i < lines.length && !isMajorSectionHeading(lines[i])) {
    const line = lines[i]
    const next = lines[i + 1]

    if (isListIntro(line)) {
      paragraphs.push(line)
      i++
      const mode = afterIntroContentType(lines, i)
      if (mode === 'list') {
        while (i < lines.length && isListItem(lines[i])) {
          list.push(lines[i].replace(/\.$/, ''))
          i++
        }
      } else if (mode === 'labels') {
        while (
          i < lines.length &&
          (isMinorLabel(lines[i], lines[i + 1]) ||
            (lines[i].length < 50 && lines[i + 1]?.endsWith('?')))
        ) {
          paragraphs.push(`${lines[i]} — ${lines[i + 1]}`)
          i += 2
        }
      }
      continue
    }

    if (isMinorLabel(line, next)) {
      paragraphs.push(`${line} — ${next}`)
      i += 2
      continue
    }

    if (
      line.length < 55 &&
      !looksLikeProse(line) &&
      next &&
      looksLikeProse(next) &&
      !isMinorLabel(line, next)
    ) {
      paragraphs.push(line)
      i++
      while (
        i < lines.length &&
        !isMajorSectionHeading(lines[i]) &&
        !isListIntro(lines[i]) &&
        !isMinorLabel(lines[i], lines[i + 1]) &&
        (looksLikeProse(lines[i]) || (lines[i].length < 90 && !isListItem(lines[i])))
      ) {
        if (
          lines[i].length < 55 &&
          !looksLikeProse(lines[i]) &&
          lines[i + 1] &&
          isMinorLabel(lines[i], lines[i + 1])
        ) {
          break
        }
        paragraphs.push(lines[i])
        i++
      }
      continue
    }

    paragraphs.push(line)
    i++
  }

  const section = { paragraphs }
  if (list.length) section.list = list
  return { section, nextIndex: i }
}

function parseBlogBlock(block, slug) {
  const lines = block.split('\n').map((l) => l.trim())
  const title = lines[0]

  const metaTitleIdx = lines.indexOf('Meta Title')
  const metaDescriptionIdx = lines.indexOf('Meta Description')
  const metaTitle = lines[metaTitleIdx + 1] || title
  const metaDescription = lines[metaDescriptionIdx + 1] || ''

  const bodyStart = lines.findIndex((l, i) => i > metaDescriptionIdx && l === title)
  const bodyLines = lines.slice(bodyStart).filter((l) => l !== '')

  const sections = []
  let i = 0

  while (i < bodyLines.length) {
    const heading = bodyLines[i]
    i++
    const { section, nextIndex } = parseSectionContent(bodyLines, i)
    i = nextIndex
    sections.push({ title: heading, ...section })
  }

  return {
    slug,
    metaTitle,
    metaDescription,
    bannerTitle: title,
    bannerText: metaDescription || sections[0]?.paragraphs[0]?.slice(0, 160) || title,
    sections,
  }
}

const blocks = splitBlogs(content)
if (blocks.length !== SLUGS.length) {
  console.error(`Expected ${SLUGS.length} blogs, found ${blocks.length}`)
  process.exit(1)
}

const parsed = blocks.map((block, index) => parseBlogBlock(block, SLUGS[index]))

fs.writeFileSync(
  new URL('../src/data/blogs-parsed.json', import.meta.url),
  JSON.stringify(parsed, null, 2),
)

console.log(
  'parsed',
  parsed.length,
  'blogs — sections:',
  parsed.map((r) => r.sections.length).join(', '),
)
