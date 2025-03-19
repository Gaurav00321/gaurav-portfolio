"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

export default function WavesBackground() {
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

    // Wave properties
    const waves = [
      { amplitude: 25, period: 500, phase: 0, color: "#3b82f6" }, // Blue
      { amplitude: 20, period: 300, phase: 2, color: "#8b5cf6" }, // Purple
      { amplitude: 15, period: 200, phase: 4, color: "#ec4899" }, // Pink
    ]

    // Scroll position for wave movement
    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY * 0.1
    }

    window.addEventListener("scroll", handleScroll)

    // Mouse interaction
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas
      ctx.fillStyle = theme === "dark" ? "#000" : "#f8fafc"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach((wave, index) => {
        ctx.beginPath()

        // Start at the left edge
        ctx.moveTo(0, canvas.height / 2)

        // Draw wave points
        for (let x = 0; x < canvas.width; x += 5) {
          // Calculate wave height based on position, time, and mouse
          const distanceToMouse = Math.abs(x - mouseX)
          const mouseInfluence = Math.max(0, 1 - distanceToMouse / 200) * 15

          const y =
            canvas.height / 2 +
            Math.sin(x / wave.period + time + wave.phase + scrollY * 0.01) * (wave.amplitude + mouseInfluence)

          ctx.lineTo(x, y)
        }

        // Complete the wave path
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        // Fill with gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, wave.color + "10")
        gradient.addColorStop(1, wave.color + "40")

        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

