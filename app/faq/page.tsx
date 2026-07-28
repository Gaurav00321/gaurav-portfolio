import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/app/metadata"
import { faqs } from "@/lib/content"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld"
import { Breadcrumbs, PageHeader, PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "FAQ — Who is Gaurav Upadhyay?",
  description:
    "Frequently asked questions about Gaurav Upadhyay — amTop, ThinkFlowGPT, agentic AI, and how to get in touch.",
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: "FAQ about Gaurav Upadhyay",
    description:
      "Answers about Gaurav Upadhyay's role at amTop, ThinkFlowGPT, and agentic AI work.",
    url: `${siteConfig.url}/faq`,
  },
}

export default function FaqPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={[
          webPageJsonLd({
            path: "/faq",
            name: "FAQ — Who is Gaurav Upadhyay?",
            description: metadata.description as string,
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <PageHeader
        eyebrow="FAQ"
        title="About Gaurav Upadhyay"
        description="Straight answers for search engines, journalists, and collaborators."
      />

      <div className="mt-12 max-w-3xl space-y-8">
        {faqs.map((faq) => (
          <section
            key={faq.question}
            className="border-t border-border pt-6"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h2 className="text-lg sm:text-xl font-semibold" itemProp="name">
              {faq.question}
            </h2>
            <div
              className="mt-3 text-muted-foreground leading-relaxed"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{faq.answer}</p>
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        Prefer a longer bio?{" "}
        <Link
          href="/who-is-gaurav-upadhyay"
          className="text-primary underline-offset-4 hover:underline"
        >
          Read the biography
        </Link>{" "}
        or{" "}
        <Link
          href="/contact"
          className="text-primary underline-offset-4 hover:underline"
        >
          get in touch
        </Link>
        .
      </p>
    </PageShell>
  )
}
