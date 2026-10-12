import React from 'react';
import { ProjectData } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Lock, Eye, Play } from 'lucide-react';
import { ProjectVisualMockup } from './ProjectVisualMockup';

interface CardProps {
  project: ProjectData;
  index: number;
  onExplore: (project: ProjectData) => void;
  onLaunchPreview: (project: ProjectData) => void;
}

export function ProjectCard({ project, index, onExplore, onLaunchPreview }: CardProps) {
  return (
    <Card
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300"
      data-testid={`card-project-${index}`}
    >
      {/* Visual Header / Mockup */}
      <div className="relative overflow-hidden cursor-pointer" onClick={() => onExplore(project)}>
        <ProjectVisualMockup project={project} />
        
        {/* Quick action overlay tag */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={project.statusBadge.variant} className="shadow-xs backdrop-blur-md text-xs">
            {project.statusBadge.label}
          </Badge>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              {project.categoryLabel}
            </span>
          </div>

          <h3
            onClick={() => onExplore(project)}
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors cursor-pointer"
            data-testid={`text-project-title-${index}`}
          >
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed" data-testid={`text-project-description-${index}`}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 5).map((tech, techIdx) => (
            <Badge
              key={techIdx}
              variant="secondary"
              className="font-mono text-[11px] py-0.5 px-2 bg-muted/80 text-muted-foreground"
              data-testid={`badge-tech-${index}-${techIdx}`}
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-[11px] font-mono text-muted-foreground self-center px-1">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="default"
              onClick={() => onExplore(project)}
              className="text-xs font-medium"
              data-testid={`button-explore-${index}`}
            >
              <Eye className="w-3.5 h-3.5 mr-1.5" />
              Explore Details
            </Button>

            {project.canEmbedLivePreview && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => onLaunchPreview(project)}
                className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                title="Open floating picture-in-picture window"
                data-testid={`button-pip-${index}`}
              >
                <Play className="w-3.5 h-3.5 mr-1 text-primary fill-primary" />
                PiP Preview
              </Button>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                asChild
                data-testid={`button-github-${index}`}
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}

            {project.liveUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary"
                asChild
                data-testid={`button-live-${index}`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live site for ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}

            {project.isPrivateRepo && (
              <span className="p-1.5 text-muted-foreground" title="Private Enterprise Repository">
                <Lock className="w-4 h-4" />
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
