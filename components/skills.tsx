"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, BarChart3, Wrench, Sparkles } from "lucide-react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      gradient: "from-pink-400 via-purple-500 to-indigo-500",
      skills: [
        {
          name: "Python",
          tools: ["pandas", "NumPy", "matplotlib"], // removed scikit-learn
          description: "Data manipulation & analysis",
        },
        {
          name: "SQL",
          tools: ["MySQL", "Complex Queries"], // removed PostgreSQL
          description: "Database querying & optimization",
        },
        {
          name: "Excel",
          tools: ["Pivot Tables", "Conditional Formatting", "Charts & Graphs"], // Reduced Excel tools to only these three essential ones
          description: "Advanced spreadsheet analysis & visualization",
        },
      ],
    },
    {
      title: "Data Analytics",
      icon: BarChart3,
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      skills: [
        {
          name: "Data Cleaning",
          tools: ["pandas", "Data Validation"], // removed OpenRefine
          description: "Preprocessing & quality assurance",
        },
        {
          name: "EDA",
          tools: ["matplotlib", "seaborn", "Statistical Analysis"],
          description: "Exploratory data analysis",
        },
        {
          name: "Visualization",
          tools: ["Plotly", "Tableau", "Power BI"],
          description: "Interactive dashboards & reports",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      gradient: "from-orange-400 via-red-500 to-pink-500",
      skills: [
        {
          name: "Jupyter Notebook",
          tools: ["IPython", "JupyterLab", "Google Colab"],
          description: "Interactive development environment",
        },
        {
          name: "GitHub",
          tools: ["Git", "Version Control", "Collaboration"],
          description: "Code management & collaboration",
        },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      skills: [
        {
          name: "Relational DB",
          tools: ["MySQL", "Schema Design"], // removed PostgreSQL
          description: "Database design & management",
        },
        {
          name: "Data Modeling",
          tools: ["ERD", "Normalization", "Relationships"],
          description: "Structural data organization",
        },
        {
          name: "Query Optimization",
          tools: ["Indexing", "Performance Tuning"],
          description: "Efficient data retrieval",
        },
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
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 relative"
      style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Technical Skills</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white">
              My <span className="gradient-text-blue">Toolkit</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto text-pretty">
              A comprehensive set of tools and technologies for data analysis, visualization, and building data-driven
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="glass-card border-white/20 hover:border-white/40 transition-all duration-500"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div
                      className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="group-hover:text-white/90 transition-colors duration-300">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill p-4 rounded-lg glass-card border-white/10 hover:border-white/30 transition-all duration-300"
                      style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white group-hover/skill:text-white/90 transition-colors duration-300 mb-2">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-white/70 mb-3">{skill.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="secondary"
                            className="text-xs bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors duration-300 cursor-default border-white/20"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
