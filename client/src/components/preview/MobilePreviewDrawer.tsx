import React, { useState } from 'react';
import { ProjectData } from '@/data/projects';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { X, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';

interface MobileDrawerProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MobilePreviewDrawer({ project, isOpen, onClose }: MobileDrawerProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!project) return null;

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="h-[92vh] max-h-[92vh] flex flex-col p-0 rounded-t-2xl overflow-hidden md:hidden">
        {/* Mobile Header Bar */}
        <DrawerHeader className="p-3 border-b border-border/60 bg-muted/50 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <div className="text-left overflow-hidden">
              <DrawerTitle className="text-sm font-bold truncate">
                {project.title}
              </DrawerTitle>
              <DrawerDescription className="text-[10px] text-muted-foreground truncate font-mono">
                {project.liveUrl || 'Mobile Live View'}
              </DrawerDescription>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {project.liveUrl && (
              <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in external browser"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
            <DrawerClose asChild>
              <Button size="icon" variant="ghost" className="h-8 w-8" aria-label="Close preview">
                <X className="w-4 h-4" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        {/* Viewport content */}
        <div className="relative flex-1 bg-background overflow-hidden">
          {project.canEmbedLivePreview && project.liveUrl ? (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 z-10 text-muted-foreground gap-2">
                  <RefreshCw className="w-6 h-6 animate-spin text-primary" />
                  <span className="text-xs font-mono">Loading live application...</span>
                </div>
              )}
              <iframe
                src={project.liveUrl}
                title={`Mobile preview of ${project.title}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                className="w-full h-full border-0 select-auto"
              />
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="p-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-base">{project.title}</h4>
              <p className="text-xs text-muted-foreground max-w-xs">
                This project is engineered as a native or enterprise system. Explore the source repository on GitHub.
              </p>
              {project.githubUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
