import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Project {
  id: string;
  title: string;
  description: string;
  long_description?: string;
  technologies: string[];
  category: string;
  image_url?: string;
  github_url?: string;
  demo_url?: string;
  featured: boolean;
  status: string;
  impact?: string;
  start_date?: string;
  end_date?: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  years_experience: number;
  description?: string;
  icon_name?: string;
  color: string;
  featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field_of_study: string;
  grade?: string;
  start_date: string;
  end_date?: string;
  current: boolean;
  description?: string;
  achievements?: string[];
  location?: string;
  logo_url?: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Timeline {
  id: string;
  title: string;
  company: string;
  type: string;
  description: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
  start_date: string;
  end_date?: string;
  current: boolean;
  location?: string;
  company_logo_url?: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issue_date: string;
  expiration_date?: string;
  credential_id?: string;
  credential_url?: string;
  description?: string;
  skills?: string[];
  badge_url?: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('sort_order', { ascending: true });

        if (error) throw error;
        setProjects(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data, error } = await supabase
          .from('skills')
          .select('*')
          .order('sort_order', { ascending: true });

        if (error) throw error;
        setSkills(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
};

export const useEducation = () => {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const { data, error } = await supabase
          .from('education')
          .select('*')
          .order('sort_order', { ascending: true });

        if (error) throw error;
        setEducation(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return { education, loading, error };
};

export const useTimeline = () => {
  const [timeline, setTimeline] = useState<Timeline[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const { data, error } = await supabase
          .from('timeline')
          .select('*')
          .order('sort_order', { ascending: true });

        if (error) throw error;
        setTimeline(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeline();
  }, []);

  return { timeline, loading, error };
};

export const useCertifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const { data, error } = await supabase
          .from('certifications')
          .select('*')
          .order('sort_order', { ascending: true });

        if (error) throw error;
        setCertifications(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return { certifications, loading, error };
};

export const trackAnalytics = async (eventType: string, eventData?: any) => {
  try {
    await supabase.from('analytics').insert({
      event_type: eventType,
      event_data: eventData,
      user_agent: navigator.userAgent,
      referrer: document.referrer || null
    });
  } catch (error) {
    console.error('Failed to track analytics:', error);
  }
};