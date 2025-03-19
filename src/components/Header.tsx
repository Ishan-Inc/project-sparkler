
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "w-full py-4 px-6 flex items-center justify-between", 
      "glass border-b border-slate-200/50",
      "animate-fade-in",
      className
    )}>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Sparkles className="h-5 w-5 text-primary" />
          <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm animate-pulse-subtle -z-10"></div>
        </div>
        <h1 className="text-xl font-medium">AppSpark</h1>
      </div>
      
      <nav>
        <ul className="flex gap-6">
          <li>
            <a 
              href="#" 
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Resources
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
