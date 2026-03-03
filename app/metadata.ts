import { Metadata } from 'next'

export const siteConfig = {
  name: "Gaurav Upadhyay",
  title: "Gaurav Upadhyay | AI Engineer & Founder of ThinkFlowGPT",
  description: "Gaurav Upadhyay is an AI Engineer and the Founder of ThinkFlowGPT. Learn about his work in intelligent workflow automation, software development, and AI innovation.",
  url: "https://gauravupadhyay.vercel.app",
  ogImage: "https://gauravupadhyay.vercel.app/Gaurav.png",
  links: {
    github: "https://github.com/Gaurav00321",
    linkedin: "https://www.linkedin.com/in/gauravupadhyay-tech",
    twitter: "https://x.com/gauravXupadhyay",
    instagram: "https://www.instagram.com/gauravxupadhyay",
  }
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
    "Founder of ThinkFlowGPT",
    "ThinkFlowGPT",
    "AI Engineer India",
    "Workflow Automation Expert",
    "Software Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Gaurav Upadhyay - AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@gauravXupadhyay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "QSox7IUrhJ6YB6ZL_GmO8NQ97zYcxurqnl1R6QBxu04",
  }
}
