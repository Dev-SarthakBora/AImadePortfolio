"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Turning Data Into <span className="text-primary">Insights</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about extracting meaningful insights from data and solving real-world problems through
                analytics. My journey in data science combines technical expertise with a curiosity for understanding
                patterns and trends that drive business decisions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently building strong foundations in Python, SQL, and data analytics workflows, I focus on creating
                clean, interpretable analyses that tell compelling stories with data. I believe that great data analysis
                is not just about the numbers—it's about making complex information accessible and actionable.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">Data Storytelling</Badge>
                <Badge variant="secondary">Problem Solving</Badge>
                <Badge variant="secondary">Continuous Learning</Badge>
                <Badge variant="secondary">Analytics</Badge>
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">SB</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Data Analytics Focus</h3>
                    <p className="text-muted-foreground text-sm">
                      Specializing in data cleaning, exploratory analysis, and visualization
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">3+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
