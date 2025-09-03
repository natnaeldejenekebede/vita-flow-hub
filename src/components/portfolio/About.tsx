import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Calendar,
  MapPin,
  Code,
  Database,
  Smartphone
} from "lucide-react";

export const About = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
    { name: "React.js/Next.js", level: 90, category: "Frontend" },
    { name: "Python", level: 88, category: "Backend" },
    { name: "Node.js/Express", level: 85, category: "Backend" },
    { name: "Flutter/Dart", level: 82, category: "Mobile" },
    { name: "PostgreSQL/MongoDB", level: 80, category: "Database" },
    { name: "Docker/DevOps", level: 75, category: "DevOps" },
    { name: "Django/Flask", level: 78, category: "Backend" },
  ];

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Yeab Future",
      period: "March 2024 - August 2024",
      description: "Developing modern web applications using Next.js and React.js, focusing on user experience and performance optimization.",
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Software Engineer",
      company: "Minnovation",
      period: "March 2023 - August 2024",
      description: "Full-stack development focusing on scalable web applications and database optimization for various client projects.",
      technologies: ["Python", "Django", "PostgreSQL", "React.js"]
    },
    {
      title: "Emerging Technologist",
      company: "Millennium Campus Network",
      period: "August 2023 - March 2024",
      description: "Researched and developed innovative tech solutions for educational institutions and community development projects.",
      technologies: ["AI/ML", "Research", "Innovation"]
    },
    {
      title: "Java Intern",
      company: "Oasis Infobyte",
      period: "September 2023 - November 2023",
      description: "Developed Java-based applications and gained experience in enterprise-level software development practices.",
      technologies: ["Java", "Spring Boot", "MySQL"]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Software Engineering",
    university: "Addis Ababa University",
    period: "2021 - 2025",
    courses: ["Object-Oriented Programming", "Distributed Systems", "Data Structures & Algorithms", "Operating Systems", "Software Engineering", "Database Systems"]
  };

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(var(--secondary)/0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            About <span className="gradient-hero bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and real-world problems, 
            with a focus on AI-driven applications and sustainable development in Ethiopia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education & Bio */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="portfolio-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg gradient-primary shadow-glow">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Education</CardTitle>
                    <CardDescription className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {education.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-foreground">{education.degree}</h4>
                  <p className="text-primary font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {education.university}
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium text-foreground mb-2">Key Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course) => (
                      <Badge 
                        key={course} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg gradient-secondary shadow-glow-secondary">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Mission & Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  As an aspiring software engineer from Ethiopia, I'm dedicated to leveraging technology 
                  to solve local challenges while contributing to the global tech ecosystem. My goal is 
                  to bridge the gap between innovative technologies and practical solutions that can 
                  make a meaningful impact in education, healthcare, and economic development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of AI-driven learning systems to democratize education and 
                  create opportunities for the next generation of African tech innovators.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Progress */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="portfolio-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-accent shadow-glow">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.category === 'Frontend' && <Smartphone className="h-3 w-3 mr-1" />}
                        {skill.category === 'Backend' && <Code className="h-3 w-3 mr-1" />}
                        {skill.category === 'Database' && <Database className="h-3 w-3 mr-1" />}
                        {skill.category === 'Mobile' && <Smartphone className="h-3 w-3 mr-1" />}
                        {skill.category === 'DevOps' && <Code className="h-3 w-3 mr-1" />}
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                      <div 
                        className="absolute top-0 left-0 h-2 rounded-full gradient-primary shadow-glow transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Professional <span className="gradient-hero bg-clip-text text-transparent">Experience</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Building expertise through diverse internships and projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="portfolio-card h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-lg gradient-hero shadow-glow">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <CardDescription className="text-primary font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          className="bg-secondary/10 text-secondary border-secondary/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};