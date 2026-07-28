import { siteConfig } from "@/app/metadata"

export const projects = [
  {
    id: "aetheros",
    title: "AetherOS",
    description:
      "AI-native operating system concept and landing experience — voice-driven interaction and continuous learning at the OS layer.",
    image: "/aetheros-vid.gif",
    tags: ["Three.js", "React", "AI Systems"],
    category: "systems",
    demoUrl: "https://aether-os-landing-page.vercel.app",
    githubUrl: "https://github.com/gauravupadhyay-ai/AetherOS-landingPage",
    details:
      "AetherOS explores an AI-powered operating system where intelligence is native, voice-driven interaction is standard, and the system learns continuously.",
  },
  {
    id: "thinkflowgpt",
    title: "ThinkFlowGPT",
    description:
      "AI-driven workflow automation platform that replaces fragmented manual processes with intelligent, self-operating systems.",
    image: "/ThinkFlowGPT.png",
    tags: ["Next.js", "AI", "Automation", "NLP"],
    category: "ai",
    demoUrl: "https://thinkflowgpt.vercel.app",
    githubUrl: "https://github.com/gauravupadhyay-ai/thinkflow-gpt",
    details:
      "ThinkFlowGPT streamlines complex workflows with machine learning and natural language interfaces, helping businesses automate operations without losing human oversight.",
  },
  {
    id: "portfolio-3d",
    title: "3D Portfolio Experience",
    description:
      "Interactive portfolio with 3D elements, motion design, and responsive layout.",
    image: "/demo-portfolio.gif",
    tags: ["React", "Three.js", "Framer Motion"],
    category: "frontend",
    demoUrl: "https://3d-teams-portfolio.vercel.app",
    githubUrl: "https://github.com/gauravupadhyay-ai/3d-portfolio",
    details:
      "An immersive portfolio showcasing creative and engineering work through 3D viewers, smooth transitions, and responsive design.",
  },
  {
    id: "tearable-cloth",
    title: "Tearable Cloth Simulation",
    description:
      "Canvas-based cloth physics with tearable interactions and realistic deformation.",
    image: "/interactiveTearableSimulation.gif",
    tags: ["JavaScript", "Canvas", "Physics"],
    category: "simulation",
    demoUrl:
      "https://gaurav00321.github.io/InteractiveTearableClothSimulation/",
    githubUrl:
      "https://github.com/gauravupadhyay-ai/InteractiveTearableClothSimulation",
    details:
      "Interactive cloth simulation using Verlet-style physics, supporting tearing and user-driven forces.",
  },
  {
    id: "cloth-3d",
    title: "3D Cloth Simulation",
    description:
      "Three.js cloth simulation modeling stretch, gravity, and external forces.",
    image: "/clothSimulation.gif",
    tags: ["Three.js", "Physics", "WebGL"],
    category: "simulation",
    demoUrl: "https://gaurav00321.github.io/3D-ClothSimulation",
    githubUrl: "https://github.com/gauravupadhyay-ai/3D-ClothSimulation",
    details:
      "Physics-based 3D cloth using Verlet integration under gravity and interactive constraints.",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "Classic game with AI and multiplayer modes, score tracking, and clean UI.",
    image: "/tic_tac_toe.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    demoUrl: "https://gaurav00321.github.io/tic-tac-toeJS/",
    githubUrl: "https://github.com/gauravupadhyay-ai/tic-tac-toeJS",
    details:
      "Single-player and multiplayer Tic Tac Toe with win detection, scoring, and responsive board.",
  },
] as const

