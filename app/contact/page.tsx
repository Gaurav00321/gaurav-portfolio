import type { Metadata } from "next"
import { siteConfig } from "@/app/metadata"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld"
import { Breadcrumbs, PageHeader, PageShell } from "@/components/page-shell"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact Gaurav Upadhyay",
  description:
    "Contact Gaurav Upadhyay — Co-Founder & Chief Scientist at amTop. Email, LinkedIn, or message form for agentic AI and collaboration.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact Gaurav Upadhyay",
    description: "Let's connect on agentic AI, marketing automation, or collaboration.",
    url: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPageJsonLd({
            path: "/contact",
            name: "Contact Gaurav Upadhyay",
            description: metadata.description as string,
            type: "ContactPage",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageShell className="pb-0 sm:pb-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />
        <PageHeader
          eyebrow="Contact"
          title="Let's connect"
          description="Working on agentic AI, marketing automation, or the next frontier of business systems? Reach out."
        />
      </PageShell>
      <Contact hideHeader />
    </>
  )
}
