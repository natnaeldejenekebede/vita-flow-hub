-- Add the new featured Ge'ez ↔️ Amharic Translator project
INSERT INTO public.projects (
  title,
  description,
  long_description,
  technologies,
  category,
  status,
  impact,
  featured,
  sort_order,
  github_url,
  demo_url
) VALUES (
  'Ge''ez ↔️ Amharic Translator',
  'Developed an AI-powered translator converting between Amharic and Ge''ez, supporting language preservation and accessibility of historical texts.',
  'Developed an innovative translation system that converts between Amharic and Ge''ez, bridging the gap between Ethiopia''s modern and ancient languages. This project supports cultural preservation and makes historical and liturgical texts more accessible for students, researchers, and church communities.',
  ARRAY['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Django', 'Machine Learning', 'Natural Language Processing'],
  'ai',
  'completed',
  'Preserves Ethiopian heritage, enables AI-driven language research, demonstrates real-world NLP application for underrepresented languages.',
  true,
  1,
  'https://github.com/natnaeldejenekebede/geez-amharic-translator',
  'https://geez-translator-demo.vercel.app'
);

-- Update existing skills with proper years of experience
UPDATE public.skills 
SET years_experience = CASE 
  WHEN name = 'React' THEN 3
  WHEN name = 'TypeScript' THEN 2  
  WHEN name = 'Python' THEN 4
  WHEN name = 'JavaScript' THEN 4
  WHEN name = 'Node.js' THEN 3
  WHEN name = 'MongoDB' THEN 2
  WHEN name = 'PostgreSQL' THEN 3
  WHEN name = 'Docker' THEN 2
  WHEN name = 'AWS' THEN 1
  WHEN name = 'Git' THEN 4
  ELSE years_experience
END
WHERE name IN ('React', 'TypeScript', 'Python', 'JavaScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git');