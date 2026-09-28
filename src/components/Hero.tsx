import React from 'react';
import { ExternalLink, Figma, ArrowRight, ShieldCheck, Award, Code2, Globe, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onSelectProject: (projectId: string) => void;
  onExploreWork: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject, onExploreWork, onOpenResume }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean metadata line without pill badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400">
              <span className="text-indigo-400 font-semibold">UI & Product Designer</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>UX Strategist</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-300">Computer Science Engineering Foundation</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Warangal, India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Designing scalable digital products that bridge human behavior with technical execution.
            </h1>

            {/* Refined Body Description from resume */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              I am <strong className="text-white font-semibold">Pradyuth Vemula</strong>, a UI and Product Designer with five years of experience across healthcare, industrial robotics, e-commerce, smart tourism, and marketplaces. With a Computer Science engineering background, I architect interfaces that look exceptional, solve complex workflows, and hand off seamlessly to developers.
            </p>

            {/* Certifications Highlights */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:items-center text-xs text-zinc-400 border-t border-white/5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong className="text-zinc-200">Certified Usability Analyst (CUA)</strong> · Human Factors International
                </span>
              </div>
              <div className="hidden sm:block text-zinc-600">·</div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong className="text-zinc-200">Google UX Professional</strong> Certified
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                className="px-6 py-3 bg-white text-zinc-950 font-semibold text-sm rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-white/5"
              >
                <span>Explore Selected Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenResume}
                className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm rounded-lg border border-white/10 transition-colors cursor-pointer"
              >
                View Full Experience & Bio
              </button>

              <a
                href="#direct-figma-links"
                className="px-4 py-3 text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Figma className="w-4 h-4 text-purple-400" />
                <span>Direct Figma Links ({PROJECTS.length})</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-zinc-900/80 border border-white/10 p-6 shadow-2xl backdrop-blur-sm overflow-hidden">
              
              {/* Header inside showcase */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5 text-xs">
                <div className="flex items-center gap-2 font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive Project Dossier</span>
                </div>
                <span className="text-zinc-500 font-mono">5+ Years Craft</span>
              </div>

              {/* Quick Jump Case Studies with Direct Figma & Live URL access */}
              <div className="space-y-3">
                {PROJECTS.slice(0, 4).map((project) => (
                  <div
                    key={project.id}
                    className="p-3.5 rounded-xl bg-zinc-950/60 hover:bg-zinc-800/80 border border-white/5 hover:border-white/15 transition-all group cursor-pointer"
                    onClick={() => onSelectProject(project.id)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                          <span>{project.title}</span>
                          {project.liveUrl && (
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                              Live
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5">
                          {project.client} <span className="text-zinc-600">·</span> {project.category}
                        </div>
                      </div>

                      {/* Figma direct jump button */}
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Open in Figma"
                        className="p-1.5 rounded-lg bg-zinc-900 hover:bg-purple-900/40 text-zinc-400 hover:text-purple-300 border border-white/10 transition-colors shrink-0"
                      >
                        <Figma className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Quantitative Proofs Adjacent to Hero */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/5 text-center">
                <div className="p-2">
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">05+</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Years Experience</div>
                </div>
                <div className="p-2 border-x border-white/5">
                  <div className="text-2xl font-bold font-mono text-indigo-400 tabular-nums">06</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Figma Workspaces</div>
                </div>
                <div className="p-2">
                  <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">02</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Live Sites Active</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
