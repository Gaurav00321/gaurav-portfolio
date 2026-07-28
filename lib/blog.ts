import { siteConfig } from "@/app/metadata"
import {
  PERSON_ID,
  AMTOP_ORG_ID,
  THINKFLOW_ORG_ID,
  WEBSITE_ID,
} from "@/lib/entity-schema"

export type BlogFaq = { question: string; answer: string }

export type BlogPostMeta = {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  keywords: string[]
  faqs: BlogFaq[]
  relatedSlugs: string[]
  fiveWs: {
    what: string
    who: string
    when: string
    where: string
    why: string
  }
}

/** Live posts only — add from blog-scheduled.ts one per week. */
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "who-is-gaurav-upadhyay-founder-chief-scientist",
    title:
      "Who Is Gaurav Upadhyay? Founder & Chief Scientist Behind amTop and ThinkFlowGPT",
    description:
      "Gaurav Upadhyay is Co-Founder & Chief Scientist at amTop and Founder of ThinkFlowGPT — building agentic AI for marketing automation and workflow systems.",
    datePublished: "2026-07-28",
    dateModified: "2026-07-28",
    keywords: [
      "gaurav upadhyay",
      "gaurav upadhyay founder",
      "gaurav upadhyay amtop",
      "gaurav upadhyay chief scientist",
      "chief scientist of amtop",
      "thinkflowgpt",
    ],
    relatedSlugs: [],
    fiveWs: {
      what: "A founder and AI engineer building agentic systems for marketing and business automation.",
      who: "Gaurav Upadhyay — Co-Founder & Chief Scientist at amTop; Founder of ThinkFlowGPT.",
      when: "Active 2024–present building products and research direction in India.",
      where: "Based in Vadodara, Gujarat; companies serving startups and students online.",
      why: "To make advanced marketing and workflow automation accessible without constant human oversight.",
    },
    faqs: [
      {
        question: "Who is Gaurav Upadhyay?",
        answer:
          "Gaurav Upadhyay is Co-Founder & Chief Scientist at amTop and Founder of ThinkFlowGPT. He builds agentic AI for marketing automation and intelligent business workflows, and is pursuing an Integrated Master's in AI at Parul University.",
      },
      {
        question: "What is amTop?",
        answer:
          "amTop is an agentic-AI marketing automation platform focused on ads, SEO, and content — systems designed to plan, execute, and optimize campaigns with far less manual work.",
      },
      {
        question: "What is ThinkFlowGPT?",
        answer:
          "ThinkFlowGPT is an AI-driven workflow automation assistant founded by Gaurav Upadhyay for businesses and students who need intelligent, self-operating processes.",
      },
      {
        question: "How can I contact Gaurav Upadhyay?",
        answer: `Use the contact form at ${siteConfig.url}/contact, email ${siteConfig.email}, or connect on LinkedIn at ${siteConfig.links.linkedin}.`,
      },
    ],
  },
]

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string) {
  const post = getPost(slug)
  if (!post) return []
  return post.relatedSlugs
    .map((s) => getPost(s))
    .filter(Boolean) as BlogPostMeta[]
}

export function blogPostingJsonLd(post: BlogPostMeta) {
  const url = `${siteConfig.url}/blog/${post.slug}`
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: siteConfig.photo,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": PERSON_ID }, { "@id": AMTOP_ORG_ID }, { "@id": THINKFLOW_ORG_ID }],
    keywords: post.keywords.join(", "),
    inLanguage: "en",
  }
}
