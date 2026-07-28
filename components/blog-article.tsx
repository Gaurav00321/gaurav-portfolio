import Link from "next/link"
import { siteConfig } from "@/app/metadata"
import { CANONICAL_TITLE } from "@/lib/entity-schema"
import type { BlogPostMeta } from "@/lib/blog"
import { getRelatedPosts } from "@/lib/blog"
import ProfileImage from "@/components/profile-image"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  faqPageJsonLd,
} from "@/lib/jsonld"
import { blogPostingJsonLd } from "@/lib/blog"
import { Breadcrumbs, PageShell } from "@/components/page-shell"

export function AuthorBio() {
  return (
    <aside className="mt-14 border border-border p-5 sm:p-6 bg-muted/30">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
        <ProfileImage size="md" className="shrink-0 border border-border" />
        <div className="min-w-0">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
        Author
      </p>
      <h2 className="text-lg font-semibold">{siteConfig.name}</h2>
      <p className="text-sm text-teal-700 dark:text-teal-400 mt-1">
        {CANONICAL_TITLE}
      </p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {siteConfig.shortBio}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <li>
          <Link href="/about" className="text-primary underline-offset-4 hover:underline">
            About
          </Link>
        </li>
        <li>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            X
          </a>
        </li>
        <li>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://amtop.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            amTop
          </a>
        </li>
        <li>
          <a
            href="https://thinkflowgpt.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            ThinkFlowGPT
          </a>
        </li>
      </ul>
        </div>
      </div>
    </aside>
  )
}

export function FiveWs({ fiveWs }: { fiveWs: BlogPostMeta["fiveWs"] }) {
  return (
    <dl className="my-8 grid sm:grid-cols-2 gap-4 text-sm border border-border/80 p-4 sm:p-5 bg-card/40">
      {(
        [
          ["What", fiveWs.what],
          ["Who", fiveWs.who],
          ["When", fiveWs.when],
          ["Where", fiveWs.where],
          ["Why", fiveWs.why],
        ] as const
      ).map(([label, value]) => (
        <div key={label}>
          <dt className="font-semibold text-foreground">{label}</dt>
          <dd className="mt-1 text-muted-foreground leading-relaxed">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function RelatedPosts({ slug }: { slug: string }) {
  const related = getRelatedPosts(slug)
  if (!related.length) return null
  return (
    <nav className="mt-14 border-t border-border pt-8" aria-label="Related articles">
      <h2 className="text-lg font-semibold mb-4">Related articles</h2>
      <ul className="space-y-3">
        {related.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="text-primary underline-offset-4 hover:underline font-medium"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function BlogFaqs({ faqs }: { faqs: BlogPostMeta["faqs"] }) {
  return (
    <section className="mt-14 border-t border-border pt-8">
      <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-base sm:text-lg font-semibold">{faq.question}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function BlogArticle({
  post,
  children,
}: {
  post: BlogPostMeta
  children: React.ReactNode
}) {
  return (
    <PageShell>
      <JsonLdScript
        data={[
          blogPostingJsonLd(post),
          faqPageJsonLd(post.faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Article" },
        ]}
      />
      <article className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          Authority series · {post.datePublished}
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {post.description}
        </p>
        <FiveWs fiveWs={post.fiveWs} />
        <div className="prose-blog space-y-5 text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2">
          {children}
        </div>
        <BlogFaqs faqs={post.faqs} />
        <AuthorBio />
        <RelatedPosts slug={post.slug} />
      </article>
    </PageShell>
  )
}
