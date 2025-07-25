"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import { staggerContainer } from "@/lib/animation";

const certifications = [
  {
    year: "2024",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    description:
      "Validated expertise in designing and deploying scalable systems on AWS, with a focus on security, reliability, and best practices.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    description:
      "Demonstrated ability to design, build, operationalize, secure, and monitor data processing systems on Google Cloud Platform.",
    icon: Award,
  },
  {
    year: "2022",
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    description:
      "Proven skills in using Azure AI services, including natural language processing, computer vision, and conversational AI.",
    icon: Award,
  },
  {
    year: "2021",
    title: "Postman Student Expert",
    issuer: "Postman",
    description:
      "Recognized for proficiency in API development, testing, and automation using Postman tools.",
    icon: Award,
  },
];

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="py-16 px-4 bg-background w-full">
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
          <h2 id="certifications-heading" className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my professional certifications, demonstrating my commitment to continuous learning and expertise in technology. <a href="#projects" className="underline text-primary font-medium">See related AI and web projects</a>.
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
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } relative z-10`}
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
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
                          {cert.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1" itemProp="name">{cert.title}</h3>
                      <p className="text-muted-foreground mb-3" itemProp="issuer">{cert.issuer}</p>
                      <p className="text-sm" itemProp="description">{cert.description}</p>
                      <Badge
                        variant="outline"
                        className="mt-4 bg-amber-500/10 text-amber-500"
                      >
                        Certification
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Center icon - visible on all screens */}
                <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                    <cert.icon className="h-5 w-5 text-primary" />
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