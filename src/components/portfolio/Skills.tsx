import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { RadarChart } from "@/components/ui/radar-chart";
import { useSkills } from "@/hooks/usePortfolioData";
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Users, 
  Lightbulb, 
  Target,
  Zap,
  Globe,
  Settings,
  Brain,
  Server,
  Palette,
  GitBranch,
  Package,
  Terminal,
  Layers,
  FileText,
  Code2
} from "lucide-react";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { skills, loading, error } = useSkills();

  const getIcon = (iconName?: string) => {
    const iconMap: { [key: string]: any } = {
      'Code': Code,
      'Code2': Code2,
      'FileText': FileText,
      'Server': Server,
      'Database': Database,
      'Palette': Palette,
      'Zap': Zap,
      'GitBranch': GitBranch,
      'Package': Package,
      'Cloud': Cloud,
      'Globe': Globe,
      'Smartphone': Smartphone,
      'Terminal': Terminal,
      'Layers': Layers
    };
    return iconMap[iconName || 'Code'] || Code;
  };

  const skillCategories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools" },
    { id: "cloud", name: "Cloud" },
  ];

  const getFilteredSkills = () => {
    if (selectedCategory === "all") {
      return skills;
    }
    return skills.filter(skill => skill.category === selectedCategory);
  };

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-40 w-full" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-red-500">Error loading skills: {error}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

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
            A comprehensive toolkit built through hands-on experience and continuous learning.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-primary text-primary-foreground shadow-glow' 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {selectedCategory === category.id 
                  ? getFilteredSkills().length 
                  : skills.filter(s => category.id === "all" || s.category === category.id).length
                }
              </Badge>
            </button>
          ))}
        </motion.div>

        {/* Dynamic Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {getFilteredSkills().map((skill, index) => {
            const IconComponent = getIcon(skill.icon_name);
            
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="portfolio-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div 
                        className="p-3 rounded-xl shadow-lg border"
                        style={{ 
                          background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                          borderColor: `${skill.color}40`
                        }}
                      >
                        <IconComponent 
                          className="h-6 w-6"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={skill.level * 20} 
                            className="flex-1 h-2"
                          />
                          <span className="text-sm font-medium text-muted-foreground">
                            {skill.level}/5
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description || `${skill.years_experience} years of experience with ${skill.name}`}
                    </p>
                    {skill.featured && (
                      <Badge className="mt-3 bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Radar Chart */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="portfolio-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg gradient-hero shadow-glow">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Technical Proficiency Overview</CardTitle>
                  <CardDescription>
                    Interactive skill assessment across key technology areas
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <RadarChart
                data={{
                  labels: ['Frontend', 'Backend', 'Mobile', 'DevOps', 'Database', 'AI/ML'],
                  datasets: [
                    {
                      label: 'Skill Level',
                      data: [92, 87, 83, 77, 82, 75],
                      backgroundColor: 'hsla(187, 100%, 50%, 0.2)',
                      borderColor: 'hsl(187, 100%, 50%)',
                      borderWidth: 2,
                    },
                  ],
                }}
                className="h-80"
              />
            </CardContent>
          </Card>
        </motion.div>

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