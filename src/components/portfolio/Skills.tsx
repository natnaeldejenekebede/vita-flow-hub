import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  Users, 
  Lightbulb, 
  Target,
  Zap,
  Globe,
  Settings,
  Brain
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "primary",
      skills: [
        { name: "React.js/Next.js", level: 95, experience: "3+ years" },
        { name: "TypeScript", level: 90, experience: "2+ years" },
        { name: "JavaScript (ES6+)", level: 95, experience: "4+ years" },
        { name: "Tailwind CSS", level: 88, experience: "2+ years" },
        { name: "HTML5/CSS3", level: 98, experience: "4+ years" },
        { name: "Framer Motion", level: 80, experience: "1+ year" }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "secondary",
      skills: [
        { name: "Node.js/Express", level: 88, experience: "3+ years" },
        { name: "Python", level: 90, experience: "4+ years" },
        { name: "Django/Flask", level: 85, experience: "2+ years" },
        { name: "Java/Spring Boot", level: 75, experience: "1+ year" },
        { name: "RESTful APIs", level: 92, experience: "3+ years" },
        { name: "GraphQL", level: 70, experience: "6+ months" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "accent",
      skills: [
        { name: "Flutter/Dart", level: 85, experience: "2+ years" },
        { name: "React Native", level: 70, experience: "1+ year" },
        { name: "Firebase", level: 80, experience: "2+ years" },
        { name: "Mobile UI/UX", level: 85, experience: "2+ years" }
      ]
    },
    {
      title: "Database & DevOps",
      icon: Cloud,
      color: "success",
      skills: [
        { name: "PostgreSQL", level: 85, experience: "3+ years" },
        { name: "MongoDB", level: 80, experience: "2+ years" },
        { name: "Redis", level: 75, experience: "1+ year" },
        { name: "Docker", level: 78, experience: "2+ years" },
        { name: "AWS/Vercel", level: 80, experience: "2+ years" },
        { name: "Git/GitHub", level: 95, experience: "4+ years" }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain, description: "Analytical thinking and creative solutions" },
    { name: "Team Leadership", icon: Users, description: "Leading development teams and mentoring" },
    { name: "Innovation", icon: Lightbulb, description: "Bringing fresh ideas to complex challenges" },
    { name: "Project Management", icon: Target, description: "Agile methodologies and delivery focus" },
    { name: "Communication", icon: Globe, description: "Technical writing and stakeholder engagement" },
    { name: "Adaptability", icon: Settings, description: "Quick learning and technology adoption" }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "React Developer", issuer: "Meta", year: "2023" },
    { name: "Python for Data Science", issuer: "IBM", year: "2023" },
    { name: "Agile Project Management", issuer: "Google", year: "2024" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary border-primary/30 bg-primary/10",
      secondary: "text-secondary border-secondary/30 bg-secondary/10",
      accent: "text-accent border-accent/30 bg-accent/10",
      success: "text-success border-success/30 bg-success/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--accent)/0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Skills & <span className="gradient-hero bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience in diverse projects 
            and continuous learning in emerging technologies.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="portfolio-card h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg shadow-glow ${getColorClasses(category.color)} border`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <CardDescription>
                          {category.skills.length} technologies mastered
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground text-sm">
                            {skill.name}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant="outline" 
                              className="text-xs bg-muted text-muted-foreground"
                            >
                              {skill.experience}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        
                        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute top-0 left-0 h-full rounded-full ${
                              category.color === 'primary' ? 'gradient-primary' :
                              category.color === 'secondary' ? 'gradient-secondary' :
                              category.color === 'accent' ? 'bg-accent' :
                              'bg-success'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                              ease: "easeOut" 
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Soft <span className="gradient-hero bg-clip-text text-transparent">Skills</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Essential interpersonal and professional capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="portfolio-card text-center h-full">
                    <CardContent className="p-6">
                      <div className="skill-orb mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="portfolio-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg gradient-hero shadow-glow">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Certifications & Learning</CardTitle>
                  <CardDescription>
                    Continuous professional development and validated expertise
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div>
                      <h4 className="font-medium text-foreground">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge className="gradient-primary text-white">
                      {cert.year}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};