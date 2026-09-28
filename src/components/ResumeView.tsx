import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Download, Printer, ShieldCheck, 
  Award, GraduationCap, Briefcase, Code2, ExternalLink, 
  Figma, Globe, Copy, Check, ChevronRight 
} from 'lucide-react';
import { WORK_EXPERIENCE, CERTIFICATIONS, SKILL_CATEGORIES, PROJECTS } from '../data/portfolioData';

interface ResumeViewProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onOpenProjectModal }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-in fade-in duration-300">
      
      {/* Resume Document Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Print / Download Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Interactive Curriculum Vitae · Verified Dossier</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy('pradyuthvemula3@gmail.com', 'email')}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText === 'email' ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Profile Identity */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Pradyuth Vemula
            </h1>
            <p className="text-sm sm:text-base font-semibold text-indigo-400 mt-1 uppercase tracking-wider">
              UI DESIGNER · PRODUCT DESIGNER · UX STRATEGIST
            </p>
          </div>

          {/* Contact Details Line */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>Warangal, Telangana, India</span>
            </div>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <a 
              href="mailto:pradyuthvemula3@gmail.com" 
              className="flex items-center gap-1.5 text-zinc-300 hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              <span>pradyuthvemula3@gmail.com</span>
            </a>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <a 
              href="tel:+919949292988" 
              className="flex items-center gap-1.5 text-zinc-300 hover:text-indigo-400 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              <span>+91 9949292988</span>
            </a>
          </div>

          {/* Professional Summary Text from Resume */}
          <div className="pt-4 border-t border-white/5 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Professional Summary
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              UI and Product Designer with a <strong className="text-white">Computer Science engineering background</strong> and five years of experience designing web, mobile, and SaaS products across tourism, healthcare, e-commerce, robotics, and marketplaces. I started in engineering and moved into design because I wanted to shape how products feel to use, not only how they run. That background helps me work closely with developers, judge what is feasible early, and hand off designs that are easy to build.
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              My process covers user research, journey mapping, information architecture, wireframes, high-fidelity interfaces, interactive prototypes, and reusable design systems. I focus on turning complex workflows, such as multi-service bookings, healthcare scheduling, and technical product catalogs, into clear, accessible experiences that support business goals. Certified Usability Analyst (HFI) and Google UX Professional Certificate holder.
            </p>
          </div>

        </div>

      </div>

      {/* Certifications & Education (HFI CUA + Google UX + B.Tech) */}
      <section id="certifications-section" className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-white/10">
          <Award className="w-5 h-5 text-indigo-400" />
          <h2 className="text-lg font-bold text-white tracking-tight">
            Education & Professional Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-zinc-900/60 border border-white/10 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">{cert.credentialId}</span>
                {idx === 0 && <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />}
              </div>
              <h3 className="text-sm font-bold text-white">{cert.title}</h3>
              <p className="text-xs text-zinc-400 font-medium">{cert.issuer}</p>
              <p className="text-xs text-zinc-400 pt-2 border-t border-white/5 leading-relaxed">
                {cert.topics}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Strengths & Skills Matrix */}
      <section id="skills-matrix" className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-white/10">
          <Code2 className="w-5 h-5 text-indigo-400" />
          <h2 className="text-lg font-bold text-white tracking-tight">
            Core Strengths & Technical Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                {cat.category}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300">
                {cat.skills.map((skill, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span>{skill}</span>
                    {sIdx < cat.skills.length - 1 && <span className="text-zinc-600">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section id="experience-timeline" className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>
          <span className="text-xs text-zinc-400">2021 – Present</span>
        </div>

        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4 hover:border-white/20 transition-colors"
            >
              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs text-indigo-400 font-semibold mt-0.5">
                    {exp.company} <span className="text-zinc-600">·</span> <span className="text-zinc-400">{exp.type}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  {exp.timeline}
                </div>
              </div>

              {/* Tools row */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                <span className="font-semibold text-zinc-500">Tools:</span>
                {exp.tools.map((t, tIdx) => (
                  <span key={tIdx} className="text-zinc-300">
                    {t}{tIdx < exp.tools.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements Bullet Points */}
              <ul className="space-y-2 pt-2 border-t border-white/5">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Related Hyperlink Tags if matched to a Figma file */}
              {(() => {
                const matchedProjects = PROJECTS.filter(
                  (p) => p.client.toLowerCase().includes(exp.company.toLowerCase().slice(0, 5)) ||
                         exp.description.toLowerCase().includes(p.title.toLowerCase().slice(0, 6))
                );

                if (matchedProjects.length > 0) {
                  return (
                    <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-3">
                      <span className="text-[11px] text-zinc-500 font-medium">Associated Project Screens:</span>
                      {matchedProjects.map((p) => (
                        <div key={p.id} className="flex items-center gap-2">
                          <button
                            onClick={() => onOpenProjectModal(p.id)}
                            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                          >
                            <span>Inspect {p.title}</span>
                          </button>
                          <a
                            href={p.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-zinc-400 hover:text-purple-300 flex items-center gap-1"
                          >
                            <Figma className="w-3 h-3 text-purple-400" />
                            <span>Figma</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })()}

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
