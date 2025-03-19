"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Gaurav was an absolute pleasure. His technical expertise and attention to detail resulted in a product that exceeded our expectations. He was responsive, proactive, and delivered on time.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at StartupX",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Gaurav is one of the most talented developers I've worked with. His ability to understand complex requirements and translate them into elegant solutions is remarkable. He's a valuable asset to any team.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead at CreativeStudio",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As a designer, I appreciate developers who can bring my designs to life exactly as envisioned. Gaurav did that and more, adding thoughtful interactions that enhanced the user experience.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder at WebSolutions",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "We hired Gaurav for a complex web application project, and he delivered exceptional results. His technical skills, communication, and problem-solving abilities made the development process smooth and efficient.",
  },
  {
    id: 5,
    name: "Lisa Patel",
    role: "Marketing Director at GrowthCo",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Our website redesign project was in capable hands with Gaurav. He understood our business goals and created a site that not only looks great but also performs exceptionally well. Our conversion rates have improved significantly.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay on hover or touch
  const handleInteractionStart = () => setAutoplay(false);
  const handleInteractionEnd = () => setAutoplay(true);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    handleInteractionStart();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleInteractionEnd();
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left
      handleNext();
    } else {
      // Swiped right
      handlePrev();
    }
  };

  return (
    <section id="testimonials" className="py-8 md:py-20 bg-muted/50">
      <div className="w-full md:container md:max-w-6xl md:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-16 px-4 md:px-0"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Client Testimonials
          </h2>
          <div className="h-1 w-16 md:w-20 bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground md:max-w-3xl mx-auto">
            Hear what my clients have to say about working with me.
          </p>
        </motion.div>

        <div
          className="relative w-full md:max-w-4xl md:mx-auto"
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="border-none shadow-lg bg-background/60 backdrop-blur-sm rounded-lg mx-2 md:mx-0">
                    <CardContent className="p-4 md:p-8">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm md:text-base truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground truncate mb-2">
                            {testimonial.role}
                          </p>
                          <Quote className="h-4 w-4 text-primary/20 mb-1" />
                          <p className="text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                            "{testimonial.content}"
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background z-10"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background z-10"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile navigation indicators */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-1.5 md:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 md:w-2.5 h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-4 md:w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe indicator for mobile - Only shown on touch devices */}
          <div className="mt-3 text-center text-xs text-muted-foreground md:hidden">
            Swipe to see more testimonials
          </div>
        </div>
      </div>
    </section>
  );
}
