"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BarChart3, Users, Car } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Campus Connect",
      description:
        "A multi-campus collaboration platform to share events and academic details. Built with Node.js, Python, and deployed with Vercel.",
      icon: Users,
      tags: ["Node.js", "Python", "Vercel", "Collaboration"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
      features: [
        "Multi-campus event sharing",
        "Academic resource management",
        "Real-time collaboration tools",
        "Responsive web design",
      ],
    },
    {
      title: "Retail Sales Analytics",
      description:
        "An end-to-end data analytics project analyzing sales trends, customer behavior, and forecasting future performance.",
      icon: BarChart3,
      tags: ["Python", "pandas", "matplotlib", "Analytics"],
      color: "text-green-500",
      bgColor: "bg-green-500/20",
      features: ["Sales trend analysis", "Customer segmentation", "Predictive forecasting", "Interactive dashboards"],
    },
    {
      title: "Auto MPG Dataset Analysis",
      description:
        "Data cleaning, exploratory analysis, and visualization to understand fuel efficiency patterns in automotive data.",
      icon: Car,
      tags: ["Python", "EDA", "Visualization", "Data Cleaning"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/20",
      features: [
        "Comprehensive data cleaning",
        "Statistical analysis",
        "Fuel efficiency insights",
        "Data visualization",
      ],
    },
  ]

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
    <section id="projects" ref={sectionRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              My <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A collection of projects showcasing my skills in data analysis, web development, and problem-solving.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${project.bgColor} rounded-lg`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-accent">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
