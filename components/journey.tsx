"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import { staggerContainer } from "@/lib/animation";

const journeyItems = [
    {
    year: "2025 - Present",
    title: "Creator",
    organization: "AetherOS",
    description:
      "At AetherOS, my mission is to build an AI-powered operating system from scratch—where intelligence is native, voice-driven interaction is standard, and the system learns continuously. I envision a future where operating systems understand intent, automate proactively, and adapt to user behavior in real-time. Let’s reimagine computing with AI at the core, making it more personal, powerful, and human.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2025 - Present",
    title: "Founder",
    organization: "ThinkFLowGPT.",
    description:
      "At ThinkFlowGPT, my mission is to advance AI-driven workflow automation, ensuring our technology remains intelligent, adaptive, and impactful. I envision a future where AI enhances decision-making and streamlines complex processes, making automation more efficient, reliable, and accessible. Let's push the boundaries of AI and redefine how businesses operate.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2024",
    title: "Student Expert Badge",
    organization: "Postman API",
    description:
      "Recognized for contributions to API development and for earning the Postman API Fundamentals badge, showcasing expertise in building and testing efficient APIs.",
    icon: Award,
    type: "achievement",
  },
  {
    year: "2023 - present",
    title: "Integrated Master's in Computer Science - AI",
    organization: "Parul University",
    description:
      "Currently pursuing an Integrated Master of Computer Applications (IMCA) – AI, specializing in Artificial Intelligence, Software Engineering, and Human-Computer Interaction.",
    icon: GraduationCap,
    type: "education",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" aria-labelledby="journey-heading" className="py-16 px-4 bg-secondary/20 w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container w-full max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my professional path and key milestones that have shaped my
            career in technology.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted-foreground/20 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } relative z-10`}
              >
                {/* Content for mobile (always full width) and desktop (alternating) */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:text-left md:pl-8"
                  } mb-4 md:mb-0`}
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-start">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground mb-3">
                        {item.organization}
                      </p>
                      <p className="text-sm">{item.description}</p>
                      <Badge
                        variant="outline"
                        className={`mt-4 ${
                          item.type === "work"
                            ? "bg-blue-500/10 text-blue-500"
                            : item.type === "education"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-amber-500/10 text-amber-500"
                        }`}
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Center icon - visible on all screens */}
                <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Empty space for alternating layout - only on desktop */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
