import React, { useState } from 'react';
import { ProjectData } from '@/data/projects';
import { Layers, Sparkles } from 'lucide-react';

interface VisualProps {
  project: ProjectData;
  className?: string;
}

export function ProjectVisualMockup({ project, className = '' }: VisualProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-52 sm:h-60 bg-muted/40 rounded-xl overflow-hidden border border-border/50 group/thumb ${className}`}
    >
      {/* Authentic Screenshot Image */}
      {!imageError && project.screenshotUrl ? (
        <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
          {/* Skeleton placeholder while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
              <Layers className="w-8 h-8 text-muted-foreground/30" />
            </div>
          )}

          <img
            src={project.screenshotUrl}
            alt={project.screenshotAlt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full transition-all duration-500 group-hover/thumb:scale-105 ${
              project.objectFit === 'contain' ? 'object-contain p-2' : 'object-cover object-top'
            } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Subtle gradient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none opacity-40 group-hover/thumb:opacity-20 transition-opacity" />
        </div>
      ) : (
        /* Neutral Technical Architecture Fallback */
        <div className="w-full h-full p-6 flex flex-col justify-between bg-card text-card-foreground">
          <div className="flex items-center justify-between border-b border-border/50 pb-2">
            <span className="text-xs font-mono font-medium text-muted-foreground">
              {project.title} // Architecture Overview
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              Technical Case Study
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <p className="text-xs font-medium text-foreground">{project.tagline}</p>
            <p className="text-[11px] text-muted-foreground line-clamp-2 max-w-sm mx-auto">
              {project.architecture.highlights[0] || project.description}
            </p>
          </div>

          <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>Stack: {project.techStack.slice(0, 3).join(', ')}</span>
            <span className="text-primary flex items-center gap-1">
              Architecture Spec <Sparkles className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
