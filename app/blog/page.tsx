import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/app/metadata"
import { blogPosts } from "@/lib/blog"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  collectionPageJsonLd,
} from "@/lib/jsonld"
import { Breadcrumbs, PageHeader, PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Blog — Agentic AI, Marketing Automation & Founder Notes",
  description:
    "Authority articles by Gaurav Upadhyay on agentic AI, amTop marketing automation, ThinkFlowGPT, and building AI products.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog by Gaurav Upadhyay",
    description:
      "Authority articles on agentic AI, marketing automation, and ThinkFlowGPT.",
    url: `${siteConfig.url}/blog`,
    images: [siteConfig.profileImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.profileImage],
  },
}

export default function BlogIndexPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={[
          collectionPageJsonLd({
            path: "/blog",
            name: "Blog by Gaurav Upadhyay",
            description: metadata.description as string,
            items: blogPosts.map((p) => ({
              name: p.title,
              url: `${siteConfig.url}/blog/${p.slug}`,
              description: p.description,
            })),
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <PageHeader
        eyebrow="Authority blog"
        title="Blog"
        description="Pillar article on Gaurav Upadhyay, amTop, and ThinkFlowGPT — more posts publishing weekly."
      />
      <ul className="mt-12 space-y-8 max-w-3xl">
        {blogPosts.map((post, i) => (
          <li key={post.slug} className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground mb-2">
              {i === 0 ? "Pillar · " : ""}
              {post.datePublished}
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-3 text-sm text-primary underline-offset-4 hover:underline"
            >
              Read article →
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
