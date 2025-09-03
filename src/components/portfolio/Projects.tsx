import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Play, 
  Users, 
  Zap, 
  Monitor,
  Smartphone,
  Home,
  Brain,
  Mail
} from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brilliant AI-Driven Learning Platform",
      description: "Comprehensive web application leveraging AI to personalize learning experiences for students. Features adaptive content delivery, progress tracking, and intelligent recommendations.",
      longDescription: "A revolutionary learning platform that uses machine learning algorithms to analyze student behavior and adapt content difficulty in real-time. Improved learning outcomes for 500+ students with a 40% increase in completion rates.",
      image: "🧠",
      category: "AI/Education",
      technologies: ["React.js", "Python", "TensorFlow", "Node.js", "PostgreSQL", "Redis"],
      github: "https://github.com/natnael-dejene/brilliant-learning",
      demo: "https://brilliant-learning.vercel.app",
      impact: "500+ active users, 40% improvement in learning outcomes",
      status: "Production"
    },
    {
      id: 2,
      title: "Web-based Linux Performance Monitor",
      description: "Real-time system monitoring tool with interactive dashboards for Linux servers. Provides comprehensive insights into CPU, memory, disk, and network performance.",
      longDescription: "Built a sophisticated monitoring solution that provides real-time system metrics, alerts, and predictive analytics for Linux infrastructure.",
      image: "📊",
      category: "DevOps/Monitoring",
      technologies: ["React.js", "Node.js", "Socket.io", "Chart.js", "Express.js", "Linux"],
      github: "https://github.com/natnael-dejene/linux-monitor",
      demo: "https://linux-monitor.herokuapp.com",
      impact: "Real-time performance insights for development teams",
      status: "Production"
    },
    {
      id: 3,
      title: "University Learning Management System",
      description: "Complete LMS solution for educational institutions with course management, assignment submission, grading system, and real-time communication features.",
      longDescription: "Developed a comprehensive LMS platform that streamlines academic processes. Features include video conferencing integration, automated grading, and analytics dashboard for educators.",
      image: "📚",
      category: "Education",
      technologies: ["Django", "React.js", "PostgreSQL", "WebRTC", "Docker", "AWS"],
      github: "https://github.com/natnael-dejene/university-lms",
      demo: "https://university-lms.demo.com",
      impact: "Comprehensive academic workflow management",
      status: "Beta"
    },
    {
      id: 4,
      title: "Smart Parking Reservation App",
      description: "Mobile-first parking solution with real-time availability tracking, reservation system, and payment integration for urban parking management.",
      longDescription: "Flutter-based mobile application that helps users find and reserve parking spots in real-time. Includes GPS navigation, payment processing, and admin dashboard for parking operators.",
      image: "🅿️",
      category: "Mobile/IoT",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "Stripe", "Node.js"],
      github: "https://github.com/natnael-dejene/smart-parking",
      demo: "https://play.google.com/store/apps/smart-parking",
      impact: "1000+ downloads, 95% user satisfaction",
      status: "Production"
    },
    {
      id: 5,
      title: "Home Rental Management System",
      description: "Full-stack web application for property rental management with tenant screening, lease management, payment tracking, and maintenance requests.",
      longDescription: "Comprehensive rental management platform that automates property management workflows. Features include tenant portal, payment processing, maintenance tracking, and financial reporting.",
      image: "🏠",
      category: "Real Estate",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind"],
      github: "https://github.com/natnael-dejene/rental-management",
      demo: "https://rental-management.vercel.app",
      impact: "Managing 50+ properties, $100K+ in transactions",
      status: "Production"
    }
  ];

  const categories = ["All", "AI/Education", "DevOps/Monitoring", "Education", "Mobile/IoT", "Real Estate"];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="gradient-hero bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that bridge technology and real-world challenges, 
            from AI-driven learning platforms to IoT applications.
          </p>
        </motion.div>

        {/* Project Categories Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2 bg-muted/50 p-2 rounded-full border border-border">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                className="rounded-full px-4 py-2 hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="portfolio-card project-card-3d h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-2">{project.image}</div>
                    <div className="flex space-x-2">
                      <Badge 
                        variant="outline" 
                        className="text-xs bg-primary/10 text-primary border-primary/30"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-muted text-muted-foreground"
                          >
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                      <p className="text-xs font-medium text-accent flex items-center">
                        <Zap className="h-3 w-3 mr-1" />
                        Impact: {project.impact}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 tech-button text-xs"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Have an Idea?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in working on innovative projects that can make a real impact. 
                Let's discuss how we can bring your vision to life.
              </p>
              <Button 
                className="tech-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="h-4 w-4 mr-2" />
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};