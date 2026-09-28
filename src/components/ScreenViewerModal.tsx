import React, { useState, useEffect } from 'react';
import { 
  X, ExternalLink, Figma, Globe, ChevronLeft, ChevronRight, 
  CheckCircle2, Layers, ShieldCheck, ArrowUpRight, Smartphone, Monitor 
} from 'lucide-react';
import { Project, ScreenMockup } from '../data/portfolioData';

interface ScreenViewerModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ScreenViewerModal: React.FC<ScreenViewerModalProps> = ({ project, onClose }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project) {
        setActiveScreenIndex((prev) => (prev + 1) % project.screens.length);
      }
      if (e.key === 'ArrowLeft' && project) {
        setActiveScreenIndex((prev) => (prev - 1 + project.screens.length) % project.screens.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentScreen: ScreenMockup = project.screens[activeScreenIndex] || project.screens[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:px-6 bg-zinc-900 border-b border-white/10 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-white font-medium">{project.client}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-indigo-400">{project.category}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{project.role}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              {project.title}
            </h2>
          </div>

          {/* Quick Action Links & Close */}
          <div className="flex items-center gap-2 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Site</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors shadow-sm"
            >
              <Figma className="w-3.5 h-3.5" />
              <span>Open in Figma</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split Screen Viewer & Case Study Documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left: Interactive Screen Device Simulation & Screen Switcher */}
          <div className="lg:col-span-7 bg-zinc-900/50 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            
            {/* Screen Selector Tabs */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Screen Artboard {activeScreenIndex + 1} of {project.screens.length}</span>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-1">
                <button
                  disabled={activeScreenIndex === 0}
                  onClick={() => setActiveScreenIndex((prev) => Math.max(0, prev - 1))}
                  className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-zinc-300 transition-colors cursor-pointer"
                  title="Previous screen"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={activeScreenIndex === project.screens.length - 1}
                  onClick={() => setActiveScreenIndex((prev) => Math.min(project.screens.length - 1, prev + 1))}
                  className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-zinc-300 transition-colors cursor-pointer"
                  title="Next screen"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated High-Fidelity Screen Presentation */}
            <div className="flex-1 flex items-center justify-center p-4">
              <div className={`w-full ${currentScreen.deviceType === 'mobile' ? 'max-w-[340px]' : 'max-w-[480px]'} bg-zinc-950 border border-white/15 rounded-2xl p-4 shadow-2xl`}>
                
                {/* Device Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    {currentScreen.deviceType === 'mobile' ? (
                      <Smartphone className="w-4 h-4 text-indigo-400" />
                    ) : (
                      <Monitor className="w-4 h-4 text-amber-400" />
                    )}
                    <span className="font-semibold text-white">{currentScreen.screenData.headerTitle}</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">
                    {currentScreen.deviceType} UI
                  </span>
                </div>

                {/* Simulated Content Sections */}
                <div className="space-y-3">
                  {currentScreen.screenData.sections.map((sec, idx) => (
                    <div key={idx} className="p-3 bg-zinc-900/80 rounded-xl border border-white/5 space-y-2">
                      {sec.heading && (
                        <div className="text-xs font-bold text-white flex items-center justify-between">
                          <span>{sec.heading}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        </div>
                      )}

                      {sec.items && (
                        <div className="space-y-1.5 text-xs">
                          {sec.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="p-2 bg-zinc-950/60 rounded-lg flex items-center justify-between">
                              <div>
                                <div className="text-zinc-200 font-medium">{item.label}</div>
                                {item.desc && <div className="text-[11px] text-zinc-400 mt-0.5">{item.desc}</div>}
                              </div>
                              <div className="text-right">
                                <div className="text-indigo-300 font-mono text-xs">{item.value}</div>
                                {item.status && <div className="text-[10px] text-emerald-400 font-medium">{item.status}</div>}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Simulated Action Button */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">Validated Component State</span>
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>View Artboard in Figma</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Screen Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/5">
              {project.screens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeScreenIndex === idx ? 'w-6 bg-indigo-500' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Go to screen ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right: Design Rationale, Challenge & Solution */}
          <div className="lg:col-span-5 p-6 space-y-6 bg-zinc-950">
            
            {/* Active Screen Details */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                Screen Objective
              </span>
              <h3 className="text-base font-bold text-white">
                {currentScreen.title}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {currentScreen.description}
              </p>
            </div>

            {/* Key UX Features */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Key Design Decisions
              </span>
              <div className="space-y-1.5">
                {currentScreen.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem & Solution Accordion */}
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-white/5 space-y-3">
              <div>
                <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider">The UX Problem</span>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">The Solution & Architecture</span>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Project Deliverables</span>
              <ul className="space-y-1 text-xs text-zinc-300 list-disc list-inside">
                {project.deliverables.map((d, idx) => (
                  <li key={idx} className="text-zinc-300">{d}</li>
                ))}
              </ul>
            </div>

            {/* Direct Figma Jump Callout */}
            <div className="pt-2">
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold rounded-xl border border-white/10 hover:border-purple-500/40 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Figma className="w-4 h-4 text-purple-400" />
                  <span>Inspect High-Res Figma Canvas</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-300 transition-colors" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
