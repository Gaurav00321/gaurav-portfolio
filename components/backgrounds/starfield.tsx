"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

interface Star {
  x: number
  y: number
  radius: number
  speed: number
  isShooting?: boolean
  trail: { x: number; y: number }[]
  angle?: number
  lifespan: number
  brightness: number
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with pixel ratio for better quality
    const setCanvasDimensions = () => {
      const pixelRatio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * pixelRatio
      canvas.height = window.innerHeight * pixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(pixelRatio, pixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    const stars: Star[] = []
    const isMobile = window.innerWidth < 768
    const starCount = Math.floor((canvas.width * canvas.height) / (isMobile ? 3000 : 2000))
    const maxRadius = isMobile ? 1.5 : 2

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * maxRadius,
        speed: 0.05 + Math.random() * 0.1,
        trail: [],
        lifespan: 100,
        brightness: Math.random() * 0.5 + 0.5
      })
    }

    // Shooting star properties
    const createShootingStar = () => {
      const angle = Math.PI / 4 + (Math.random() * Math.PI) / 2
      return {
        x: Math.random() * canvas.width,
        y: 0,
        radius: 2,
        speed: 5 + Math.random() * 7,
        isShooting: true,
        trail: [],
        angle,
        lifespan: 100,
        brightness: 1
      }
    }

    // Mouse tracking with inertia
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    const mouseRadius = 150
    const mouseInertia = 0.1

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    let animationId: number
    let frameCount = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update mouse position with inertia
      mouseX += (targetX - mouseX) * mouseInertia
      mouseY += (targetY - mouseY) * mouseInertia

      // Background gradient
      const bgColor = theme === "dark" ? "#000" : "#f8fafc"
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create new shooting star randomly
      if (Math.random() < 0.01) {
        stars.push(createShootingStar())
      }

      // Draw and update stars
      stars.forEach((star, index) => {
        if (star.isShooting) {
          // Update shooting star
          star.x += Math.cos(star.angle!) * star.speed
          star.y += Math.sin(star.angle!) * star.speed
          
          // Update trail with fade effect
          star.trail.unshift({ x: star.x, y: star.y })
          if (star.trail.length > 20) star.trail.pop()

          // Draw shooting star and trail with glow effect
          ctx.beginPath()
          ctx.shadowBlur = 10
          ctx.shadowColor = theme === "dark" ? "white" : "#334155"
          
          star.trail.forEach((point, i) => {
            const alpha = (1 - i / star.trail.length) * 0.5
            ctx.strokeStyle = theme === "dark" 
              ? `rgba(255, 255, 255, ${alpha})`
              : `rgba(51, 65, 85, ${alpha})`
            if (i === 0) {
              ctx.moveTo(point.x, point.y)
            } else {
              ctx.lineTo(point.x, point.y)
            }
          })
          ctx.stroke()
          ctx.shadowBlur = 0

          // Remove if off screen or lifespan ended
          star.lifespan--
          if (star.y > canvas.height || star.x > canvas.width || star.x < 0 || star.lifespan <= 0) {
            stars.splice(index, 1)
          }
        } else {
          // Calculate distance from mouse
          const dx = mouseX - star.x
          const dy = mouseY - star.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Move stars away from mouse with smooth transition
          if (distance < mouseRadius) {
            const angle = Math.atan2(dy, dx)
            const pushFactor = (1 - distance / mouseRadius) * 2
            const easing = 0.1
            star.x -= Math.cos(angle) * pushFactor * easing
            star.y -= Math.sin(angle) * pushFactor * easing
          }

          // Move stars with parallax effect
          star.y += star.speed * (1 + star.radius / maxRadius)

          // Reset stars that go off screen
          if (star.y > canvas.height) {
            star.y = 0
            star.x = Math.random() * canvas.width
          }

          // Draw star with twinkle and glow effect
          const twinkle = Math.sin(frameCount * 0.05 + star.x) * 0.3 + 0.7
          const brightness = star.brightness * twinkle

          ctx.beginPath()
          ctx.shadowBlur = star.radius * 2
          ctx.shadowColor = theme === "dark" ? "white" : "#334155"
          ctx.arc(star.x, star.y, star.radius * brightness, 0, Math.PI * 2)
          ctx.fillStyle = theme === "dark" 
            ? `rgba(255, 255, 255, ${brightness})`
            : `rgba(51, 65, 85, ${brightness})`
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      frameCount++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
    />
  )
}

