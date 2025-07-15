"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Globe, Search, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  const { theme } = useTheme();
  const profileRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect for profile image
  useEffect(() => {
    const profile = profileRef.current;
    if (!profile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = profile.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      profile.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${y * -10}deg)
        translateZ(10px)
      `;
    };

    const handleMouseLeave = () => {
      profile.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0px)
      `;
    };

    profile.addEventListener("mousemove", handleMouseMove);
    profile.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      profile.removeEventListener("mousemove", handleMouseMove);
      profile.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4 w-full overflow-x-hidden"
    >
      <div className="container w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              SEO Expert
            </span>
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Web Developer
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="block">Crafting Digital</span>
            <span className="block text-primary">Success Stories</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-6 max-w-lg mx-auto md:mx-0">
            SEO strategist and full-stack developer helping businesses achieve
            higher rankings and exceptional user experiences through optimized,
            performant web solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8">
            <Button
              size="lg"
              className="px-6 py-3 h-auto flex items-center gap-2 text-lg"
              asChild
            >
              <a href="#projects">
                View Portfolio
                <Rocket className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 py-3 h-auto flex items-center gap-2 text-lg group"
              asChild
            >
              <a href="https://drive.google.com/file/d/17eDR63AnfRxm3dxUPqQilglwI0noz5JI/view?usp=sharing" target="_blank">
                Download Resume
                <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Search className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm font-medium">SEO</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Code className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm font-medium">Development</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Globe className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm font-medium">Analytics</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0"
        >
          <div
            ref={profileRef}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <Image
              src="/Gaurav.png"
              alt="Gaurav's Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 animate-bounce"
      >
        <Button
          variant="ghost"
          size="icon"
          aria-label="Scroll down"
          asChild
        >
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
