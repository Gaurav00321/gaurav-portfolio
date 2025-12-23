import type React from "react";
import "@/app/globals.css";
import { defaultMetadata } from "./metadata";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://gauravupadhyay.vercel.app/#person",
                  name: "Gaurav Upadhyay",
                  givenName: "Gaurav",
                  familyName: "Upadhyay",
                  description: "Founder of ThinkFlowGPT & AI/ML engineer",
                  image: {
                    "@type": "ImageObject",
                    "@id": "https://gauravupadhyay.vercel.app/#personImage",
                    url: "https://gauravupadhyay.vercel.app/Gaurav.png",
                    height: 800,
                    width: 800,
                    caption: "Gaurav Upadhyay"
                  },
                  sameAs: [
                    "https://github.com/Gaurav00321",
                    "https://linkedin.com/in/gauravupadhyay",
                  ],
                  jobTitle: ["Founder", "AI Engineer", "Machine Learning Engineer"],
                  worksFor: {
                    "@type": "Organization",
                    "@id": "https://gauravupadhyay.vercel.app/#organization",
                    name: "ThinkFlowGPT",
                    description: "AI-driven workflow automation solutions",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://gauravupadhyay.vercel.app/#website",
                  url: "https://gauravupadhyay.vercel.app",
                  name: "Gaurav Upadhyay - Portfolio",
                  description: "AI/ML Engineer & Founder of ThinkFlowGPT",
                  publisher: {
                    "@id": "https://gauravupadhyay.vercel.app/#person",
                  },
                },
              ],
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
        <SpeedInsights />
      </body>
    </html>
  );
}

import "./globals.css";
