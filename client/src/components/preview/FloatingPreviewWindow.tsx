import React, { useState, useEffect, useRef } from 'react';
import { ProjectData } from '@/data/projects';
import { X, Minus, Square, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WindowProps {
  project: ProjectData;
  initialPosition: { x: number; y: number };
  zIndex: number;
  onFocus: () => void;
  onClose: () => void;
}

export function FloatingPreviewWindow({
  project,
  initialPosition,
  zIndex,
  onFocus,
  onClose,
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  // Keep window within viewport on resize
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => {
        const maxX = Math.max(20, window.innerWidth - 640);
        const maxY = Math.max(20, window.innerHeight - 440);
        return {
          x: Math.min(prev.x, maxX),
          y: Math.min(prev.y, maxY),
        };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Only drag from header, not buttons
    if ((e.target as HTMLElement).closest('button')) return;
    onFocus();
    isDraggingRef.current = true;
    dragOffsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const newX = Math.max(10, Math.min(window.innerWidth - 300, moveEvent.clientX - dragOffsetRef.current.x));
      const newY = Math.max(60, Math.min(window.innerHeight - 100, moveEvent.clientY - dragOffsetRef.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  if (isMinimized) {
    return (
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          zIndex,
        }}
        onClick={() => {
          setIsMinimized(false);
          onFocus();
        }}
        className="cursor-pointer bg-card/95 border border-primary/40 shadow-xl rounded-full px-4 py-2 flex items-center gap-2.5 backdrop-blur-md animate-in fade-in"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-mono font-medium truncate max-w-[140px] text-foreground">
          {project.title}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 rounded-full p-0 text-muted-foreground hover:text-foreground"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="w-3 h-3" />
        </Button>
      </div>
    );
  }

  return (
    <div
      ref={windowRef}
      onMouseDown={onFocus}
      style={{
        position: 'fixed',
        left: isMaximized ? 20 : position.x,
        top: isMaximized ? 70 : position.y,
        width: isMaximized ? 'calc(100vw - 40px)' : 640,
        height: isMaximized ? 'calc(100vh - 90px)' : 460,
        zIndex,
      }}
      className="hidden md:flex flex-col bg-card/98 border border-border/80 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-150 select-none"
    >
      {/* Title Bar (Draggable) */}
      <div
        onPointerDown={handlePointerDown}
        className="h-10 bg-muted/80 border-b border-border/70 px-3 flex items-center justify-between cursor-grab active:cursor-grabbing touch-none"
      >
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onClose}
            aria-label="Close window"
            className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <X className="w-2 h-2 text-red-950 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize window"
            className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <Minus className="w-2 h-2 text-amber-950 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            aria-label="Maximize window"
            className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <Square className="w-1.5 h-1.5 text-emerald-950 opacity-0 group-hover:opacity-100" />
          </button>
        </div>

        {/* Window Address / Domain Bar */}
        <div className="flex items-center gap-2 bg-background/80 border border-border/50 rounded-md px-3 py-0.5 text-[11px] font-mono text-muted-foreground max-w-[320px] truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">{project.liveUrl || 'https://deepaksinghdev.in'}</span>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleReload}
            aria-label="Reload preview"
            title="Reload preview"
            className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-background/80"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open project in new tab"
              title="Open project in new tab"
              className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-background/80"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Viewport Frame */}
      <div className="relative flex-1 bg-background overflow-hidden">
        {project.canEmbedLivePreview && project.liveUrl ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 z-10 text-muted-foreground gap-2">
                <RefreshCw className="w-6 h-6 animate-spin text-primary" />
                <span className="text-xs font-mono">Loading live sandbox...</span>
              </div>
            )}
            <iframe
              key={iframeKey}
              src={project.liveUrl}
              title={`Live Preview of ${project.title}`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0 select-auto"
            />
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-3 bg-muted/20">
            <div className="p-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-base">{project.title} — Native Application</h4>
            <p className="text-xs text-muted-foreground max-w-sm">
              This project operates as a native or enterprise backend architecture that cannot be rendered in an external browser iframe.
            </p>
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  View Code Repository on GitHub
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
