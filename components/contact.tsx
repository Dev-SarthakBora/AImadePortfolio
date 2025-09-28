"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "borasarthak275@gmail.com",
      href: "mailto:borasarthak275@gmail.com",
      color: "text-red-500",
      bgColor: "bg-red-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Dev-SarthakBora",
      href: "https://github.com/Dev-SarthakBora",
      color: "text-gray-400",
      bgColor: "bg-gray-400/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sarthak-bora",
      href: "https://linkedin.com/in/sarthak-bora",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
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
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always interested in discussing data analytics opportunities, collaborating on projects, or just
              having a conversation about data science.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      Ready to Collaborate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Whether you're looking for a data analyst, have a project in mind, or want to discuss the latest
                      trends in data science, I'd love to hear from you.
                    </p>

                    <div className="space-y-4">
                      {contactMethods.map((method, index) => (
                        <div key={method.label} className="flex items-center gap-4">
                          <div className={`p-2 ${method.bgColor} rounded-lg`}>
                            <method.icon className={`w-4 h-4 ${method.color}`} />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{method.label}</div>
                            <a
                              href={method.href}
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {method.value}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Currently Learning</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-primary/30">
                        Machine Learning
                      </Badge>
                      <Badge variant="outline" className="border-accent/30">
                        Advanced SQL
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        Tableau
                      </Badge>
                      <Badge variant="outline" className="border-accent/30">
                        Power BI
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <div className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Start a Conversation</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      I'm always open to discussing new opportunities, sharing insights about data analytics, or
                      exploring potential collaborations.
                    </p>
                    <Button size="lg" className="w-full animate-pulse-glow" asChild>
                      <a href="mailto:borasarthak275@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send me an email
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="lg" className="h-16 bg-transparent" asChild>
                    <a href="https://github.com/Dev-SarthakBora" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="h-16 bg-transparent" asChild>
                    <a href="https://linkedin.com/in/sarthak-bora" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© 2025 Sarthak Bora. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
