import React from 'react';
import { ExternalLink, Figma, Eye, ArrowUpRight, CheckCircle2, Globe, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ProjectArtboardMockup } from './ProjectArtboardMockup';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal, index }) => {
  return (
    <article className="group relative rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      
      {/* Visual Artboard Preview Area */}
      <div 
        className="cursor-pointer relative overflow-hidden border-b border-white/5"
        onClick={() => onOpenModal(project)}
      >
        <ProjectArtboardMockup project={project} />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <span className="px-4 py-2 bg-white text-zinc-950 text-xs font-semibold rounded-lg shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Screens & UI Architecture</span>
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        <div className="space-y-3">
          {/* Metadata line (No pill badges, clean typographic separators) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <span className="text-white font-medium">{project.client}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-indigo-400">{project.category}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{project.timeline}</span>
          </div>

          {/* Project Title */}
          <h3 
            onClick={() => onOpenModal(project)}
            className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer text-balance"
          >
            {project.title}
          </h3>

          {/* Role & Summary */}
          <p className="text-xs text-zinc-400 font-medium">
            Role: <span className="text-zinc-200">{project.role}</span>
          </p>

          <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Key Deliverables highlights */}
          <div className="pt-2 border-t border-white/5 space-y-1.5">
            {project.keyHighlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls & External Hyperlinks */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          
          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-semibold text-zinc-200 hover:text-white flex items-center gap-1.5 cursor-pointer hover:underline underline-offset-4"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Screens ({project.screens.length})</span>
          </button>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Live Deployed Website"
                className="px-3 py-1.5 text-xs font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Live Site</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Design File in Figma"
              className="px-3 py-1.5 text-xs font-medium text-zinc-100 hover:text-white bg-zinc-800 hover:bg-purple-900/40 border border-white/10 hover:border-purple-500/40 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Figma className="w-3.5 h-3.5 text-purple-400" />
              <span>Figma Screen</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
          </div>

        </div>

      </div>
    </article>
  );
};
