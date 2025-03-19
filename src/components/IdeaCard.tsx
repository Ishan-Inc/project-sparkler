
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Idea } from '@/utils/ideaData';
import { Bookmark, CheckCircle, Clock, Activity } from 'lucide-react';

interface IdeaCardProps {
  idea: Idea;
  className?: string;
  isSaved?: boolean;
  onSave?: (id: string) => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ 
  idea, 
  className,
  isSaved = false,
  onSave
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(isSaved);
  
  const difficultyColor = {
    beginner: 'text-green-600',
    intermediate: 'text-amber-600',
    advanced: 'text-rose-600',
  }[idea.difficulty];

  const handleSave = () => {
    setIsBookmarked(!isBookmarked);
    if (onSave) {
      onSave(idea.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl p-6",
        "bg-white border border-slate-100",
        "shadow-sm shadow-slate-200/50",
        "transition-all duration-300",
        isHovered && "shadow-md",
        className
      )}
    >
      <div className="absolute top-4 right-4">
        <button 
          onClick={handleSave}
          className={cn(
            "p-2 rounded-full transition-colors",
            isBookmarked ? "text-primary" : "text-slate-300 hover:text-slate-400"
          )}
        >
          <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-primary")} />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">{idea.title}</h3>
          <p className="text-sm text-slate-600 line-clamp-3">{idea.description}</p>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500">
          <div className={cn("flex items-center gap-1", difficultyColor)}>
            <Activity className="h-3 w-3" />
            <span className="capitalize">{idea.difficulty}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{idea.duration}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {idea.tags.map((tag) => (
            <span 
              key={tag.name}
              className={cn(
                "text-xs px-2 py-1 rounded-full",
                tag.color
              )}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <div>
          <h4 className="text-xs font-medium text-slate-700 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {idea.techStack.map((tech) => (
              <span 
                key={tech.name}
                className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-medium text-slate-700 mb-2">Learning Outcomes</h4>
          <ul className="text-xs text-slate-600 space-y-1">
            {idea.learningOutcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-3 w-3 text-primary mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default IdeaCard;
