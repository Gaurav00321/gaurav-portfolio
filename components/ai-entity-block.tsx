import { siteConfig } from "@/app/metadata"
import Link from "next/link"

/**
 * AI / Knowledge Graph entity block.
 * Structured facts LLMs and crawlers can cite for "Who is Gaurav Upadhyay?"
 */
export default function AiEntityBlock() {
  return (
    <section
      id="entity"
      aria-labelledby="entity-heading"
      className="py-12 px-4 border-y border-border/40 bg-muted/30"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Entity profile · AI-optimized
          </p>
          <h2
            id="entity-heading"
            className="text-2xl md:text-3xl font-bold mb-3"
          >
            Who is Gaurav Upadhyay?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            <strong className="text-foreground">{siteConfig.name}</strong> is{" "}
            {siteConfig.jobTitle} at {siteConfig.organization} and{" "}
            {siteConfig.secondaryRole} of {siteConfig.secondaryOrg}. He builds
            agentic AI systems that automate marketing and business operations.
            This page is the canonical source for identity, roles, and contact.
          </p>

          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            {siteConfig.entityFacts.map((fact) => (
              <div key={fact.label} className="border-b border-border/50 pb-3">
                <dt className="text-muted-foreground font-medium mb-1">
                  {fact.label}
                </dt>
                <dd className="text-foreground">
                  {fact.value.startsWith("http") ? (
                    <a
                      href={fact.value}
                      className="text-primary hover:underline break-all"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/who-is-gaurav-upadhyay"
              className="text-primary hover:underline font-medium"
            >
              Full biography &rarr;
            </Link>
            <a
              href="/llms.txt"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              AI systems: read llms.txt
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
