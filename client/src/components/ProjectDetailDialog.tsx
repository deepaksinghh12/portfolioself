import React from 'react';
import { ProjectData } from '@/data/projects';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Layers, Target, Wrench, CheckCircle2, Lock } from 'lucide-react';
import { ProjectVisualMockup } from './ProjectVisualMockup';

interface DialogProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  onLaunchPreview: (project: ProjectData) => void;
}

export function ProjectDetailDialog({ project, isOpen, onClose, onLaunchPreview }: DialogProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <DialogHeader className="text-left space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider font-mono">
              {project.categoryLabel}
            </Badge>
            <Badge variant={project.statusBadge.variant} className="text-xs">
              {project.statusBadge.label}
            </Badge>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground font-medium">
            {project.tagline}
          </DialogDescription>
        </DialogHeader>

        {/* Visual Mockup Banner */}
        <div className="my-2">
          <ProjectVisualMockup project={project} />
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex flex-wrap items-center gap-3 py-2 border-y border-border/60">
          {project.canEmbedLivePreview && (
            <Button
              size="sm"
              onClick={() => {
                onClose();
                onLaunchPreview(project);
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Launch Interactive PiP
            </Button>
          )}

          {project.liveUrl && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live site for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Live Site
              </a>
            </Button>
          )}

          {project.githubUrl ? (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="w-4 h-4 mr-2" />
                View Repository
              </a>
            </Button>
          ) : project.isPrivateRepo ? (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground px-3 py-1.5 rounded bg-muted">
              <Lock className="w-3.5 h-3.5" />
              <span>Private Enterprise Repository</span>
            </div>
          ) : null}
        </div>

        {/* Structured Technical Case Study Details */}
        <div className="space-y-6 pt-2">
          {/* Problem & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-muted/40 border border-border/40 space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-red-500" /> The Problem
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-muted/40 border border-border/40 space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> The Solution
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Personal Engineering Contributions */}
          <div className="space-y-3">
            <h4 className="font-semibold text-base flex items-center gap-2">
              <Wrench className="w-4 h-4 text-primary" /> Key Personal Contributions
            </h4>
            <ul className="space-y-2">
              {project.personalContribution.map((point, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Matrix */}
          <div className="p-4 rounded-xl bg-card border border-border/60 space-y-3">
            <h4 className="font-semibold text-base flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" /> System Architecture
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded bg-muted/50 border border-border/30">
                <span className="text-muted-foreground block text-[10px] uppercase">Frontend Client:</span>
                <span className="text-foreground font-medium">{project.architecture.client}</span>
              </div>
              <div className="p-2.5 rounded bg-muted/50 border border-border/30">
                <span className="text-muted-foreground block text-[10px] uppercase">Server / Backend:</span>
                <span className="text-foreground font-medium">{project.architecture.server}</span>
              </div>
              <div className="p-2.5 rounded bg-muted/50 border border-border/30">
                <span className="text-muted-foreground block text-[10px] uppercase">Database / Storage:</span>
                <span className="text-foreground font-medium">{project.architecture.database}</span>
              </div>
              <div className="p-2.5 rounded bg-muted/50 border border-border/30">
                <span className="text-muted-foreground block text-[10px] uppercase">AI / ML / Cloud:</span>
                <span className="text-foreground font-medium">{project.architecture.mlOrCloud}</span>
              </div>
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-foreground">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="font-mono text-xs py-1 px-2.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
