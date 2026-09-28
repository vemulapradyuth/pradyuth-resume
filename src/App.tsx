import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ScreenViewerModal } from './components/ScreenViewerModal';
import { ResumeView } from './components/ResumeView';
import { FigmaDirectory } from './components/FigmaDirectory';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { PROJECTS, Project } from './data/portfolioData';
import { 
  Figma, ShieldCheck, Award, ArrowRight, Code2, 
  ExternalLink, Layers, CheckCircle2, Mail, Phone, Download 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'resume'>('work');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const categories = [
    'All',
    'Healthcare',
    'Robotics & Automation',
    'Smart Tourism',
    'E-Commerce & Wellness',
    'FoodTech & Sustainability'
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleOpenProjectModalById = (projectId: string) => {
    const found = PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setModalProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#eaeaea] flex flex-col justify-between selection:bg-indigo-500/30 selection:text-white">
      
      {/* Top Bar Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      <main className="flex-1">
        {activeTab === 'work' ? (
          <div>
            {/* Split Hero Section */}
            <Hero 
              onSelectProject={handleOpenProjectModalById}
              onExploreWork={() => {
                const el = document.getElementById('projects-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenResume={() => {
                setActiveTab('resume');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Case Studies & Selected Work Section */}
            <section id="projects-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Featured Product Work</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Selected Case Studies & Interactive Screens
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                    Click any project to inspect interactive screen artboards, UX research rationale, and open verified Figma files.
                  </p>
                </div>

                {/* Interactive Filter Tabs (Buttons with click handlers per Section 1.A) */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 rounded-xl border border-white/5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                        selectedCategory === cat
                          ? 'bg-zinc-800 text-white shadow-sm font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, idx) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                    index={idx}
                    onOpenModal={(p) => setModalProject(p)}
                  />
                ))}
              </div>

              {/* Direct Figma & Live Deployments Hyperlinks Hub */}
              <div className="pt-12">
                <FigmaDirectory 
                  projects={PROJECTS} 
                  onOpenProjectModal={handleOpenProjectModalById}
                />
              </div>

              {/* Design Engineering & Philosophy Section */}
              <div className="pt-12">
                <div className="p-8 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-6">
                  <div className="max-w-3xl space-y-3">
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                      Engineering Meets Design
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Why a Computer Science foundation matters in Product Design
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Design without feasibility creates technical debt. Because I started in Computer Science engineering and transitioned into UX strategy, I anticipate edge cases early: API latency states, component variant scalability, accessibility contrast trees, and responsive breakpoint physics.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5 text-xs">
                    <div className="space-y-1.5">
                      <div className="text-white font-bold">Usability-First Architecture</div>
                      <p className="text-zinc-400 leading-relaxed">
                        CUA (Human Factors International) principles guiding cognitive load reduction and error prevention.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-white font-bold">Figma Auto-Layout & Design Systems</div>
                      <p className="text-zinc-400 leading-relaxed">
                        Tokens, variants, responsive auto-layout, and pixel-precise handoff documentation for engineers.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-white font-bold">Business & Conversion Rigor</div>
                      <p className="text-zinc-400 leading-relaxed">
                        Data-informed funnels designed to increase booking completion, reduce drop-offs, and elevate trust.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => {
                        setActiveTab('resume');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold rounded-lg border border-white/10 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Read Complete Resume & Career History</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                    >
                      Schedule a Portfolio Walkthrough →
                    </button>
                  </div>
                </div>
              </div>

              {/* Call to Action Banner */}
              <div className="pt-8 pb-4">
                <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-zinc-900 to-zinc-900 border border-indigo-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">
                      Looking for an experienced UI/UX Product Designer?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300">
                      Open to full-time product roles, high-growth startups, and selective freelance contracts.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-md"
                    >
                      Get in Touch
                    </button>
                    <a
                      href="mailto:pradyuthvemula3@gmail.com"
                      className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium rounded-lg border border-white/10 transition-colors"
                    >
                      Email Directly
                    </a>
                  </div>
                </div>
              </div>

            </section>
          </div>
        ) : (
          /* Interactive Resume & Profile View */
          <ResumeView onOpenProjectModal={handleOpenProjectModalById} />
        )}
      </main>

      {/* Screen Viewer Modal */}
      <ScreenViewerModal 
        project={modalProject}
        onClose={() => setModalProject(null)}
      />

      {/* Contact Form Modal */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Footer */}
      <Footer 
        onSelectTab={setActiveTab}
        onOpenContact={() => setIsContactOpen(true)}
      />

    </div>
  );
}
