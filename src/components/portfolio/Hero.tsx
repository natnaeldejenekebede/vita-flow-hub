import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Rocket,
  ArrowDown 
} from "lucide-react";
import portraitImage from "@/assets/natnael-professional.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="gradient-primary text-white px-6 py-2 text-sm font-medium mb-4">
                  <Rocket className="w-4 h-4 mr-2" />
                  Available for Opportunities
                </Badge>
              </motion.div>

              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hi, I'm{" "}
                <span className="gradient-hero bg-clip-text text-transparent">
                  Natnael
                </span>
              </motion.h1>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-2xl lg:text-3xl font-semibold text-primary">
                  Software Engineer
                </p>
                <p className="text-lg text-muted-foreground">
                  Empowering Tech Innovation in Ethiopia
                </p>
              </motion.div>

              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Final-year Software Engineering student at Addis Ababa University, 
                passionate about AI-driven learning systems, full-stack development, 
                and building innovative solutions for Ethiopia's tech ecosystem.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                className="tech-button group"
              >
                <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Projects
              </Button>
              
              <Button 
                variant="outline" 
                className="border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a 
                href="https://github.com/natnaeldejenekebede" 
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-foreground" />
              </a>
              <a 
                href="https://www.linkedin.com/in/natnael-dejene-53466326a" 
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-foreground" />
              </a>
              <a 
                href="mailto:natnaeldejene19@gmail.com" 
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <Mail className="h-6 w-6 text-foreground" />
              </a>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl" />
              
              {/* Portrait Image */}
              <motion.img
                src={portraitImage}
                alt="Natnael Dejene - Software Engineer"
                className="relative rounded-full w-96 h-96 object-cover border-4 border-primary/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 rounded-full bg-card border border-primary/30 shadow-glow"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 p-3 rounded-full bg-card border border-secondary/30 shadow-glow-secondary"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <Rocket className="h-6 w-6 text-secondary" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};