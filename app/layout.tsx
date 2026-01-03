import type React from "react";
import "@/app/globals.css";
import { defaultMetadata, siteConfig } from "./metadata";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
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
                  description: "Gaurav Upadhyay is the Founder of ThinkFlowGPT, an AI-driven workflow automation startup revolutionizing business processes with intelligent automation.",
                  image: {
                    "@type": "ImageObject",
                    "@id": "https://gauravupadhyay.vercel.app/#personImage",
                    url: "https://gauravupadhyay.vercel.app/Gaurav.png",
                    height: 800,
                    width: 800,
                    caption: "Gaurav Upadhyay"
                  },
                  sameAs: [
                    siteConfig.links.github,
                    siteConfig.links.linkedin,
                    siteConfig.links.instagram,
                    siteConfig.links.twitter
                  ],
                  jobTitle: ["Founder", "Software Developer", "AI Enthusiast"],
                  worksFor: {
                    "@type": "Organization",
                    "@id": "https://gauravupadhyay.vercel.app/#organization",
                    name: "ThinkFlowGPT",
                    description: "AI-driven workflow automation startup revolutionizing business processes with intelligent automation",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://gauravupadhyay.vercel.app/#website",
                  url: "https://gauravupadhyay.vercel.app",
                  name: "Gaurav Upadhyay - Founder of ThinkFlowGPT",
                  description: "AI/ML Engineer & Founder of ThinkFlowGPT",
                  publisher: {
                    "@id": "https://gauravupadhyay.vercel.app/#person",
                  },
                },
              ],
            }),
          }}
        />
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
