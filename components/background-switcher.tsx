"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StarfieldBackground from "@/components/backgrounds/starfield"
import FluidParticlesBackground from "@/components/backgrounds/fluid-particles"
import WavesBackground from "@/components/backgrounds/waves"

type BackgroundType = "starfield" | "particles" | "waves"

export default function BackgroundSwitcher() {
  const [activeBackground, setActiveBackground] = useState<BackgroundType>("starfield")
  const [isVisible, setIsVisible] = useState(true)

  // Hide controls after 5 seconds of inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const resetTimeout = () => {
      clearTimeout(timeout)
      setIsVisible(true)
      timeout = setTimeout(() => setIsVisible(false), 5000)
    }

    resetTimeout()
    window.addEventListener("mousemove", resetTimeout)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("mousemove", resetTimeout)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 -z-10">
        {activeBackground === "starfield" && <StarfieldBackground />}
        {activeBackground === "particles" && <FluidParticlesBackground />}
        {activeBackground === "waves" && <WavesBackground />}
      </div>

      <div
        className={`fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Tabs
          defaultValue="starfield"
          value={activeBackground}
          onValueChange={(value) => setActiveBackground(value as BackgroundType)}
          className="bg-background/80 backdrop-blur-md rounded-full shadow-lg p-1"
        >
          <TabsList className="h-auto">
            <TabsTrigger value="starfield" className="text-xs px-2 py-1 h-auto">
              Starfield
            </TabsTrigger>
            <TabsTrigger value="particles" className="text-xs px-2 py-1 h-auto">
              Particles
            </TabsTrigger>
            <TabsTrigger value="waves" className="text-xs px-2 py-1 h-auto">
              Waves
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  )
}

