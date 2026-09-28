import React from 'react';
import { Project } from '../data/portfolioData';
import { 
  Heart, Calendar, Activity, Bot, Cpu, Compass, 
  MapPin, QrCode, Sparkles, Shield, CheckCircle2, 
  Clock, ArrowUpRight, Award, Leaf, Zap, ShoppingCart
} from 'lucide-react';

interface ProjectArtboardMockupProps {
  project: Project;
  interactive?: boolean;
}

export const ProjectArtboardMockup: React.FC<ProjectArtboardMockupProps> = ({ project }) => {
  // Render bespoke high-fidelity UI artboards based on project ID
  if (project.id === 'med-xpert') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] bg-gradient-to-b from-sky-950/40 to-slate-950 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
        {/* Mobile Phone Mockup Frame */}
        <div className="w-full max-w-[320px] bg-slate-900 border-2 border-slate-700/60 rounded-[32px] p-3 shadow-2xl relative">
          {/* Phone Speaker Notch */}
          <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
            <div className="w-3 h-1 bg-slate-600 rounded-full" />
          </div>

          {/* App Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                M+
              </div>
              <div>
                <div className="font-bold text-white text-[12px]">MED-XPERT</div>
                <div className="text-[10px] text-slate-400">Patient Care Hub</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Online
            </span>
          </div>

          {/* Doctor Appointment Card */}
          <div className="mt-3 p-3 bg-slate-800/80 rounded-xl border border-sky-500/20">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] text-sky-400 font-semibold uppercase tracking-wider">Consultation</span>
                <div className="font-semibold text-white text-xs mt-0.5">Dr. Sarah Mitchell, MD</div>
                <div className="text-[11px] text-slate-400">Senior Cardiologist · 12 Yrs</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-emerald-400">$65</div>
                <div className="text-[10px] text-slate-400">Video Slot</div>
              </div>
            </div>
            
            {/* Slot Selector */}
            <div className="grid grid-cols-3 gap-1.5 mt-2.5 pt-2 border-t border-slate-700/50">
              <div className="bg-sky-500/20 text-sky-300 text-[10px] font-medium py-1 px-1.5 rounded text-center border border-sky-500/40">
                10:30 AM
              </div>
              <div className="bg-slate-700/40 text-slate-300 text-[10px] py-1 px-1.5 rounded text-center">
                02:15 PM
              </div>
              <div className="bg-slate-700/40 text-slate-300 text-[10px] py-1 px-1.5 rounded text-center">
                04:45 PM
              </div>
            </div>
          </div>

          {/* Lab Test Package */}
          <div className="mt-2.5 p-2.5 bg-slate-800/40 rounded-xl border border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="font-medium text-slate-200 text-[11px]">Comprehensive Vital Panel</div>
                <div className="text-[10px] text-slate-400">64 Tests · Fasting Blood Sugar</div>
              </div>
            </div>
            <span className="text-[10px] font-medium text-sky-400">Book Lab</span>
          </div>

          {/* Active Rx Dosage Reminder */}
          <div className="mt-2 p-2 bg-emerald-950/30 border border-emerald-500/20 rounded-lg flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-300">Next Rx: Atorvastatin 10mg</span>
            </div>
            <span className="text-emerald-400 font-mono text-[10px]">8:00 PM</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'sk-robotics') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] bg-gradient-to-b from-amber-950/30 to-zinc-950 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
        {/* Desktop Browser Mockup Frame */}
        <div className="w-full max-w-[420px] bg-zinc-900 border border-zinc-700/60 rounded-xl shadow-2xl overflow-hidden">
          {/* Browser Bar */}
          <div className="bg-zinc-800 px-3 py-2 flex items-center justify-between border-b border-zinc-700">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-3 py-0.5 rounded border border-white/5">
              skrobotics.us/industrial-arms
            </div>
            <Bot className="w-3.5 h-3.5 text-amber-400" />
          </div>

          {/* Web Content Preview */}
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Series 6-Axis</span>
                <div className="text-sm font-bold text-white">SK-Apex 120 Industrial Arm</div>
              </div>
              <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                120kg Payload
              </span>
            </div>

            {/* Spec Matrix Grid */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-zinc-800 text-center">
              <div className="bg-zinc-800/60 p-2 rounded">
                <div className="text-xs font-mono font-bold text-white">2,850 mm</div>
                <div className="text-[10px] text-zinc-400">Reach Radius</div>
              </div>
              <div className="bg-zinc-800/60 p-2 rounded">
                <div className="text-xs font-mono font-bold text-amber-400">±0.04 mm</div>
                <div className="text-[10px] text-zinc-400">Repeatability</div>
              </div>
              <div className="bg-zinc-800/60 p-2 rounded">
                <div className="text-xs font-mono font-bold text-emerald-400">IP67</div>
                <div className="text-[10px] text-zinc-400">Rating</div>
              </div>
            </div>

            {/* Turnkey Cell Summary */}
            <div className="bg-zinc-800/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-400" />
                <span className="text-zinc-300 text-[11px]">Robotic MIG/TIG Welding Cell</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">99.4% Joint Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'andaman-goa-tourism') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] bg-gradient-to-b from-teal-950/40 to-slate-950 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
        {/* Mobile Pass Mockup */}
        <div className="w-full max-w-[320px] bg-slate-900 border-2 border-teal-700/40 rounded-[28px] p-3 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-1.5 text-teal-400 font-semibold">
              <Compass className="w-4 h-4" />
              <span>Andaman Smart Tourism</span>
            </div>
            <span className="text-[10px] text-teal-300 font-mono bg-teal-500/10 px-2 py-0.5 rounded">
              Govt Verified
            </span>
          </div>

          {/* Boarding Pass Card */}
          <div className="mt-3 p-3 bg-gradient-to-br from-teal-900/40 to-slate-800 rounded-xl border border-teal-500/30">
            <div className="flex items-center justify-between text-xs">
              <div>
                <div className="text-[10px] text-teal-300 uppercase tracking-wider font-semibold">Inter-Island Ferry</div>
                <div className="font-bold text-white text-sm">Makruzz Gold Catamaran</div>
              </div>
              <QrCode className="w-7 h-7 text-white p-0.5 bg-black/40 rounded" />
            </div>

            <div className="flex items-center justify-between mt-3 pt-2 border-t border-teal-700/40 text-xs">
              <div>
                <div className="text-[10px] text-slate-400">Port Blair</div>
                <div className="font-bold text-white">08:00 AM</div>
              </div>
              <div className="text-teal-400 text-xs font-mono">→ 90 mins →</div>
              <div className="text-right">
                <div className="text-[10px] text-slate-400">Havelock Jetty</div>
                <div className="font-bold text-white">09:30 AM</div>
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-300 font-mono bg-black/30 p-1.5 rounded">
              <span>Pass: #AND-7749-QR</span>
              <span className="text-emerald-400">Offline Verified</span>
            </div>
          </div>

          {/* Activity Tag */}
          <div className="mt-2.5 p-2 bg-slate-800/40 rounded-lg flex items-center justify-between text-[11px] text-slate-300">
            <span>Radhanagar Scuba Briefing</span>
            <span className="text-teal-400">2:30 PM Today</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'power-herbs') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] bg-gradient-to-b from-lime-950/30 to-zinc-950 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
        {/* Desktop Browser Mockup Frame */}
        <div className="w-full max-w-[420px] bg-zinc-900 border border-zinc-700/60 rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-zinc-800 px-3 py-2 flex items-center justify-between border-b border-zinc-700">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-3 py-0.5 rounded border border-white/5">
              powerherbs.store/ksm66-ashwagandha
            </div>
            <Leaf className="w-3.5 h-3.5 text-lime-400" />
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-lime-400 uppercase tracking-wider font-semibold">UK Certified Organic</span>
                <div className="text-sm font-bold text-white">Pure KSM-66® Ashwagandha 600mg</div>
                <div className="text-[11px] text-zinc-400">60 Vegan Capsules · 30-Day Regimen</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">£24.99</div>
                <div className="text-[10px] text-lime-400 font-mono">Save 20% on Sub</div>
              </div>
            </div>

            {/* Quality Seals */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-zinc-800 text-center text-xs">
              <div className="bg-zinc-800/60 p-2 rounded">
                <div className="text-lime-400 font-bold text-[11px]">100%</div>
                <div className="text-[10px] text-zinc-400">Organic Root</div>
              </div>
              <div className="bg-zinc-800/60 p-2 rounded">
                <div className="text-white font-bold text-[11px]">GMP</div>
                <div className="text-[10px] text-zinc-400">UK Standard</div>
              </div>
              <div className="bg-zinc-800/60 p-2 rounded">
                <div className="text-sky-400 font-bold text-[11px]">5% Potency</div>
                <div className="text-[10px] text-zinc-400">Withanolides</div>
              </div>
            </div>

            <div className="bg-lime-500/10 border border-lime-500/20 p-2 rounded flex items-center justify-between text-xs">
              <span className="text-lime-300 text-[11px]">★ 4.95 / 5 (840+ Verified UK Reviews)</span>
              <span className="text-[10px] font-mono text-zinc-300">Next Day UK Dispatch</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'aarani') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] bg-gradient-to-b from-rose-950/30 to-zinc-950 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[420px] bg-zinc-900 border border-zinc-700/60 rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-zinc-800 px-3 py-2 flex items-center justify-between border-b border-zinc-700">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-3 py-0.5 rounded border border-white/5">
              aarani.com/custom-silk-topper
            </div>
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider font-semibold">Luxury Hair Restoration</span>
                <div className="text-sm font-bold text-white">Silk Base Monofilament Topper</div>
                <div className="text-[11px] text-zinc-400">100% Virgin Remy Hair · 130% Density</div>
              </div>
              <span className="text-xs font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded">
                Custom Craft
              </span>
            </div>

            <div className="p-3 bg-zinc-800/50 rounded-lg space-y-2 border border-white/5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Base Size:</span>
                <span className="text-white font-medium">6" × 6" Invisible Part</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Shade Match:</span>
                <span className="text-rose-300 font-medium">#2 Dark Espresso (Natural Light Tested)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Consultation:</span>
                <span className="text-emerald-400 font-medium">Free Virtual Stylist Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // BVM Plant-Based Meat
  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] bg-gradient-to-b from-green-950/30 to-zinc-950 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[420px] bg-zinc-900 border border-zinc-700/60 rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-zinc-800 px-3 py-2 flex items-center justify-between border-b border-zinc-700">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-3 py-0.5 rounded border border-white/5">
            bvmfoods.com/prime-patty
          </div>
          <Leaf className="w-3.5 h-3.5 text-green-400" />
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider font-semibold">Plant-Protein Innovation</span>
              <div className="text-sm font-bold text-white">BVM Prime Artisan Burger Patty</div>
              <div className="text-[11px] text-zinc-400">Pea-Protein Isolate · Zero Cholesterol</div>
            </div>
            <span className="text-xs font-mono bg-green-500/20 text-green-300 px-2 py-0.5 rounded">
              Non-GMO
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-2 border-y border-zinc-800 text-center text-xs">
            <div className="bg-zinc-800/60 p-2 rounded">
              <div className="text-green-400 font-bold text-[11px]">22g</div>
              <div className="text-[10px] text-zinc-400">Protein / Serve</div>
            </div>
            <div className="bg-zinc-800/60 p-2 rounded">
              <div className="text-sky-400 font-bold text-[11px]">88%</div>
              <div className="text-[10px] text-zinc-400">Water Saved</div>
            </div>
            <div className="bg-zinc-800/60 p-2 rounded">
              <div className="text-amber-400 font-bold text-[11px]">0 mg</div>
              <div className="text-[10px] text-zinc-400">Cholesterol</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
