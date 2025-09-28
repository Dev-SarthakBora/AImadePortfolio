"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Zap, TrendingUp } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white/80" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float-reverse">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Zap className="w-6 h-6 text-white/80" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float">
        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <TrendingUp className="w-7 h-7 text-white/80" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${mounted ? "animate-slide-up" : "opacity-0"}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance text-white">
            <span className="animate-scale-in">Sarthak</span>{" "}
            <span className="gradient-text-blue animate-scale-in" style={{ animationDelay: "200ms" }}>
              Bora
            </span>
          </h1>

          <p
            className="text-2xl md:text-3xl text-white/90 mb-4 font-light animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            Aspiring Data Analyst
          </p>

          <p
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty animate-slide-up"
            style={{ animationDelay: "600ms" }}
          >
            I'm passionate about extracting insights from data, solving real-world problems, and continuously improving
            my skills in analytics and visualization. Currently building strong foundations in Python, SQL, and data
            analytics workflows.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "800ms" }}
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="glass-card text-white border-white/30 hover:bg-white/20 animate-pulse-glow"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/50 text-white hover:bg-white/10 hover:border-white/80 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  )
}
