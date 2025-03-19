"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

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
      className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="block">Building the Future</span>
            <span className="block text-primary">with Code & Creativity</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-6 max-w-lg mx-auto md:mx-0">
            Founder of ThinkFlowGPT and Co-founder at amTop, building scalable
            AI solutions that drive innovation and efficiency.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button size="lg" className="px-4 py-2 h-auto" asChild>
              <a
                href="https://drive.google.com/file/d/1VuJwX2qEYcfjUu1kv1tyOsZyLQt1Qxq7/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-4 py-2 h-auto"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
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
            className={cn(
              "relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden transition-all duration-200",
              "border-4 shadow-xl",
              theme === "dark" ? "border-primary/20" : "border-primary/10"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <img
              src="/Gaurav.png?height=400&width=400"
              alt="Gaurav's Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
