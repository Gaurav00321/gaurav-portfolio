"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import AnimatedSection from "@/components/ui/animated-section";
import { staggerContainer } from "@/lib/animation";

const projects = [
  {
    id: 1,
    title: "ThinkFlowGPT",
    description:
      "An advanced AI-driven workflow automation system designed to enhance business efficiency and student productivity.",
    image: "/ThinkFlowGPT.png?height=600&width=800",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "PrismaDB",
      "TensorFlow",
      "Deep Learning",
      "Fine-tuning",
    ],
    category: "fullstack",
    demoUrl: "#",
    githubUrl: "#",
    details:
      "ThinkFlowGPT is an AI-powered innovation designed to redefine automation and intelligent decision-making. Built with cutting-edge machine learning and natural language processing, it streamlines complex workflows, optimizes efficiency, and empowers businesses to scale effortlessly. ThinkFlowGPT isn’t just an AI tool—it’s a vision for the future, where automation adapts, learns, and enhances productivity without replacing human ingenuity.",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A creative portfolio website with 3D elements and interactive animations.",
    image: "/Portfolio-image.png?height=600&width=800",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    category: "frontend",
    demoUrl: "https://gauravupadhyay.vercel.app/",
    githubUrl: "https://github.com/Gaurav00321/gaurav-portfolio",
    details:
      "This portfolio website showcases creative work through an immersive user experience. Features include 3D model viewers using Three.js, smooth page transitions with Framer Motion, responsive design with Tailwind CSS, and a custom-built contact form with validation.",
  },
  {
    id: 3,
    title: "3D Teams",
    description: "A 3D team management system built using Three.js and React.",
    image: "/3D_Teams.png?height=600&width=800",
    tags: ["Three.js", "JavaScript", "HTML5", "CSS3"],
    category: "frontend",
    demoUrl: "https://3d-teams.vercel.app",
    githubUrl: "https://github.com/Gaurav00321/3D-Teams",
    details:
      "A flexible headless CMS that allows content creators to manage digital content through a user-friendly interface. Features include content modeling with custom fields, role-based access control, RESTful and GraphQL APIs for content delivery, media management, and versioning system for content changes.",
  },
  {
    id: 4,
    title: "Tearable Cloth Simulation",
    description:
      "A dynamic 3D cloth simulation built using HTML5 Canvas and JavaScript, featuring tearable interactions and realistic cloth physics.",
    image: "/interactiveTearableSimulation.gif?height=600&width=800",
    tags: ["HTML5", "JavaScript", "Canvas", "CSS3", "Physics"],
    category: "frontend",
    demoUrl:
      "https://gaurav00321.github.io/InteractiveTearableClothSimulation/",
    githubUrl:
      "https://github.com/Gaurav00321/InteractiveTearableClothSimulation",
    details:
      "A dynamic 3D cloth simulation built using HTML5 Canvas and JavaScript, featuring tearable interactions and realistic cloth physics.",
  },
  {
    id: 5,
    title: "3D Cloth Simulation",
    description:
      "This project demonstrates a 3D cloth simulation using the Three.js library.",
    image: "/clothSimulation.gif?height=600&width=800",
    tags: ["Three.js", "JavaScript", "HTML5", "CSS3", "Physics"],
    category: "frontend",
    demoUrl: "https://gaurav00321.github.io/3D-ClothSimulation/",
    githubUrl: "https://github.com/Gaurav00321/3D-ClothSimulation",
    details:
      "The simulation replicates realistic cloth behavior such as deformation, stretching, and interaction with external forces. The project leverages physics-based principles, specifically Verlet integration, to model the behavior of cloth under gravity and user interaction.",
  },
  {
    id: 6,
    title: "Tic Tac Toe Game",
    description:
      "A simple and fun Tic Tac Toe game built using HTML, CSS, and JavaScript.",
    image: "/tic_tac_toe.png?height=600&width=800",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    demoUrl: "https://gaurav00321.github.io/tic-tac-toeJS/",
    githubUrl: "https://github.com/Gaurav00321/tic-tac-toeJS",
    details:
      "This weather dashboard provides users with current conditions and forecasts based on their location. Features include current weather conditions, 5-day forecast, historical weather data visualization with Chart.js, location search functionality, and responsive design for all devices.",
  },
];

export default function Projects() {
  const [category, setCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section id="projects" className="py-16 px-4 bg-secondary/20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto"
      >
        <AnimatedSection
          type="fade"
          direction="up"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in building modern web applications.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} type="scale" delay={index * 0.1}>
              <Card className="group overflow-hidden h-full">
                <div className="relative aspect-video cursor-pointer">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
                      <DialogHeader className="pb-4 mb-4 border-b relative">
                        <DialogTitle className="text-2xl font-bold pr-12">
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6 overflow-y-scroll dialog-scrollbar pr-6 max-h-[calc(90vh-8rem)]">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full aspect-video object-cover rounded-lg"
                        />
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            {project.details || project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-primary/10 text-primary hover:bg-primary/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-4 pt-4">
                            <Button asChild>
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                View Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Github className="h-4 w-4" />
                                View Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
