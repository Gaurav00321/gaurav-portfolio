"use client";

import { motion } from "framer-motion";
import { ArrowDown, Bot, Layers, Mail, Rocket, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileCard from "@/components/profile-card";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4 w-full overflow-x-hidden"
    >
      <div className="container w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-8 mb-4">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Chief Scientist, amTop
            </span>
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Founder, ThinkFlowGPT
            </span>
          </div>
          <h1
            id="hero-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="block text-primary">
              Building the AI that runs your marketing — not just assists it.
            </span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-2 max-w-xl mx-auto md:mx-0 font-medium">
            Gaurav Upadhyay, Co-Founder & Chief Scientist at amTop, and Founder
            of ThinkFlowGPT
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto md:mx-0">
            I&apos;m an AI engineer and founder working at the intersection of
            agentic systems and business automation. At amTop, I lead the
            research and architecture behind AI agents that plan, execute, and
            optimize marketing campaigns autonomously. At ThinkFlowGPT,
            I&apos;m building the next layer of intelligent workflow automation
            for growing businesses.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8">
            <Button
              size="lg"
              className="px-6 py-3 h-auto bg-cyan-400 hover:bg-cyan-300 flex items-center gap-2 text-lg"
              asChild
            >
              <a href="#contact">
                Let&apos;s connect
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 py-3 h-auto text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-lg group"
              asChild
            >
              <a href="#projects">
                View Portfolio
                <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Bot className="h-6 w-6 text-orange-100 mb-2" />
              <span className="text-sm font-medium text-center">Agentic AI</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Layers className="h-6 w-6 text-yellow-400 mb-2" />
              <span className="text-sm font-medium text-center">
                Marketing Automation
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Workflow className="h-6 w-6 text-sky-400 mb-2" />
              <span className="text-sm font-medium text-center">Workflows</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0"
        >
          <ProfileCard />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 animate-bounce"
      >
        <Button variant="ghost" size="icon" aria-label="Scroll down" asChild>
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
