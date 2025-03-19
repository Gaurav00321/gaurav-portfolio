"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    const stars: { x: number; y: number; radius: number; speed: number }[] = []
    const isMobile = window.innerWidth < 768
    const starCount = Math.floor((canvas.width * canvas.height) / (isMobile ? 3000 : 2000)) // Adjust density for mobile
    const maxRadius = isMobile ? 1.5 : 2

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * maxRadius,
        speed: 0.05 + Math.random() * 0.1,
      })
    }

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 100

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background gradient
      const bgColor = theme === "dark" ? "#000" : "#f8fafc"
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      stars.forEach((star) => {
        // Calculate distance from mouse
        const dx = mouseX - star.x
        const dy = mouseY - star.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Move stars away from mouse
        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx)
          const pushFactor = (1 - distance / mouseRadius) * 2
          star.x -= Math.cos(angle) * pushFactor
          star.y -= Math.sin(angle) * pushFactor
        }

        // Move stars
        star.y += star.speed

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = theme === "dark" ? "#fff" : "#334155"
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

