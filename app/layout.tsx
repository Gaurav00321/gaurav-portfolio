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
                  "@id": `${siteConfig.url}/#person`,
                  name: siteConfig.name,
                  givenName: siteConfig.givenName,
                  familyName: siteConfig.familyName,
                  alternateName: [
                    "Gaurav Upadhyay AI",
                    "Gaurav Upadhyay amTop",
                    "Founder of ThinkFlowGPT",
                  ],
                  description: siteConfig.shortBio,
                  image: {
                    "@type": "ImageObject",
                    "@id": `${siteConfig.url}/#personImage`,
                    url: siteConfig.photo,
                    height: 800,
                    width: 800,
                    caption: "Gaurav Upadhyay — Co-Founder & Chief Scientist at amTop",
                  },
                  url: siteConfig.url,
                  mainEntityOfPage: {
                    "@type": "ProfilePage",
                    "@id": `${siteConfig.url}/#profilepage`,
                  },
                  email: siteConfig.email,
                  sameAs: [
                    siteConfig.links.github,
                    siteConfig.links.linkedin,
                    siteConfig.links.twitter,
                    siteConfig.links.instagram,
                  ],
                  jobTitle: "Chief Scientist",
                  worksFor: [
                    {
                      "@type": "Organization",
                      name: "amTop",
                      "@id": `${siteConfig.url}/#amtop`,
                    },
                    {
                      "@type": "Organization",
                      name: "ThinkFlowGPT",
                      "@id": `${siteConfig.url}/#organization`,
                    },
                  ],
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Parul University",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Vadodara",
                    addressRegion: "Gujarat",
                    addressCountry: "IN",
                  },
                  knowsAbout: [...siteConfig.knowsAbout],
                  nationality: {
                    "@type": "Country",
                    name: "India",
                  },
                },
                {
                  "@type": "ProfilePage",
                  "@id": `${siteConfig.url}/#profilepage`,
                  url: siteConfig.url,
                  name: siteConfig.title,
                  description: siteConfig.description,
                  mainEntity: {
                    "@id": `${siteConfig.url}/#person`,
                  },
                  about: {
                    "@id": `${siteConfig.url}/#person`,
                  },
                  primaryImageOfPage: {
                    "@id": `${siteConfig.url}/#personImage`,
                  },
                  speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: ["#entity-heading", "#hero-heading", "#about-heading"],
                  },
                },
                {
                  "@type": "Organization",
                  "@id": `${siteConfig.url}/#amtop`,
                  name: "amTop",
                  description:
                    "Agentic AI for marketing automation — AI systems that plan, execute, and optimize campaigns autonomously.",
                  employee: {
                    "@id": `${siteConfig.url}/#person`,
                  },
                },
                {
                  "@type": "Organization",
                  "@id": `${siteConfig.url}/#organization`,
                  name: "ThinkFlowGPT",
                  url: siteConfig.url,
                  logo: {
                    "@type": "ImageObject",
                    url: siteConfig.photo,
                  },
                  founder: {
                    "@id": `${siteConfig.url}/#person`,
                  },
                  description:
                    "AI-driven workflow automation startup focused on intelligent, self-operating business processes.",
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: siteConfig.url,
                  name: siteConfig.title,
                  description: siteConfig.description,
                  publisher: {
                    "@id": `${siteConfig.url}/#person`,
                  },
                  inLanguage: "en",
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
