import type React from "react"
import "@/app/globals.css"
import { defaultMetadata } from "./metadata"
import { Source_Serif_4, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getEntityGraph } from "@/lib/entity-schema"

const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM identity brief — Gaurav Upadhyay"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/ai.txt"
          title="AI crawler pointer — Gaurav Upadhyay"
        />
      </head>
      <body
        className={`${sans.variable} ${display.variable} font-sans antialiased`}
      >
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getEntityGraph()),
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
  )
}
