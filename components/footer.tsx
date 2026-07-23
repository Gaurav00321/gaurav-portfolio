import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { siteConfig } from "@/app/metadata";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-muted/50 border-t border-border">
      <div className="w-full md:container md:max-w-6xl mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {/* About Section — short bio for press/footer use */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.shortBio}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/who-is-gaurav-upadhyay"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Biography
              </Link>
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#testimonials"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Let&apos;s connect
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                {siteConfig.email}
              </a>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Gaurav Upadhyay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
