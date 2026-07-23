"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/animated-section";
import { staggerContainer } from "@/lib/animation";
import { Code2, Lightbulb, Rocket, Brain } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Systems & Backend",
    items: ["Java", "C++", "Python", "Databases"],
  },
  {
    category: "AI & Distributed Systems",
    items: ["Neural Networks", "Agentic Systems", "Distributed Computing", "Marketing Automation"],
  },
];

const highlights = [
  {
    icon: Brain,
    title: "Agentic Marketing AI",
    description:
      "At amTop, leading research and architecture for AI agents that plan, execute, and optimize campaigns autonomously.",
  },
  {
    icon: Rocket,
    title: "ThinkFlowGPT",
    description:
      "Founding an AI-driven workflow automation platform that replaces fragmented manual processes with systems that get things done.",
  },
  {
    icon: Code2,
    title: "Full-Stack Foundation",
    description:
      "React, Next.js, TypeScript, Java, C++, Python, databases, and distributed computing — built through study and product work.",
  },
  {
    icon: Lightbulb,
    title: "First-Principles Problems",
    description:
      "Drawn to hard, unsolved problems — the kind that need a system rebuilt from first principles rather than patched.",
  },
];

const iconColors = [
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-pink-500",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 px-4 bg-secondary/20 w-full overflow-x-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8"
      >
        <AnimatedSection
          type="fade"
          direction="up"
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
            About Gaurav Upadhyay
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-left md:text-center">
            <p className="text-lg text-muted-foreground">
              I&apos;m <strong>Gaurav Upadhyay</strong> — a software engineer,
              AI researcher, and founder currently pursuing an Integrated
              Master&apos;s in AI (IMCA) at Parul University. My work centers on
              one question: how much of a business can run itself if the
              automation is intelligent enough?
            </p>
            <p className="text-lg text-muted-foreground">
              As Co-Founder and Chief Scientist at <strong>amTop</strong>, I
              lead the technical vision behind agentic marketing automation —
              AI systems built to independently manage campaigns for hundreds of
              startups at once, forecasting trends and optimizing ROI without
              constant human oversight.
            </p>
            <p className="text-lg text-muted-foreground">
              I&apos;m also the Founder of <strong>ThinkFlowGPT</strong>, where
              I&apos;m applying the same philosophy to broader business
              workflows: replace fragmented manual processes with AI that
              actually gets things done.
            </p>
            <p className="text-lg text-muted-foreground">
              My technical background spans full-stack development (React.js,
              Next.js, TypeScript), systems-level programming (Java, C++,
              Python), databases, distributed computing, and neural networks —
              a foundation I&apos;ve built through both formal study and
              hands-on product work.
            </p>
            <p className="text-lg text-muted-foreground">
              I&apos;m drawn to hard, unsolved problems — the kind that need a
              system rebuilt from first principles rather than patched. If
              you&apos;re working on agentic AI, automation, or anything at that
              frontier, I&apos;d love to{" "}
              <a href="#contact" className="text-primary hover:underline font-medium">
                connect
              </a>
              .
            </p>
            <p className="text-base text-muted-foreground/90 pt-2 border-t border-border/50 mt-6">
              Gaurav Upadhyay is an AI engineer and startup founder based in
              India, working on agentic AI and marketing automation. As
              Co-Founder and Chief Scientist at amTop, he builds AI agents that
              autonomously manage marketing campaigns for startups at scale. He
              also founded ThinkFlowGPT, an AI-driven workflow automation
              platform.
            </p>
            <div className="pt-4 text-center">
              <a
                href="/who-is-gaurav-upadhyay"
                className="text-primary hover:underline font-medium"
              >
                Read the full biography of Gaurav Upadhyay &rarr;
              </a>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} type="scale" delay={index * 0.1}>
              <Card className="p-6 h-full hover:bg-primary/5 transition-colors">
                {item.icon && (
                  <item.icon
                    className={`w-10 h-10 mb-4 ${iconColors[index % iconColors.length]}`}
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          type="fade"
          direction="up"
          delay={0.2}
          className="text-center mb-12"
        >
          <h3 id="skills" className="text-2xl font-semibold mb-2">
            Technical Expertise
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A foundation spanning full-stack product work, systems programming,
            and agentic AI research.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <AnimatedSection
              key={skillGroup.category}
              type="slide"
              direction={index === 1 ? "up" : index === 2 ? "right" : "left"}
              delay={index * 0.2}
            >
              <Card className="p-6 h-full">
                <h4 className="text-lg font-semibold mb-4">
                  {skillGroup.category}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-primary/10 text-primary rounded-md p-2 text-sm text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
