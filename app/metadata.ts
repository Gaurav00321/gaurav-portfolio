import { Metadata } from 'next'

export const siteConfig = {
  name: "Gaurav Upadhyay",
  title: "Gaurav Upadhyay - Founder of ThinkFlowGPT | AI & Automation Expert",
  description: "Gaurav Upadhyay is the Founder of ThinkFlowGPT, an AI-driven workflow automation startup revolutionizing business processes with intelligent automation. A passionate software developer and AI enthusiast, Gaurav Upadhyay is dedicated to building innovative, user-centric solutions.",
  url: "https://gauravupadhyay.vercel.app",
  ogImage: "https://gauravupadhyay.vercel.app/Gaurav.png",
  links: {
    github: "https://github.com/Gaurav00321",
    linkedin: "https://www.linkedin.com/in/gauravupadhyay-tech",
    instagram: "https://www.instagram.com/gauravxupadhyay",
    twitter: "https://x.com/gauravXupadhyay",
  }
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Gaurav Upadhyay",
    "Founder of ThinkFlowGPT",
    "ThinkFlowGPT",
    "AI-driven workflow automation",
    "Intelligent Automation",
    "Business Process Revolution",
    "AI Enthusiast",
    "Software Developer",
    "Innovative Solutions",
    "User-centric AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Automation Startup",
    "Tech Founder",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
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
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@gauravupadhyay",
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
}
