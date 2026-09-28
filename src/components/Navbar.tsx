import React, { useState } from 'react';
import { ExternalLink, FileText, Figma, Mail, Phone, ChevronDown, Check, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface NavbarProps {
  activeTab: 'work' | 'resume';
  setActiveTab: (tab: 'work' | 'resume') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenContact }) => {
  const [showFigmaMenu, setShowFigmaMenu] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pradyuthvemula3@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0c0d10]/85 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setActiveTab('work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              Pradyuth Vemula
            </span>
            <span className="hidden sm:inline-block ml-3 text-xs text-zinc-400 font-normal">
              UI Designer <span className="text-zinc-600">·</span> UX Strategist
            </span>
          </button>

          {/* View Mode Toggle: Selected Work vs Interactive Resume */}
          <div className="flex items-center bg-zinc-900/90 p-1 rounded-lg border border-white/5 text-xs font-medium">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-zinc-800 text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Selected Work
            </button>
            <button
              onClick={() => setActiveTab('resume')}
              className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'resume'
                  ? 'bg-zinc-800 text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume & Bio</span>
            </button>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <button
            onClick={() => {
              setActiveTab('work');
              const el = document.getElementById('projects-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Case Studies
          </button>
          <button
            onClick={() => {
              setActiveTab('resume');
              const el = document.getElementById('experience-timeline');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => {
              setActiveTab('resume');
              const el = document.getElementById('certifications-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            CUA & Google Certifications
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('skills-matrix');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Design Systems
          </button>
        </nav>

        {/* Zone 3: Actions (Figma Quick Links & Contact) */}
        <div className="flex items-center gap-3 relative">
          {/* Quick Figma Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFigmaMenu(!showFigmaMenu)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-lg transition-colors cursor-pointer"
              title="Quick access to all Figma design files"
            >
              <Figma className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Figma Files</span>
              <ChevronDown className="w-3 h-3 text-zinc-400" />
            </button>

            {showFigmaMenu && (
              <div
                className="absolute right-0 mt-2 w-72 sm:w-80 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl p-2 z-50 text-xs"
                onMouseLeave={() => setShowFigmaMenu(false)}
              >
                <div className="px-3 py-2 border-b border-white/5 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Open Project in Figma
                </div>
                <div className="py-1 max-h-72 overflow-y-auto space-y-0.5">
                  {PROJECTS.map((p) => (
                    <a
                      key={p.id}
                      href={p.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white group transition-colors"
                      onClick={() => setShowFigmaMenu(false)}
                    >
                      <div className="truncate pr-2">
                        <div className="font-medium text-white truncate">{p.title}</div>
                        <div className="text-[11px] text-zinc-400">{p.client} · {p.category}</div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Contact Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer shadow-sm hover:shadow-indigo-500/20"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};
