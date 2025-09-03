import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { ArrowDown, Sparkles } from 'lucide-react';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (about 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="sticky-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-3 text-sm font-semibold shadow-lg"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Discover My Work
            <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};