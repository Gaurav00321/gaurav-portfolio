import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/app/metadata"
import { researchAreas } from "@/lib/content"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  collectionPageJsonLd,
} from "@/lib/jsonld"
import { Breadcrumbs, PageHeader, PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Research by Gaurav Upadhyay",
  description:
    "Research focus of Gaurav Upadhyay — agentic marketing systems, intelligent workflow automation, and distributed AI.",
  alternates: { canonical: `${siteConfig.url}/research` },
  openGraph: {
    title: "Research by Gaurav Upadhyay",
    description:
      "Agentic AI, marketing automation, and workflow systems research by Gaurav Upadhyay.",
    url: `${siteConfig.url}/research`,
  },
}

export default function ResearchPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={[
          collectionPageJsonLd({
            path: "/research",
            name: "Research by Gaurav Upadhyay",
            description: metadata.description as string,
            items: researchAreas.map((r) => ({
              name: r.title,
              url: `${siteConfig.url}/research#${r.id}`,
              description: r.summary,
            })),
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Research" },
        ]}
      />
      <PageHeader
        eyebrow="Research"
        title="Research & technical focus"
        description="Active R&D agenda behind amTop and ThinkFlowGPT. Formal publications will be listed here as they ship."
      />

      <ul className="mt-12 space-y-10">
        {researchAreas.map((area) => (
          <li
            key={area.id}
            id={area.id}
            className="scroll-mt-28 border-t border-border pt-8"
          >
            <div className="flex flex-wrap items-baseline gap-3 mb-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                {area.title}
              </h2>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {area.status}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {area.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {area.topics.map((topic) => (
                <li
                  key={topic}
                  className="text-xs border border-border px-2.5 py-1 text-muted-foreground"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-muted-foreground max-w-2xl">
        Related:{" "}
        <Link href="/companies" className="text-primary underline-offset-4 hover:underline">
          companies
        </Link>
        ,{" "}
        <Link href="/projects" className="text-primary underline-offset-4 hover:underline">
          projects
        </Link>
        , and the{" "}
        <Link href="/who-is-gaurav-upadhyay" className="text-primary underline-offset-4 hover:underline">
          full biography
        </Link>
        .
      </p>
    </PageShell>
  )
}
