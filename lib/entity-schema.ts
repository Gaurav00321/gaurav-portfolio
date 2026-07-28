import { siteConfig } from "@/app/metadata"

/** Stable entity IDs — reuse verbatim on every page and blog post (ARD §5). */
export const PERSON_ID = `${siteConfig.url}/#person`
export const WEBSITE_ID = `${siteConfig.url}/#website`
export const AMTOP_ORG_ID = "https://amtop.in/#organization"
export const THINKFLOW_ORG_ID = "https://thinkflowgpt.vercel.app/#organization"

/** Canonical one-line title — use everywhere (ARD §10). */
export const CANONICAL_TITLE =
  "Co-Founder & Chief Scientist, amTop · Founder, ThinkFlowGPT"

/**
 * Site-wide Person / Organization / WebSite @graph.
 * Person.sameAs uses only verified current profiles (no legacy / Quora).
 */
export function getEntityGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Gaurav Upadhyay",
        givenName: "Gaurav",
        familyName: "Upadhyay",
        url: siteConfig.url,
        image: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#personImage`,
          url: siteConfig.photo,
          width: 800,
          height: 800,
          caption: `${siteConfig.name} — ${CANONICAL_TITLE}`,
        },
        jobTitle: ["Co-Founder & Chief Scientist", "Founder"],
        description: siteConfig.shortBio,
        email: siteConfig.email,
        worksFor: [{ "@id": AMTOP_ORG_ID }, { "@id": THINKFLOW_ORG_ID }],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Parul University",
        },
        homeLocation: {
          "@type": "Place",
          name: "Vadodara, Gujarat, India",
        },
        knowsAbout: [
          "Agentic AI",
          "AI Marketing Automation",
          "Workflow Automation",
          "Neural Networks",
          "Distributed Systems",
        ],
        sameAs: [
          siteConfig.links.linkedin,
          siteConfig.links.twitter,
          siteConfig.links.instagram,
          siteConfig.links.github,
          siteConfig.links.crunchbase,
        ],
      },
      {
        "@type": "Organization",
        "@id": AMTOP_ORG_ID,
        name: "amTop",
        url: "https://amtop.in",
        founder: { "@id": PERSON_ID },
        description:
          "Agentic-AI marketing automation platform for ads, SEO, and content.",
      },
      {
        "@type": "Organization",
        "@id": THINKFLOW_ORG_ID,
        name: "ThinkFlowGPT",
        url: "https://thinkflowgpt.vercel.app",
        founder: { "@id": PERSON_ID },
        description:
          "AI-driven workflow automation assistant for businesses and students.",
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: "Gaurav Upadhyay",
        publisher: { "@id": PERSON_ID },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        mainEntity: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#entity-heading", "#hero-heading"],
        },
        primaryImageOfPage: { "@id": `${siteConfig.url}/#personImage` },
      },
    ],
  }
}
