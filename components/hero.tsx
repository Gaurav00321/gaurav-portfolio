"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProfileCard from "@/components/profile-card"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-[100svh] flex flex-col justify-center pt-24 pb-12 px-4 sm:px-6"
    >
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Chief Scientist, amTop · Founder, ThinkFlowGPT
          </p>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.15]"
          >
            Building the AI that runs your marketing — not just assists it.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Gaurav Upadhyay — agentic AI for marketing automation and intelligent
            business workflows.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button size="lg" className="h-11 px-6" asChild>
              <Link href="/contact">
                Let&apos;s connect
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-6" asChild>
              <Link href="/projects">
                View projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  )
}
