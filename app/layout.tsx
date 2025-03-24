import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gauravupadhyay.vercel.app"),
  title: "Gaurav Upadhyay | AI Research Engineer & Full Stack Developer",
  description:
    "Gaurav Upadhyay is an AI Research Engineer and Full Stack Developer, Founder of ThinkFlowGPT, and Co-founder at amTop. Specializing in AI research, front-end development, and automation.",
  keywords: [
    "AI Research Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Web Development",
    "Portfolio",
    "ThinkFlowGPT",
    "amTop",
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gaurav Upadhyay Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gauravupadhyay.vercel.app",
    title: "Gaurav Upadhyay | AI Research Engineer & Full Stack Developer",
    description:
      "Gaurav Upadhyay - Founder of ThinkFlowGPT and Co-founder at amTop. Expert in AI research, automation solutions, and full-stack development.",
    siteName: "Gaurav Upadhyay Portfolio",
    images: [
      {
        url: "/Gaurav.png",
        width: 800,
        height: 600,
        alt: "Gaurav Upadhyay - AI Research Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Upadhyay | AI Research Engineer & Full Stack Developer",
    description:
      "Gaurav Upadhyay - Founder of ThinkFlowGPT and Co-founder at amTop. Expert in AI research, automation solutions, and full-stack development.",
    images: ["/Gaurav.png"],
    creator: "@gauravupadhyay",
    site: "@gauravupadhyay",
  },
  verification: {
    google: "QSox7IUrhJ6YB6ZL_GmO8NQ97zYcxurqnl1R6QBxu04",
  },
  alternates: {
    canonical: "https://gauravupadhyay.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="QSox7IUrhJ6YB6ZL_GmO8NQ97zYcxurqnl1R6QBxu04"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gaurav Upadhyay",
              givenName: "Gaurav",
              familyName: "Upadhyay",
              alternateName: ["Gaurav"],
              url: "https://gauravupadhyay.vercel.app",
              image: "https://gauravupadhyay.vercel.app/Gaurav.png",
              sameAs: [
                "https://github.com/Gaurav00321",
                "https://linkedin.com/in/gaurav-upadhyay",
                "https://twitter.com/gauravupadhyay",
              ],
              jobTitle: "AI Research Engineer & Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "amTop",
                position: "Co-founder",
                startDate: "2023",
              },
              founderOf: {
                "@type": "Organization",
                name: "ThinkFlowGPT",
                position: "Founder",
                startDate: "2023",
              },
              description:
                "Gaurav Upadhyay is the Founder of ThinkFlowGPT and Co-founder at amTop, specializing in AI research, front-end development, and automation. He is recognized for driving innovation in AI-driven workflow automation and scalable software solutions.",
              skills: [
                "AI Research",
                "Frontend Development",
                "Full Stack Development",
                "AI Automation",
                "Software Engineering",
                "Machine Learning",
                "Web Development",
                "TypeScript",
                "React",
                "Next.js",
                "Python",
                "Node.js",
              ],
              nationality: "Indian",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Parul University",
                sameAs: "https://paruluniversity.ac.in",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Projects",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "ThinkFlowGPT",
                      description: "AI-powered workflow automation system",
                      applicationCategory: "BusinessApplication",
                      operatingSystem: "Web-based",
                      offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "amTop",
                      description: "AI research and development platform",
                      applicationCategory: "BusinessApplication",
                      operatingSystem: "Web-based",
                      offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                      },
                    },
                  },
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vadodara",
                addressRegion: "Gujarat",
                addressCountry: "IN",
                streetAddress: "Vadodara, Gujarat, India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "email",
                email: "gauravupadhyay.career@gmail.com",
                telephone: "+91 7275742642",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
