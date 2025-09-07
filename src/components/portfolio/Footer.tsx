import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Heart,
  Code,
  Coffee,
  Database,
  Server,
  Cpu
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const techIcons = [
    { icon: Code, name: "React", color: "text-blue-400" },
    { icon: Code, name: "JavaScript", color: "text-yellow-400" },
    { icon: Database, name: "Database", color: "text-green-400" },
    { icon: Server, name: "Node.js", color: "text-green-500" },
    { icon: Cpu, name: "AI/ML", color: "text-purple-400" },
    { icon: Github, name: "Git", color: "text-orange-400" },
  ];

  const footerLinks = {
    projects: [
      { name: "Brilliant AI Learning", href: "#" },
      { name: "Linux Monitor", href: "#" },
      { name: "University LMS", href: "#" },
      { name: "Smart Parking", href: "#" }
    ],
    connect: [
      { name: "GitHub", href: "https://github.com/natnael-dejene", icon: Github },
      { name: "LinkedIn", href: "https://linkedin.com/in/natnael-dejene", icon: Linkedin },
      { name: "Email", href: "mailto:natnaeldejene19@gmail.com", icon: Mail }
    ],
    resources: [
      { name: "Resume", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Certifications", href: "#" }
    ]
  };

  return (
    <footer className="relative bg-muted/30 border-t border-border overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                  Natnael Dejene
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Software Engineer passionate about creating innovative solutions 
                  that bridge technology and real-world challenges in Ethiopia and beyond.
                </p>
              </div>
              
              <div className="flex space-x-4">
                {footerLinks.connect.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="p-3 rounded-full bg-muted border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="h-5 w-5 text-foreground hover:text-primary" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Featured Projects</h4>
              <ul className="space-y-2">
                {footerLinks.projects.map((project) => (
                  <li key={project.name}>
                    <a 
                      href={project.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((resource) => (
                  <li key={resource.name}>
                    <a 
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter/CTA */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Stay Connected</h4>
              <p className="text-muted-foreground text-sm">
                Interested in my latest projects and tech insights? Let's connect!
              </p>
              <Button className="tech-button w-full text-sm">
                <Coffee className="h-4 w-4 mr-2" />
                Let's Collaborate
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Tech Icons Marquee */}
        <motion.div
          className="py-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="marquee">
            <div className="marquee-content">
              {[...techIcons, ...techIcons].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div key={index} className="marquee-item">
                    <IconComponent className={`h-5 w-5 ${tech.color}`} />
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>© {currentYear} Natnael Dejene. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-2 rounded-full hover:bg-primary/10 group"
              >
                <ArrowUp className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};