export const companies = [
  {
    id: "amtop",
    name: "amTop",
    role: "Co-Founder & Chief Scientist",
    status: "Active",
    url: "https://www.crunchbase.com/person/gaurav-upadhyay-061c",
    summary:
      "Agentic AI for marketing automation — systems that plan, execute, and optimize campaigns for startups at scale.",
    focus: [
      "Autonomous campaign agents",
      "Trend forecasting",
      "ROI optimization",
      "Marketing automation at scale",
    ],
  },
  {
    id: "thinkflowgpt",
    name: "ThinkFlowGPT",
    role: "Founder",
    status: "Active",
    url: "https://thinkflowgpt.vercel.app",
    summary:
      "AI-driven workflow automation for growing businesses — intelligent processes that replace fragmented manual work.",
    focus: [
      "Workflow automation",
      "LLM-powered assistants",
      "Business process intelligence",
    ],
  },
  {
    id: "aetheros",
    name: "AetherOS",
    role: "Creator",
    status: "R&D",
    url: "https://aether-os-landing-page.vercel.app",
    summary:
      "Research and product exploration toward an AI-native operating system with voice-first interaction.",
    focus: ["AI-native OS", "Voice interfaces", "Adaptive systems"],
  },
] as const

/** Research focus — honest agenda (formal papers listed when published) */
export const researchAreas = [
  {
    id: "agentic-marketing",
    title: "Agentic Marketing Systems",
    status: "Active research",
    summary:
      "Architecture for agents that plan, execute, and optimize marketing campaigns with minimal human oversight — core R&D at amTop.",
    topics: ["Multi-agent planning", "Campaign optimization", "ROI feedback loops"],
  },
  {
    id: "workflow-automation",
    title: "Intelligent Workflow Automation",
    status: "Active research",
    summary:
      "Replacing fragmented business processes with adaptive AI workflows — the technical foundation of ThinkFlowGPT.",
    topics: ["LLM orchestration", "Process mining", "Human-in-the-loop control"],
  },
  {
    id: "distributed-ai",
    title: "Distributed & Systems-Level AI",
    status: "Ongoing study",
    summary:
      "Intersection of distributed computing, neural networks, and full-stack systems for production agentic products.",
    topics: ["Distributed computing", "Neural networks", "Production ML systems"],
  },
] as const

export const faqs = [
  {
    question: "Who is Gaurav Upadhyay?",
    answer:
      "Gaurav Upadhyay is Co-Founder & Chief Scientist at amTop and Founder of ThinkFlowGPT. He builds agentic AI systems for marketing and business automation, and is pursuing an Integrated Master's in AI (IMCA) at Parul University.",
  },
  {
    question: "What does Gaurav Upadhyay do at amTop?",
    answer:
      "As Co-Founder and Chief Scientist, he leads research and technical architecture for autonomous marketing agents designed to plan, execute, and optimize campaigns for startups at scale.",
  },
  {
    question: "What is ThinkFlowGPT?",
    answer:
      "ThinkFlowGPT is an AI-driven workflow automation startup founded by Gaurav Upadhyay, focused on giving businesses intelligent, self-operating processes.",
  },
  {
    question: "Where is Gaurav Upadhyay based?",
    answer: "Vadodara, Gujarat, India.",
  },
  {
    question: "How can I contact Gaurav Upadhyay?",
    answer: `Email ${siteConfig.email}, connect on LinkedIn (${siteConfig.links.linkedin}), or use the contact form at ${siteConfig.url}/contact.`,
  },
  {
    question: "What is Gaurav Upadhyay known for?",
    answer:
      "Agentic AI for marketing automation at amTop, founding ThinkFlowGPT, and building full-stack AI products spanning React/Next.js, Python, and distributed systems.",
  },
] as const

export const aboutHighlights = [
  {
    title: "Agentic marketing AI",
    body: "At amTop, leading architecture for agents that run campaigns — not just assist them.",
  },
  {
    title: "Workflow automation",
    body: "At ThinkFlowGPT, replacing fragmented manual processes with systems that get work done.",
  },
  {
    title: "Engineering depth",
    body: "Full-stack (React, Next.js, TypeScript), systems (Java, C++, Python), and neural networks.",
  },
] as const
