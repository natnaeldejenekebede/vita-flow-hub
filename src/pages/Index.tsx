import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AuthModal } from "@/components/AuthModal";
import { Dashboard } from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Users, 
  Calendar, 
  Activity, 
  Clock, 
  Award,
  CheckCircle 
} from "lucide-react";
import heroImage from "@/assets/hms-hero.jpg";

type UserRole = "admin" | "doctor" | "patient" | null;

const Index = () => {
  const [user, setUser] = useState<{
    role: UserRole;
    name: string;
  }>({
    role: null,
    name: "",
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogin = (role: UserRole, name: string) => {
    setUser({ role, name });
  };

  const handleLogout = () => {
    setUser({ role: null, name: "" });
  };

  if (user.role) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation
          userRole={user.role}
          userName={user.name}
          onLogin={() => setIsAuthModalOpen(true)}
          onLogout={handleLogout}
        />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Dashboard userRole={user.role} userName={user.name} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        userRole={user.role}
        userName={user.name}
        onLogin={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="gradient-primary text-white px-4 py-1 text-sm">
                  Next-Generation Healthcare
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Modern Hospital 
                  <span className="text-primary"> Management</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Streamline healthcare operations with our comprehensive HMS platform. 
                  Manage patients, appointments, and medical records with ease.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="medical-button text-lg px-8 py-3"
                >
                  Get Started
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-lg px-8 py-3 border-primary/20 hover:bg-primary/5">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">50K+</div>
                  <div className="text-sm text-muted-foreground">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
              <img
                src={heroImage}
                alt="Modern hospital management system interface"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage modern healthcare operations efficiently and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="medical-card group">
              <CardHeader>
                <div className="p-3 rounded-lg gradient-primary w-fit group-hover:shadow-glow transition-all duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Patient Management</CardTitle>
                <CardDescription>
                  Complete patient records, medical history, and treatment tracking in one secure platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Electronic Health Records
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Medical History Tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Insurance Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card group">
              <CardHeader>
                <div className="p-3 rounded-lg gradient-secondary w-fit group-hover:shadow-glow transition-all duration-300">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Smart Scheduling</CardTitle>
                <CardDescription>
                  Advanced appointment booking with automated reminders and resource optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Online Appointment Booking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Automated Reminders
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Resource Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-success w-fit group-hover:shadow-glow transition-all duration-300">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Clinical Analytics</CardTitle>
                <CardDescription>
                  Real-time insights and reporting to improve patient outcomes and operational efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Performance Dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Clinical Reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Predictive Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-warning w-fit group-hover:shadow-glow transition-all duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Security & Compliance</CardTitle>
                <CardDescription>
                  HIPAA-compliant security with advanced encryption and access controls.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    HIPAA Compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    End-to-End Encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Role-Based Access
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-destructive w-fit group-hover:shadow-glow transition-all duration-300">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">24/7 Operations</CardTitle>
                <CardDescription>
                  Round-the-clock system availability with emergency protocols and instant notifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Emergency Protocols
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Instant Notifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    System Monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card group">
              <CardHeader>
                <div className="p-3 rounded-lg gradient-hero w-fit group-hover:shadow-glow transition-all duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
                <CardDescription>
                  Continuous quality monitoring and improvement tools for better patient care.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Quality Metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Patient Feedback
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Continuous Improvement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of healthcare professionals using MediCare HMS to deliver better patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsAuthModalOpen(true)}
                className="medical-button text-lg px-8 py-3"
              >
                Start Free Trial
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3 border-primary/20 hover:bg-primary/5">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
