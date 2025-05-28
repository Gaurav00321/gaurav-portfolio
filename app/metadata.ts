import { Metadata } from 'next'

export const siteConfig = {
  name: "Gaurav Upadhyay",
  title: "Gaurav Upadhyay - AI/ML Engineer & Founder of ThinkFlowGPT",
  description: "Gaurav Upadhyay is an experienced AI/ML Engineer and the founder of ThinkFlowGPT, specializing in artificial intelligence, machine learning, and workflow automation solutions.",
  url: "https://gauravupadhyay.vercel.app",
  ogImage: "/Gaurav.png",
  links: {
    github: "https://github.com/Gaurav00321",
    linkedin: "https://linkedin.com/in/gauravupadhyay",
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
    "ThinkFlowGPT",
    "AI Engineer",
    "Machine Learning Engineer",
    "AI Solutions",
    "Workflow Automation",
    "Deep Learning",
    "AI Consulting",
    "Tech Entrepreneur",
    "AI Development",
    "Full Stack Developer",
    "Web Development",
    "Software Engineer",
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: siteConfig.url,
  },
}
