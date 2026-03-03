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
                  "name": "Gaurav Upadhyay",
                  "givenName": "Gaurav",
                  "familyName": "Upadhyay",
                  "description": "Gaurav Upadhyay is an AI Engineer, Software Developer, and the Founder of ThinkFlowGPT, specializing in intelligent workflow automation.",
                  "image": {
                    "@type": "ImageObject",
                    "@id": "https://gauravupadhyay.vercel.app/#personImage",
                    "url": "https://gauravupadhyay.vercel.app/Gaurav.png",
                    "height": 800,
                    "width": 800,
                    "caption": "Gaurav Upadhyay"
                  },
                  "url": "https://gauravupadhyay.vercel.app",
                  "sameAs": [
                    "https://github.com/Gaurav00321",
                    "https://www.linkedin.com/in/gauravupadhyay-tech",
                    "https://x.com/gauravXupadhyay",
                    "https://www.instagram.com/gauravxupadhyay"
                  ],
                  "jobTitle": "Founder & AI Engineer",
                  "worksFor": {
                    "@id": "https://gauravupadhyay.vercel.app/#organization"
                  },
                  "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "Maharshi Dayanand University"
                  },
                  "knowsAbout": ["Artificial Intelligence", "Workflow Automation", "Next.js", "Software Engineering", "Machine Learning"]
                },
                {
                  "@type": "Organization",
                  "@id": "https://gauravupadhyay.vercel.app/#organization",
                  "name": "ThinkFlowGPT",
                  "url": "https://gauravupadhyay.vercel.app", // Adjust if there's a standalone site
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://gauravupadhyay.vercel.app/Gaurav.png" // Fallback if no specific logo available right now
                  },
                  "founder": {
                    "@id": "https://gauravupadhyay.vercel.app/#person"
                  },
                  "description": "An AI-driven workflow automation startup revolutionizing business processes."
                },
                {
                  "@type": "WebSite",
                  "@id": "https://gauravupadhyay.vercel.app/#website",
                  "url": "https://gauravupadhyay.vercel.app",
                  "name": "Gaurav Upadhyay | AI Engineer",
                  "publisher": {
                    "@id": "https://gauravupadhyay.vercel.app/#person"
                  }
                }
              ]
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
