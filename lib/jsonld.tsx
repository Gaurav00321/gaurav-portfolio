import { siteConfig } from "@/app/metadata"

type JsonLd = Record<string, unknown>

export function personId() {
  return `${siteConfig.url}/#person`
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  }
}

export function webPageJsonLd(opts: {
  path: string
  name: string
  description: string
  type?: string
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${siteConfig.url}${opts.path}#webpage`,
    url: `${siteConfig.url}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": personId() },
    author: { "@id": personId() },
    inLanguage: "en",
  }
}

export function faqPageJsonLd(
  faqs: readonly { question: string; answer: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function collectionPageJsonLd(opts: {
  path: string
  name: string
  description: string
  items: { name: string; url: string; description: string }[]
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}${opts.path}#webpage`,
    url: `${siteConfig.url}${opts.path}`,
    name: opts.name,
    description: opts.description,
    about: { "@id": personId() },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
        description: item.description,
      })),
    },
  }
}

export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  )
}
