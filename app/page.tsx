import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Hero from "@/components/hero"
import AiEntityBlock from "@/components/ai-entity-block"
import Contact from "@/components/contact"
import { companies, projects } from "@/lib/content"
import { Button } from "@/components/ui/button"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld"
import { siteConfig } from "@/app/metadata"

export default function Home() {
  return (
    <div className="relative">
      <JsonLdScript
        data={[
          webPageJsonLd({
            path: "/",
            name: siteConfig.title,
            description: siteConfig.description,
            type: "ProfilePage",
          }),
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
        ]}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsla(190,70%,45%,0.1),_transparent_50%),linear-gradient(to_bottom,_transparent,_hsl(var(--background)))]" />

      <Hero />

      <AiEntityBlock />

      <section className="px-4 py-16 sm:py-20 border-t border-border/60">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Ventures
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Companies
              </h2>
            </div>
            <Link
              href="/companies"
              className="text-sm text-primary inline-flex items-center gap-1 hover:underline underline-offset-4"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ul className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {companies.map((c) => (
              <li key={c.id} className="border-t border-border pt-4">
                <h3 className="font-semibold text-lg">{c.name}</h3>
                <p className="text-xs text-teal-700 dark:text-teal-400 mt-1 mb-2">
                  {c.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Selected work
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-primary inline-flex items-center gap-1 hover:underline underline-offset-4"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <li key={p.id} className="border border-border/70 p-5 bg-background/60">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/research">Research</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/faq">FAQ</Link>
            </Button>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
