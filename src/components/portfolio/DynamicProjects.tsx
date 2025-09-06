import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProjects, trackAnalytics } from "@/hooks/usePortfolioData";
import { 
  Github, 
  ExternalLink, 
  Calendar,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Pause
} from "lucide-react";

export const DynamicProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const { projects, loading, error } = useProjects();

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "web", name: "Web Apps", count: projects.filter(p => p.category === 'web').length },
    { id: "mobile", name: "Mobile Apps", count: projects.filter(p => p.category === 'mobile').length },
    { id: "desktop", name: "Desktop", count: projects.filter(p => p.category === 'desktop').length },
    { id: "ai", name: "AI/ML", count: projects.filter(p => p.category === 'ai').length },
    { id: "api", name: "APIs", count: projects.filter(p => p.category === 'api').length },
  ];

  const statusFilters = [
    { id: "all", name: "All Status", icon: CheckCircle },
    { id: "completed", name: "Completed", icon: CheckCircle },
    { id: "in-progress", name: "In Progress", icon: Clock },
    { id: "planned", name: "Planned", icon: AlertCircle },
    { id: "paused", name: "Paused", icon: Pause }
  ];

  const getFilteredProjects = () => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
      const statusMatch = selectedStatus === "all" || project.status === selectedStatus;
      return categoryMatch && statusMatch;
    });
  };

  const handleProjectClick = async (projectId: string, projectTitle: string) => {
    await trackAnalytics('project_click', { 
      project_id: projectId, 
      project_title: projectTitle 
    });
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'completed': 'bg-green-500/10 text-green-600 border-green-500/20',
      'in-progress': 'bg-blue-500/10 text-blue-600 border-blue-500/20', 
      'planned': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      'paused': 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    };
    return colors[status] || colors['completed'];
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-red-500">Error loading projects: {error}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(var(--accent)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.1),transparent_60%)]" />
      
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
            A showcase of my work spanning web applications, mobile apps, and innovative solutions. 
            Each project represents a unique challenge and learning experience.
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
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'tech-button shadow-glow' 
                    : 'border-primary/30 hover:border-primary/50 hover:bg-primary/10'
                }`}
              >
                {category.name}
                {category.count > 0 && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((status) => {
              const IconComponent = status.icon;
              return (
                <Button
                  key={status.id}
                  variant={selectedStatus === status.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status.id)}
                  className={`transition-all duration-300 ${
                    selectedStatus === status.id 
                      ? 'tech-button shadow-glow' 
                      : 'border-primary/30 hover:border-primary/50 hover:bg-primary/10'
                  }`}
                >
                  <IconComponent className="h-3 w-3 mr-1" />
                  {status.name}
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="portfolio-card group h-full flex flex-col">
                {project.image_url && (
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image_url} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge className={`ml-2 ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1">
                    {project.long_description && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {project.long_description}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.impact && (
                      <div className="bg-muted/50 rounded-lg p-3 mb-4">
                        <p className="text-sm font-medium text-foreground mb-1">Impact:</p>
                        <p className="text-xs text-muted-foreground">{project.impact}</p>
                      </div>
                    )}

                    {(project.start_date || project.end_date) && (
                      <div className="flex items-center text-xs text-muted-foreground mb-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.start_date} {project.end_date && `- ${project.end_date}`}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {project.github_url && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => {
                          handleProjectClick(project.id, project.title);
                          window.open(project.github_url, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    )}
                    
                    {project.demo_url && (
                      <Button 
                        size="sm" 
                        className="flex-1 tech-button"
                        onClick={() => {
                          handleProjectClick(project.id, project.title);
                          window.open(project.demo_url, '_blank');
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg">No projects found matching the selected filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};