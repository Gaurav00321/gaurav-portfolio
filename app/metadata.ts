import { Metadata } from "next"

export const siteConfig = {
  name: "Gaurav Upadhyay",
  givenName: "Gaurav",
  familyName: "Upadhyay",
  jobTitle: "Co-Founder & Chief Scientist",
  organization: "amTop",
  secondaryRole: "Founder",
  secondaryOrg: "ThinkFlowGPT",
  location: "Vadodara, Gujarat, India",
  title: "Gaurav Upadhyay | Chief Scientist, amTop | AI Founder",
  description:
    "Gaurav Upadhyay is Co-Founder & Chief Scientist at amTop and Founder of ThinkFlowGPT, building agentic AI for marketing automation.",
  ogDescription:
    "Co-Founder & Chief Scientist at amTop. Founder of ThinkFlowGPT. Building agentic AI that runs marketing autonomously.",
  shortBio:
    "Gaurav Upadhyay is Co-Founder & Chief Scientist at amTop and Founder of ThinkFlowGPT, building agentic AI systems for marketing and business automation. He is pursuing an Integrated Master's in AI at Parul University.",
  longBio:
    "Gaurav Upadhyay is a software engineer, AI researcher, and startup founder building at the intersection of agentic AI and business automation. As Co-Founder and Chief Scientist at amTop, he leads the research and technical architecture behind autonomous marketing agents. He is also the Founder of ThinkFlowGPT, an AI-driven workflow automation startup.",
  url: "https://gauravupadhyay.vercel.app",
  profileImage: "/Gaurav.png",
  profileImageAlt:
    "Gaurav Upadhyay — Co-Founder & Chief Scientist at amTop, Founder of ThinkFlowGPT",
  photo: "https://gauravupadhyay.vercel.app/Gaurav.png",
  ogImage: "https://gauravupadhyay.vercel.app/Gaurav.png",
  email: "gauravupadhyay.career@gmail.com",
  education: "Integrated Master's in AI (IMCA), Parul University",
  knowsAbout: [
    "Agentic AI",
    "AI Marketing Automation",
    "Workflow Automation",
    "Neural Networks",
    "Distributed Systems",
  ] as const,
  links: {
    github: "https://github.com/gauravupadhyay-ai",
    linkedin: "https://www.linkedin.com/in/gauravupadhyay-ai",
    twitter: "https://x.com/gauravu_ai",
    instagram: "https://www.instagram.com/gauravupadhyay.ai",
    crunchbase: "https://www.crunchbase.com/person/gaurav-upadhyay-061c",
  },
  /** Machine-readable entity facts for AI search / Knowledge Graph */
  entityFacts: [
    { label: "Full name", value: "Gaurav Upadhyay" },
    {
      label: "Primary role",
      value: "Co-Founder & Chief Scientist at amTop",
    },
    { label: "Also known as", value: "Founder of ThinkFlowGPT" },
    {
      label: "Expertise",
      value: "Agentic AI, marketing automation, workflow automation",
    },
    { label: "Education", value: "IMCA (AI), Parul University" },
    { label: "Location", value: "Vadodara, Gujarat, India" },
    {
      label: "Official website",
      value: "https://gauravupadhyay.vercel.app",
    },
  ] as const,
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Gaurav Upadhyay",
    "Who is Gaurav Upadhyay",
    "Gaurav Upadhyay AI",
    "Gaurav Upadhyay amTop",
    "Gaurav Upadhyay ThinkFlowGPT",
    "Chief Scientist",
    "amTop",
    "agentic AI",
    "ThinkFlowGPT",
    "AI engineer",
    "marketing automation",
    "Co-Founder amTop",
    "Founder of ThinkFlowGPT",
    "AI Founder India",
    "workflow automation",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Technology",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    siteName: siteConfig.name,
    firstName: siteConfig.givenName,
    lastName: siteConfig.familyName,
    username: "gauravu_ai",
    images: [
      {
        url: siteConfig.profileImage,
        width: 512,
        height: 512,
        alt: siteConfig.profileImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    images: [siteConfig.profileImage],
    creator: "@gauravu_ai",
    site: "@gauravu_ai",
  },
  other: {
    "profile:first_name": siteConfig.givenName,
    "profile:last_name": siteConfig.familyName,
    "profile:username": "gauravu_ai",
    "ai:description": siteConfig.shortBio,
    "citation_author": siteConfig.name,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "text/plain": "/llms.txt",
    },
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "QSox7IUrhJ6YB6ZL_GmO8NQ97zYcxurqnl1R6QBxu04",
  },
}
