
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Filter, ChevronDown, Check } from 'lucide-react';
import IdeaCard from './IdeaCard';
import { getRandomIdeas, filterIdeas, Idea, ideasDatabase, tags, languages } from '@/utils/ideaData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface IdeaGeneratorProps {
  className?: string;
}

const IdeaGenerator: React.FC<IdeaGeneratorProps> = ({ className }) => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [savedIdeas, setSavedIdeas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    difficulty: '',
    tags: [] as string[],
    language: '',
  });

  useEffect(() => {
    generateIdeas();
    // Load saved ideas from localStorage
    const saved = localStorage.getItem('savedIdeas');
    if (saved) {
      setSavedIdeas(JSON.parse(saved));
    }
  }, []);

  const generateIdeas = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newIdeas = filterIdeas(
        ideasDatabase,
        { 
          difficulty: filters.difficulty || undefined, 
          tags: filters.tags.length ? filters.tags : undefined,
          language: filters.language || undefined
        }
      );

      // Get 3 random ideas from filtered results
      const randomIdeas = getRandomIdeas(newIdeas, 3);
      
      setIdeas(randomIdeas);
      setIsLoading(false);
    }, 600);
  };

  const handleSaveIdea = (id: string) => {
    const newSavedIdeas = savedIdeas.includes(id)
      ? savedIdeas.filter(savedId => savedId !== id)
      : [...savedIdeas, id];
    
    setSavedIdeas(newSavedIdeas);
    localStorage.setItem('savedIdeas', JSON.stringify(newSavedIdeas));
  };

  const toggleFilter = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const setDifficulty = (difficulty: string) => {
    setFilters(prev => ({
      ...prev,
      difficulty: prev.difficulty === difficulty ? '' : difficulty
    }));
  };

  const setLanguage = (language: string) => {
    setFilters(prev => ({
      ...prev,
      language
    }));
  };

  const clearFilters = () => {
    setFilters({
      difficulty: '',
      tags: [],
      language: ''
    });
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h2 className="text-3xl font-medium">Discover Your Next Project</h2>
          <motion.div 
            className="absolute -top-1 -right-4 text-primary"
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-3 text-slate-600 max-w-lg mx-auto"
        >
          Generate project ideas to enhance your skills, build your portfolio, and accelerate your learning journey.
        </motion.p>
      </div>
      
      <div className="mb-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={generateIdeas}
            disabled={isLoading}
            className={cn(
              "px-6 py-3 rounded-full bg-primary text-white",
              "shadow-sm shadow-primary/20",
              "flex items-center gap-2",
              "transition-all duration-300 ease-expo-out",
              "hover:shadow-md hover:shadow-primary/30",
              isLoading && "opacity-90"
            )}
          >
            <RefreshCw className={cn(
              "h-4 w-4", 
              isLoading && "animate-spin"
            )} />
            <span>Generate Ideas</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFiltersOpen(!filtersOpen)}
            className={cn(
              "px-4 py-3 rounded-full",
              "border border-slate-200",
              "flex items-center gap-2",
              "text-slate-700",
              "transition-all duration-300 ease-expo-out",
              "hover:border-slate-300 hover:bg-slate-50",
              (filters.difficulty || filters.tags.length > 0 || filters.language) && "bg-slate-50 border-slate-300"
            )}
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className={cn(
              "h-4 w-4 transition-transform",
              filtersOpen && "transform rotate-180"
            )} />
          </motion.button>
        </div>
        
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden w-full max-w-3xl mt-2"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium">Filter Projects</h3>
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Clear all
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs text-slate-500 mb-2">Difficulty Level</h4>
                      <div className="flex flex-wrap gap-2">
                        {['beginner', 'intermediate', 'advanced'].map(level => (
                          <button
                            key={level}
                            onClick={() => setDifficulty(level)}
                            className={cn(
                              "text-xs px-3 py-1.5 rounded-full capitalize",
                              "border transition-colors",
                              filters.difficulty === level
                                ? "bg-primary/10 border-primary/30 text-primary"
                                : "border-slate-200 hover:border-slate-300"
                            )}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs text-slate-500 mb-2">Programming Language</h4>
                      <div className="w-full max-w-xs">
                        <Select
                          value={filters.language}
                          onValueChange={setLanguage}
                        >
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select a language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Any Language</SelectItem>
                            {languages.map(language => (
                              <SelectItem key={language} value={language}>
                                {language}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs text-slate-500 mb-2">Project Type</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.values(tags).map(tag => (
                        <button
                          key={tag.name}
                          onClick={() => toggleFilter(tag.name)}
                          className={cn(
                            "text-xs px-3 py-1.5 rounded-full",
                            "border transition-colors flex items-center gap-1.5",
                            filters.tags.includes(tag.name)
                              ? "bg-primary/10 border-primary/30 text-primary"
                              : "border-slate-200 hover:border-slate-300"
                          )}
                        >
                          {filters.tags.includes(tag.name) && (
                            <Check className="h-3 w-3" />
                          )}
                          {tag.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="sync">
          {isLoading ? (
            // Loading placeholders
            [...Array(3)].map((_, i) => (
              <motion.div
                key={`loading-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-96 rounded-xl bg-slate-100 animate-pulse"
              />
            ))
          ) : ideas.length > 0 ? (
            // Actual ideas
            ideas.map((idea, index) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                isSaved={savedIdeas.includes(idea.id)}
                onSave={handleSaveIdea}
              />
            ))
          ) : (
            // No ideas found
            <motion.div
              key="no-ideas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-10 text-center text-slate-500"
            >
              <p>No project ideas match your filters. Try different criteria.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IdeaGenerator;
