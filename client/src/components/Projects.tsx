import React, { useState } from 'react';
import { ProjectCategory, ProjectData, PROJECTS } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailDialog } from './ProjectDetailDialog';
import { PreviewWindowManager } from './preview/PreviewWindowManager';
import { Button } from '@/components/ui/button';
import { Sparkles, Layers, Smartphone, Wrench, Grid } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [detailProject, setDetailProject] = useState<ProjectData | null>(null);

  // Floating PiP windows state (desktop allows multiple, max 2)
  const [activePiPProjects, setActivePiPProjects] = useState<ProjectData[]>([]);
  // Mobile single drawer preview
  const [mobilePreviewProject, setMobilePreviewProject] = useState<ProjectData | null>(null);

  const categories: { id: ProjectCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Projects', icon: Grid },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: Sparkles },
    { id: 'fullstack', label: 'Full-Stack Web', icon: Layers },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'tools', label: 'Developer Tools', icon: Wrench },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleLaunchPreview = (project: ProjectData) => {
    // Check screen width for mobile vs desktop
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setMobilePreviewProject(project);
    } else {
      setActivePiPProjects((prev) => {
        // Prevent duplicate windows
        if (prev.some((p) => p.id === project.id)) return prev;
        // Keep up to 2 active windows
        return [...prev.slice(-1), project];
      });
    }
  };

  const handleCloseProjectPiP = (projectId: string) => {
    setActivePiPProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  return (
    <section id="projects" className="py-24 bg-muted/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Featured Engineering Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground" data-testid="text-projects-heading">
            Production & AI Systems
          </h2>
          <p className="text-base text-muted-foreground" data-testid="text-projects-subtitle">
            Explore scalable web applications, edge AI mobile integrations, and national-winning platforms built with modern technology.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <Button
                key={cat.id}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs sm:text-sm font-medium transition-all ${
                  isSelected ? 'shadow-md' : 'border-border/60 text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-3.5 h-3.5 mr-1.5" />
                {cat.label}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onExplore={(p) => setDetailProject(p)}
              onLaunchPreview={(p) => handleLaunchPreview(p)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Dialog */}
      <ProjectDetailDialog
        project={detailProject}
        isOpen={Boolean(detailProject)}
        onClose={() => setDetailProject(null)}
        onLaunchPreview={(p) => handleLaunchPreview(p)}
      />

      {/* Picture-in-Picture Floating Window Manager */}
      <PreviewWindowManager
        activeProjects={activePiPProjects}
        mobileProject={mobilePreviewProject}
        onCloseProject={handleCloseProjectPiP}
        onCloseMobile={() => setMobilePreviewProject(null)}
        onCloseAll={() => setActivePiPProjects([])}
      />
    </section>
  );
}
