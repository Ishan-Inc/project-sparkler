
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn(
      "w-full py-6 px-8 mt-20 flex flex-col items-center justify-center gap-4",
      "text-sm text-slate-500",
      className
    )}>
      <div className="flex items-center gap-1">
        <span>Made with</span>
        <Heart className="h-3 w-3 fill-rose-500 text-rose-500" />
        <span>for aspiring developers</span>
      </div>
      
      <div className="text-xs">
        &copy; {new Date().getFullYear()} AppSpark. All project ideas are free to use.
      </div>
    </footer>
  );
};

export default Footer;
