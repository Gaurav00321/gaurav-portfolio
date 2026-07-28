import Link from "next/link"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { XIcon } from "@/components/x-icon"
import { siteConfig } from "@/app/metadata"

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Companies", href: "/companies" },
  { label: "Blog", href: "/blog" },
  { label: "Research", href: "/research" },
  { label: "FAQ", href: "/faq" },
  { label: "Biography", href: "/who-is-gaurav-upadhyay" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-muted/20">
      <div className="container max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Gaurav Upadhyay
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {siteConfig.shortBio}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Explore
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Connect
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4 mr-2 shrink-0" />
              <span className="break-all">{siteConfig.email}</span>
            </a>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="X"
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <a
              href={siteConfig.links.crunchbase}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-block text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
            >
              Crunchbase profile
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Gaurav Upadhyay. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
            <a href="/sitemap.xml" className="hover:text-foreground underline-offset-4 hover:underline">
              Sitemap
            </a>
            <a href="/llms.txt" className="hover:text-foreground underline-offset-4 hover:underline">
              llms.txt
            </a>
            <a href="/ai.txt" className="hover:text-foreground underline-offset-4 hover:underline">
              ai.txt
            </a>
            <a href="/robots.txt" className="hover:text-foreground underline-offset-4 hover:underline">
              robots.txt
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
