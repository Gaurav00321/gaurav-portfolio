import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/app/metadata"
import { aboutHighlights } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld"
import { Breadcrumbs, PageHeader, PageShell } from "@/components/page-shell"
import ProfileCard from "@/components/profile-card"

export const metadata: Metadata = createPageMetadata({
  title: "About Gaurav Upadhyay",
  description:
    "About Gaurav Upadhyay — Co-Founder & Chief Scientist at amTop, Founder of ThinkFlowGPT. Agentic AI, marketing automation, and workflow systems.",
  path: "/about",
  ogType: "profile",
})

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={[
          webPageJsonLd({
            path: "/about",
            name: "About Gaurav Upadhyay",
            description: metadata.description as string,
            type: "AboutPage",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
        <div>
          <PageHeader
            eyebrow="About"
            title="Gaurav Upadhyay"
            description="Co-Founder & Chief Scientist at amTop. Founder of ThinkFlowGPT. Building agentic AI for marketing and business automation."
          />

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I&apos;m a software engineer and founder focused on one question:
              how much of a business can run itself if the automation is
              intelligent enough?
            </p>
            <p>
              At <strong className="text-foreground">amTop</strong>, I lead
              technical vision for agentic marketing automation — AI that plans,
              executes, and optimizes campaigns for startups at scale.
            </p>
            <p>
              At <strong className="text-foreground">ThinkFlowGPT</strong>,
              I&apos;m applying the same idea to broader workflows: replace
              fragmented manual processes with AI that gets things done.
            </p>
            <p>
              I&apos;m pursuing an Integrated Master&apos;s in AI (IMCA) at Parul
              University, based in Vadodara, Gujarat.
            </p>
          </div>

          <ul className="mt-12 grid sm:grid-cols-3 gap-6">
            {aboutHighlights.map((item) => (
              <li key={item.title} className="border-t border-border pt-4">
                <h2 className="font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-4 text-sm">
            <Link href="/companies" className="text-primary underline-offset-4 hover:underline">
              Founded companies
            </Link>
            <Link href="/research" className="text-primary underline-offset-4 hover:underline">
              Research
            </Link>
            <Link href="/faq" className="text-primary underline-offset-4 hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end w-full max-w-sm">
          <ProfileCard enableTilt={false} />
        </div>
      </div>
    </PageShell>
  )
}
