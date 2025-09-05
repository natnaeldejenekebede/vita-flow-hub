-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  category TEXT NOT NULL DEFAULT 'web',
  image_url TEXT,
  github_url TEXT,
  demo_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'completed',
  impact TEXT,
  start_date DATE,
  end_date DATE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create education table
CREATE TABLE public.education (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  field_of_study TEXT NOT NULL,
  grade TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  current BOOLEAN NOT NULL DEFAULT FALSE,
  description TEXT,
  achievements TEXT[],
  location TEXT,
  logo_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create timeline table (for career experience)
CREATE TABLE public.timeline (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'work', -- work, volunteer, internship
  description TEXT NOT NULL,
  responsibilities TEXT[],
  achievements TEXT[],
  technologies TEXT[],
  start_date DATE NOT NULL,
  end_date DATE,
  current BOOLEAN NOT NULL DEFAULT FALSE,
  location TEXT,
  company_logo_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create certifications table
CREATE TABLE public.certifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  issuer TEXT NOT NULL,
  issue_date DATE NOT NULL,
  expiration_date DATE,
  credential_id TEXT,
  credential_url TEXT,
  description TEXT,
  skills TEXT[],
  badge_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create skills table
CREATE TABLE public.skills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL, -- technical, soft, tools, languages, etc.
  level INTEGER NOT NULL DEFAULT 1 CHECK (level >= 1 AND level <= 5), -- 1-5 proficiency
  years_experience INTEGER DEFAULT 0,
  description TEXT,
  icon_name TEXT, -- lucide icon name
  color TEXT DEFAULT '#00bcd4',
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create analytics table for tracking interactions
CREATE TABLE public.analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL, -- project_click, cv_download, contact_view, etc.
  event_data JSONB,
  user_agent TEXT,
  ip_address INET,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create storage bucket for resume and other files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('portfolio-files', 'portfolio-files', true);

-- Enable RLS on all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access (portfolio is public)
CREATE POLICY "Anyone can view projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Anyone can view education" ON public.education FOR SELECT USING (true);
CREATE POLICY "Anyone can view timeline" ON public.timeline FOR SELECT USING (true);
CREATE POLICY "Anyone can view certifications" ON public.certifications FOR SELECT USING (true);
CREATE POLICY "Anyone can view skills" ON public.skills FOR SELECT USING (true);

-- Analytics policies - allow public insert, admin view
CREATE POLICY "Anyone can track analytics" ON public.analytics FOR INSERT WITH CHECK (true);
CREATE POLICY "Only authenticated users can view analytics" ON public.analytics FOR SELECT USING (auth.role() = 'authenticated');

-- Admin policies for data management (you'll need authentication later)
CREATE POLICY "Authenticated users can manage projects" ON public.projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage education" ON public.education FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage timeline" ON public.timeline FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage certifications" ON public.certifications FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage skills" ON public.skills FOR ALL USING (auth.role() = 'authenticated');

-- Storage policies for portfolio files
CREATE POLICY "Anyone can view portfolio files" ON storage.objects FOR SELECT USING (bucket_id = 'portfolio-files');
CREATE POLICY "Authenticated users can upload portfolio files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'portfolio-files' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update portfolio files" ON storage.objects FOR UPDATE USING (bucket_id = 'portfolio-files' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete portfolio files" ON storage.objects FOR DELETE USING (bucket_id = 'portfolio-files' AND auth.role() = 'authenticated');

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_education_updated_at BEFORE UPDATE ON public.education FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_timeline_updated_at BEFORE UPDATE ON public.timeline FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_certifications_updated_at BEFORE UPDATE ON public.certifications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON public.skills FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_projects_category ON public.projects(category);
CREATE INDEX idx_projects_featured ON public.projects(featured);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_education_current ON public.education(current);
CREATE INDEX idx_timeline_current ON public.timeline(current);
CREATE INDEX idx_timeline_type ON public.timeline(type);
CREATE INDEX idx_skills_category ON public.skills(category);
CREATE INDEX idx_skills_featured ON public.skills(featured);
CREATE INDEX idx_analytics_event_type ON public.analytics(event_type);
CREATE INDEX idx_analytics_created_at ON public.analytics(created_at);

-- Insert some sample data
INSERT INTO public.skills (name, category, level, featured, icon_name, color) VALUES
('React', 'frontend', 5, true, 'Code', '#61dafb'),
('TypeScript', 'frontend', 5, true, 'FileText', '#3178c6'),
('Node.js', 'backend', 4, true, 'Server', '#339933'),
('Python', 'backend', 4, true, 'Code2', '#3776ab'),
('PostgreSQL', 'database', 4, true, 'Database', '#336791'),
('Supabase', 'backend', 5, true, 'Zap', '#3ecf8e'),
('Tailwind CSS', 'frontend', 5, true, 'Palette', '#06b6d4'),
('Git', 'tools', 5, false, 'GitBranch', '#f05032'),
('Docker', 'tools', 3, false, 'Package', '#2496ed'),
('AWS', 'cloud', 3, false, 'Cloud', '#ff9900');