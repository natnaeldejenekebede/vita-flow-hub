import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypingEffect } from "@/components/ui/typing-effect";
import { StickyCTA } from "@/components/ui/sticky-cta";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Rocket,
  ArrowDown 
} from "lucide-react";
const portraitImage = "/lovable-uploads/ee0a2a3b-9c37-4d47-9f10-b0d11a3a672d.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <StickyCTA />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_50%,hsl(var(--secondary)/0.05)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.1)_0%,transparent_50%)]" />
        
        {/* Animated Logo/Initials */}
        <motion.div 
          className="absolute top-8 left-8 z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ND</div>
        </motion.div>
      
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                  Natnael
                </span>
              </motion.h1>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-lg lg:text-xl font-semibold text-primary">
                  Software Engineer | AI & Full-Stack Developer | Building Solutions for Ethiopia and the World
                </p>
              </motion.div>

              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Software Engineering graduate from Addis Ababa University, 
                passionate about AI-driven learning systems, full-stack development, 
                and creating innovative solutions for Ethiopia's tech ecosystem.
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
                onClick={async () => {
                  try {
                    // Track CV download
                    const { trackAnalytics } = await import("@/hooks/usePortfolioData");
                    await trackAnalytics('cv_download', { source: 'hero_section' });
                    
                    // Create a download from Supabase Storage
                    const { supabase } = await import("@/integrations/supabase/client");
                    const { data } = await supabase.storage
                      .from('portfolio-files')
                      .getPublicUrl('Natnael-Dejene-CV.pdf');
                    
                    if (data?.publicUrl) {
                      // Create download link
                      const link = document.createElement('a');
                      link.href = data.publicUrl;
                      link.download = 'Natnael-Dejene-CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    } else {
                      // Fallback to a placeholder CV
                      window.open('/Natnael-Dejene-CV.pdf', '_blank');
                    }
                  } catch (error) {
                    console.error('CV download failed:', error);
                    // Fallback to direct link
                    window.open('/Natnael-Dejene-CV.pdf', '_blank');
                  }
                }}
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
              {/* Enhanced Glow Effects */}
              <div className="absolute -inset-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl animate-pulse" />
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
              <div className="absolute -inset-4 bg-gradient-to-tl from-secondary/30 to-primary/30 rounded-xl blur-xl" />
              
              {/* Portrait Image - Professional Version */}
              <motion.div className="relative">
                <motion.img
                  src={portraitImage}
                  alt="Natnael Dejene - Software Engineer"
                  className="relative w-80 h-96 sm:w-96 sm:h-[28rem] object-cover rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                
                {/* Professional Badge Overlay */}
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <p className="text-sm font-semibold text-primary">Software Engineer</p>
                </motion.div>
              </motion.div>
              
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
    </>
  );
};