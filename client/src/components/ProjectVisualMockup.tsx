import React from 'react';
import { ProjectData } from '@/data/projects';
import { Database, Cpu, Smartphone, Activity, Sparkles, Code2, LineChart, ShieldCheck } from 'lucide-react';

interface VisualProps {
  project: ProjectData;
  className?: string;
}

export function ProjectVisualMockup({ project, className = '' }: VisualProps) {
  switch (project.previewType) {
    case 'mobile-mockup':
      return (
        <div className={`relative w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl overflow-hidden p-4 flex items-center justify-center border border-border/40 ${className}`}>
          {/* Subtle glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
          
          {/* Smartphone device frame */}
          <div className="relative w-44 h-48 bg-slate-900 rounded-2xl border-2 border-slate-700 shadow-2xl overflow-hidden flex flex-col p-2">
            {/* Speaker notch */}
            <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
            
            {/* Screen content */}
            <div className="flex-1 bg-slate-950 rounded-lg p-2 text-[10px] text-slate-300 flex flex-col gap-1.5 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Smartphone className="w-3 h-3" /> TFLite Live
                </span>
                <span className="text-[9px] text-slate-400">92% Acc</span>
              </div>
              <div className="bg-slate-900 rounded p-1.5 border border-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="leading-tight">
                  <div className="text-[9px] text-slate-200">Pothole Detected</div>
                  <div className="text-[8px] text-slate-400">Lat: 26.9124, Lon: 75.7873</div>
                </div>
              </div>
              <div className="mt-auto bg-emerald-500/10 border border-emerald-500/30 rounded p-1 text-center text-emerald-300 text-[9px]">
                Report Synced to Firebase
              </div>
            </div>
          </div>
        </div>
      );

    case 'dashboard-mockup':
      return (
        <div className={`relative w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-xl overflow-hidden p-4 flex flex-col border border-border/40 ${className}`}>
          {/* Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />
          
          {/* Dashboard Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-300 font-medium">{project.title} Console</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px]">
              AI Pipeline Ready
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-2 mt-3 flex-1 font-mono text-[10px]">
            <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-2 flex flex-col justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <LineChart className="w-3 h-3 text-indigo-400" /> Pipeline Revenue
              </span>
              <div className="text-sm font-bold text-slate-100">$48,250</div>
              <span className="text-[9px] text-emerald-400">↑ 18.4% this quarter</span>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-2 flex flex-col justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> LLM Risk Engine
              </span>
              <div className="text-[9px] text-amber-300">3 Deals Flagged Stale</div>
              <span className="text-[9px] text-slate-400">Auto follow-up primed</span>
            </div>
          </div>

          <div className="mt-2 bg-indigo-950/40 border border-indigo-800/40 rounded p-1.5 flex items-center justify-between text-[9px] text-slate-300">
            <span className="flex items-center gap-1 font-mono">
              <Database className="w-3 h-3 text-indigo-400" /> MongoDB Index Synced
            </span>
            <span className="text-emerald-400 font-mono">WebSocket Online</span>
          </div>
        </div>
      );

    case 'code-visualizer':
      return (
        <div className={`relative w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl overflow-hidden p-4 flex flex-col border border-border/40 ${className}`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300 font-medium">AlgoQuest // Monaco Canvas</span>
            </div>
            <span className="text-[10px] text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
              QuickSort.ts [Active]
            </span>
          </div>

          {/* Visualization canvas */}
          <div className="flex-1 mt-3 flex items-end justify-between gap-1.5 px-3 pb-2 bg-slate-950/60 rounded-lg border border-slate-800">
            {[45, 80, 25, 95, 60, 30, 75, 40, 90, 55].map((val, idx) => (
              <div
                key={idx}
                className="w-full rounded-t transition-all duration-300"
                style={{
                  height: `${val}%`,
                  backgroundColor:
                    idx === 3 ? '#38bdf8' : idx === 8 ? '#f59e0b' : '#334155',
                }}
              />
            ))}
          </div>

          {/* Footer stats */}
          <div className="mt-2 flex items-center justify-between text-[9px] text-slate-400 font-mono">
            <span>Swaps: 24 | Comparisons: 48</span>
            <span className="text-cyan-400">O(n log n) Best</span>
          </div>
        </div>
      );

    case 'live-iframe':
    default:
      return (
        <div className={`relative w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 to-blue-950 rounded-xl overflow-hidden p-4 flex flex-col justify-between border border-border/40 ${className}`}>
          {/* Glow */}
          <div className="absolute top-0 left-0 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400 font-mono z-10">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-slate-200 font-medium">{project.title}</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Embeddable
            </span>
          </div>

          {/* Center Graphic */}
          <div className="flex-1 flex flex-col items-center justify-center text-center p-2 z-10">
            <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20 mb-2">
              <Cpu className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-xs text-slate-200 font-medium">{project.tagline}</p>
            <p className="text-[10px] text-slate-400 mt-1">
              Click &quot;Interactive Preview&quot; to launch live application in floating PiP window
            </p>
          </div>

          {/* Footer Bar */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400 font-mono z-10">
            <span>Domain: {project.liveUrl ? new URL(project.liveUrl).hostname : 'Production'}</span>
            <span className="text-blue-400">Sandbox Verified</span>
          </div>
        </div>
      );
  }
}
