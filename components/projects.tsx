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
  DialogFooter,
} from "@/components/ui/dialog";
import AnimatedSection from "@/components/ui/animated-section";
import { staggerContainer } from "@/lib/animation";
import Image from "next/image";

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
      "ThinkFlowGPT is an AI-powered innovation designed to redefine automation and intelligent decision-making. Built with cutting-edge machine learning and natural language processing, it streamlines complex workflows, optimizes efficiency, and empowers businesses to scale effortlessly. ThinkFlowGPT isn't just an AI tool—it's a vision for the future, where automation adapts, learns, and enhances productivity without replacing human ingenuity.",
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
      "3D Teams is a premium web service dedicated to building stunning, interactive 3D websites for companies and customers. We specialize in crafting immersive digital experiences that blend cutting-edge 3D design, animation, and web development to elevate brands and captivate audiences. Our team ensures seamless performance, responsiveness, and customization, delivering visually striking websites that stand out in the digital landscape. ",
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
                    alt={`${project.title} - Project Screenshot`}
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
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                          src={project.image}
                          alt={`${project.title} - Project Screenshot`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold">Key Features</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {project.details.split(". ").map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Close</Button>
                        </DialogClose>
                      </DialogFooter>
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
