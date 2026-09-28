import React from 'react';
import { Mail, Phone, MapPin, Figma, ArrowUp } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface FooterProps {
  onSelectTab: (tab: 'work' | 'resume') => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          
          {/* Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-base font-bold text-white tracking-tight">
              Pradyuth Vemula
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              UI Designer, Product Designer & UX Strategist with 5+ years crafting human-centered digital experiences across healthcare, robotics, e-commerce, and smart tourism.
            </p>
            <div className="pt-2 flex items-center gap-4 text-[11px] text-zinc-500">
              <span>CUA · Human Factors International</span>
              <span>·</span>
              <span>Google UX Professional</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('work');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('resume');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Interactive Resume & Timeline
                </button>
              </li>
              <li>
                <a href="#direct-figma-links" className="hover:text-white transition-colors">
                  Figma Design Workspaces ({PROJECTS.length})
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Contact & Location
            </div>
            <div className="space-y-1.5 text-zinc-300">
              <div>Warangal, Telangana, India</div>
              <div>
                <a href="mailto:pradyuthvemula3@gmail.com" className="hover:text-indigo-400 transition-colors">
                  pradyuthvemula3@gmail.com
                </a>
              </div>
              <div className="font-mono">
                <a href="tel:+919949292988" className="hover:text-indigo-400 transition-colors">
                  +91 9949292988
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Pradyuth Vemula. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
