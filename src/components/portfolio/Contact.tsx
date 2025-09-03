import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Calendar,
  Coffee,
  MessageCircle,
  Globe,
  Download,
  ExternalLink,
  Sparkles
} from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00bcd4', '#8b5cf6', '#22c55e']
      });
      
      toast({
        title: "Message Sent! ✨",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "natnaeldejene19@gmail.com",
      href: "mailto:natnaeldejene19@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251901375041",
      href: "tel:+251901375041",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "https://maps.google.com/?q=Addis+Ababa,Ethiopia",
      color: "accent"
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Open to opportunities",
      href: "#",
      color: "success"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/natnaeldejenekebede",
      color: "primary",
      description: "Open source projects and code repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/natnael-dejene-53466326a",
      color: "secondary",
      description: "Professional network and career updates"
    },
    {
      name: "Portfolio",
      icon: Globe,
      href: "https://natnael-dejene.vercel.app",
      color: "accent",
      description: "Complete portfolio and project showcase"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Let's <span className="gradient-hero bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a coffee chat about tech? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="portfolio-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg gradient-primary shadow-glow">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                    <CardDescription>
                      I typically respond within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="floating-label">
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder=" "
                        required
                        className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 pt-6 pb-2"
                      />
                      <label>Full Name *</label>
                    </div>
                    
                    <div className="floating-label">
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=" "
                        required
                        className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 pt-6 pb-2"
                      />
                      <label>Email Address *</label>
                    </div>
                  </div>
                  
                  <div className="floating-label">
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                      className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 pt-6 pb-2"
                    />
                    <label>Subject *</label>
                  </div>
                  
                  <div className="floating-label">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder=" "
                      rows={6}
                      required
                      className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 pt-6 pb-2 resize-none"
                    />
                    <label>Message *</label>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      I typically respond within 24 hours
                    </p>
                    <Button 
                      type="submit" 
                      className="tech-button w-full md:w-auto group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Sparkles className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Social Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Info */}
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach out
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`p-2 rounded-lg bg-${info.color}/10 border border-${info.color}/20 group-hover:shadow-glow`}>
                        <IconComponent className={`h-4 w-4 text-${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{info.label}</p>
                        <p className="text-xs text-muted-foreground">{info.value}</p>
                      </div>
                      {info.href.startsWith('http') && (
                        <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary ml-auto" />
                      )}
                    </motion.a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="text-xl">Connect Online</CardTitle>
                <CardDescription>
                  Follow my journey and projects
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-muted/30 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-${social.color}/10 border border-${social.color}/20 group-hover:shadow-glow`}>
                          <IconComponent className={`h-5 w-5 text-${social.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-foreground">{social.name}</p>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">{social.description}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="portfolio-card">
              <CardContent className="p-6 text-center">
                <Coffee className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Grab a Coffee?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm always up for discussing tech, sharing ideas, or exploring collaborations over coffee.
                </p>
                <div className="space-y-2">
                  <Button 
                    className="tech-button w-full text-sm group"
                    onClick={() => window.open('https://calendly.com/natnaeldejene', '_blank')}
                  >
                    <Calendar className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Schedule a Meeting
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-sm border-primary/30 hover:bg-primary/10 group"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};