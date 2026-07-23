"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Github, Instagram, Linkedin, MapPin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

const links = {
  github: "https://github.com/Gaurav00321",
  linkedin: "https://www.linkedin.com/in/gauravupadhyay-ai",
  twitter: "https://x.com/gauravu_ai",
  instagram: "https://www.instagram.com/gauravupadhyay.ai",
}

type ProfileCardProps = {
  className?: string
  enableTilt?: boolean
}

export default function ProfileCard({
  className,
  enableTilt = true,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!enableTilt) return
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      card.style.transform = `
        perspective(1000px)
        rotateY(${x * 8}deg)
        rotateX(${y * -8}deg)
        translateZ(8px)
      `
    }

    const handleMouseLeave = () => {
      card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [enableTilt])

  return (
    <article
      ref={cardRef}
      itemScope
      itemType="https://schema.org/Person"
      aria-label="Gaurav Upadhyay profile card"
      className={cn(
        "relative w-full max-w-sm overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-xl backdrop-blur-md transition-transform duration-300",
        "ring-1 ring-cyan-400/20",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-sky-500/5 pointer-events-none" />

      <div className="relative p-6 flex flex-col items-center text-center gap-4">
        <div className="relative h-36 w-36 md:h-44 md:w-44 overflow-hidden rounded-full border-2 border-cyan-400/40 shadow-lg">
          <Image
            src="/Gaurav.png"
            alt="Portrait of Gaurav Upadhyay, Co-Founder and Chief Scientist at amTop"
            fill
            className="object-cover"
            priority
            itemProp="image"
          />
        </div>

        <div className="space-y-1">
          <h2
            itemProp="name"
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            Gaurav Upadhyay
          </h2>
          <p className="text-sm md:text-base text-cyan-500 dark:text-cyan-400 font-medium">
            <span itemProp="jobTitle">Co-Founder & Chief Scientist</span>
            {" · "}
            <span
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">amTop</span>
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            Founder of{" "}
            <span
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">ThinkFlowGPT</span>
            </span>
          </p>
        </div>

        <p
          itemProp="description"
          className="text-sm text-muted-foreground leading-relaxed"
        >
          Building agentic AI for marketing automation and intelligent business
          workflows.
        </p>

        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          <span
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="addressLocality">Vadodara</span>,{" "}
            <span itemProp="addressRegion">Gujarat</span>,{" "}
            <span itemProp="addressCountry">India</span>
          </span>
        </p>

        <meta itemProp="url" content="https://gauravupadhyay.vercel.app" />
        <meta
          itemProp="email"
          content="gauravupadhyay.career@gmail.com"
        />
        <link itemProp="sameAs" href={links.linkedin} />
        <link itemProp="sameAs" href={links.twitter} />
        <link itemProp="sameAs" href={links.instagram} />
        <link itemProp="sameAs" href={links.github} />

        <nav
          aria-label="Social profiles"
          className="flex items-center gap-3 pt-1"
        >
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="LinkedIn profile of Gaurav Upadhyay"
            className="rounded-full border border-border/70 p-2 text-muted-foreground hover:text-primary hover:border-cyan-400/50 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="X profile of Gaurav Upadhyay"
            className="rounded-full border border-border/70 p-2 text-muted-foreground hover:text-primary hover:border-cyan-400/50 transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="Instagram profile of Gaurav Upadhyay"
            className="rounded-full border border-border/70 p-2 text-muted-foreground hover:text-primary hover:border-cyan-400/50 transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="GitHub profile of Gaurav Upadhyay"
            className="rounded-full border border-border/70 p-2 text-muted-foreground hover:text-primary hover:border-cyan-400/50 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </article>
  )
}
