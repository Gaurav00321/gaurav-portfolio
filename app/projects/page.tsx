import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { siteConfig } from "@/app/metadata"
import { projects } from "@/lib/content"
import {
  JsonLdScript,
  breadcrumbJsonLd,
  collectionPageJsonLd,
} from "@/lib/jsonld"
import { Breadcrumbs, PageHeader, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projects by Gaurav Upadhyay",
  description:
    "Projects by Gaurav Upadhyay — agentic AI, ThinkFlowGPT, AetherOS, simulations, and full-stack product work.",
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: "Projects by Gaurav Upadhyay",
    description:
      "Agentic AI, workflow automation, and systems projects by Gaurav Upadhyay.",
    url: `${siteConfig.url}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={[
          collectionPageJsonLd({
            path: "/projects",
            name: "Projects by Gaurav Upadhyay",
            description: metadata.description as string,
            items: projects.map((p) => ({
              name: p.title,
              url: p.demoUrl,
              description: p.description,
            })),
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />
      <PageHeader
        eyebrow="Work"
        title="Projects"
        description="Selected product and systems work across agentic AI, automation, and interactive engineering."
      />

      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="group border border-border/80 overflow-hidden bg-card/40"
          >
            <div className="relative aspect-[16/10] bg-muted">
              <Image
                src={project.image}
                alt={`${project.title} — project by Gaurav Upadhyay`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h2 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground border border-border px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button size="sm" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                    <Github className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted-foreground">
        More on{" "}
        <Link
          href={siteConfig.links.github}
          className="text-primary underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
      </p>
    </PageShell>
  )
}
