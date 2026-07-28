import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/app/metadata"
import { companies } from "@/lib/content"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  collectionPageJsonLd,
} from "@/lib/jsonld"
import { Breadcrumbs, PageHeader, PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Companies Founded by Gaurav Upadhyay",
  description:
    "Companies founded and led by Gaurav Upadhyay — amTop (Chief Scientist), ThinkFlowGPT, and AetherOS.",
  alternates: { canonical: `${siteConfig.url}/companies` },
  openGraph: {
    title: "Companies Founded by Gaurav Upadhyay",
    description:
      "amTop, ThinkFlowGPT, and AetherOS — ventures led by Gaurav Upadhyay.",
    url: `${siteConfig.url}/companies`,
  },
}

export default function CompaniesPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={[
          collectionPageJsonLd({
            path: "/companies",
            name: "Companies Founded by Gaurav Upadhyay",
            description: metadata.description as string,
            items: companies.map((c) => ({
              name: c.name,
              url: c.url,
              description: c.summary,
            })),
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Companies", path: "/companies" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Ventures by Gaurav Upadhyay",
            itemListElement: companies.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Organization",
                name: c.name,
                description: c.summary,
                url: c.url,
                founder: { "@id": `${siteConfig.url}/#person` },
              },
            })),
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Companies" },
        ]}
      />
      <PageHeader
        eyebrow="Ventures"
        title="Founded companies"
        description="Startups and R&D ventures where Gaurav Upadhyay leads product and technical direction."
      />

      <ul className="mt-12 space-y-10">
        {companies.map((company) => (
          <li
            key={company.id}
            className="border-t border-border pt-8 grid md:grid-cols-[1fr_auto] gap-6"
          >
            <div>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {company.name}
                </h2>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {company.status}
                </span>
              </div>
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400 mb-3">
                {company.role}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {company.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {company.focus.map((f) => (
                  <li
                    key={f}
                    className="text-xs border border-border px-2.5 py-1 text-muted-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
              >
                Visit
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-muted-foreground">
        Profile on{" "}
        <Link
          href={siteConfig.links.crunchbase}
          className="text-primary underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crunchbase
        </Link>
        .
      </p>
    </PageShell>
  )
}
