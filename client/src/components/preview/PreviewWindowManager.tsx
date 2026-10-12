import React, { useState } from 'react';
import { ProjectData } from '@/data/projects';
import { FloatingPreviewWindow } from './FloatingPreviewWindow';
import { MobilePreviewDrawer } from './MobilePreviewDrawer';

interface PreviewManagerProps {
  activeProjects: ProjectData[];
  mobileProject: ProjectData | null;
  onCloseProject: (projectId: string) => void;
  onCloseMobile: () => void;
  onCloseAll: () => void;
}

export function PreviewWindowManager({
  activeProjects,
  mobileProject,
  onCloseProject,
  onCloseMobile,
  onCloseAll,
}: PreviewManagerProps) {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  return (
    <>
      {/* Desktop Picture-in-Picture Windows */}
      {activeProjects.map((project, idx) => {
        // Offset cascading window positions
        const initialX = Math.min(window.innerWidth - 680, 80 + idx * 40);
        const initialY = Math.min(window.innerHeight - 500, 100 + idx * 40);

        return (
          <FloatingPreviewWindow
            key={project.id}
            project={project}
            initialPosition={{ x: initialX, y: initialY }}
            zIndex={focusedId === project.id ? 100 : 80 + idx}
            onFocus={() => setFocusedId(project.id)}
            onClose={() => onCloseProject(project.id)}
          />
        );
      })}

      {/* Floating Close All action if >1 window open */}
      {activeProjects.length > 1 && (
        <div className="fixed bottom-6 right-6 z-[120] hidden md:block">
          <button
            onClick={onCloseAll}
            className="text-xs font-mono font-medium bg-destructive text-destructive-foreground px-3 py-1.5 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Close All Previews ({activeProjects.length})
          </button>
        </div>
      )}

      {/* Mobile Drawer Preview */}
      <MobilePreviewDrawer
        project={mobileProject}
        isOpen={Boolean(mobileProject)}
        onClose={onCloseMobile}
      />
    </>
  );
}
