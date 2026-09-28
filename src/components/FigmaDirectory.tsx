import React from 'react';
import { Figma, ExternalLink, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface FigmaDirectoryProps {
  projects: Project[];
  onOpenProjectModal: (projectId: string) => void;
}

export const FigmaDirectory: React.FC<FigmaDirectoryProps> = ({ projects, onOpenProjectModal }) => {
  return (
    <section id="direct-figma-links" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
            <Figma className="w-4 h-4" />
            <span>Direct Design Hyperlinks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Figma Design Files & Live Deployments
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Click directly on any link below to watch the live artboards in Figma or inspect deployed web products.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-purple-500/40 transition-all group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>{project.category}</span>
                <span className="font-mono text-[11px] text-zinc-500">{project.client}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Direct Hyperlinks */}
            <div className="pt-4 mt-4 border-t border-white/5 space-y-2">
              {/* Figma Link */}
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-zinc-800/90 hover:bg-purple-950/40 text-zinc-200 hover:text-white rounded-lg border border-white/10 hover:border-purple-500/50 flex items-center justify-between text-xs font-semibold transition-all"
              >
                <div className="flex items-center gap-2">
                  <Figma className="w-3.5 h-3.5 text-purple-400" />
                  <span>Open in Figma Design</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-purple-300" />
              </a>

              {/* Live Web Link if available */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-300 hover:text-emerald-200 rounded-lg border border-emerald-500/30 flex items-center justify-between text-xs font-semibold transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Visit Live Website</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              )}

              {/* In-app Screen Inspector */}
              <button
                onClick={() => onOpenProjectModal(project.id)}
                className="w-full text-center py-1 text-[11px] text-zinc-400 hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Preview UI Breakdown in Portfolio →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
