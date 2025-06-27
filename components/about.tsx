"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/animated-section";
import { staggerContainer } from "@/lib/animation";
import { Code2, Lightbulb, Rocket, Brain } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    items: ["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & DevOps",
    items: ["Node.js", "Python", "AWS", "Docker"],
  },
  {
    category: "AI & Data",
    items: ["Machine Learning", "NLP", "Data Analysis", "LLM Integration"],
  },
];

const highlights = [
  {
    icon: Brain,
    title: "AI Innovation",
    description:
      "Pioneering AI solutions at ThinkFlowGPT, focusing on intelligent automation and natural language processing.",
  },
  {
    icon: Code2,
    title: "Full-Stack Excellence",
    description:
      "Building scalable applications with modern technologies and best practices in web development.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Transforming complex challenges into elegant, efficient, and user-centric solutions.",
  },
  {
    icon: Rocket,
    title: "Leadership",
    description:
      "Co-founding amTop and leading teams to deliver impactful technological solutions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground">
              Gaurav Upadhyay is the Founder of ThinkFlowGPT, an AI-driven workflow automation startup revolutionizing business processes with intelligent automation. A passionate software developer and AI enthusiast, he is dedicated to building innovative, user-centric solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} type="scale" delay={index * 0.1}>
              <Card className="p-6 h-full hover:bg-primary/5 transition-colors">
                <item.icon className="w-10 h-10 text-primary mb-4" />
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
          <h3 className="text-2xl font-semibold mb-2">Technical Expertise</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My diverse skill set enables me to deliver comprehensive solutions
            across the entire technology stack.
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
