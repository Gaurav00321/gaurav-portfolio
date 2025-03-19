"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "fade" | "slide" | "scale";
}

export default function AnimatedSection({
  children,
  className,
  variants,
  delay = 0,
  direction = "up",
  type = "fade",
}: AnimatedSectionProps) {
  const { fadeIn, slideIn, scaleIn } = require("@/lib/animation");

  const getVariants = () => {
    if (variants) return variants;
    switch (type) {
      case "fade":
        return fadeIn(direction, delay);
      case "slide":
        return slideIn(direction, delay);
      case "scale":
        return scaleIn;
      default:
        return fadeIn(direction, delay);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getVariants()}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
