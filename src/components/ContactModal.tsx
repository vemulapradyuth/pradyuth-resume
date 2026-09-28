import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Copy, Check, Send, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectType, setProjectType] = useState('Full-Time / Contract');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pradyuthvemula3@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919949292988');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Design Inquiry from ${senderName || 'Portfolio Visitor'} [${projectType}]`);
    const body = encodeURIComponent(
      `Hi Pradyuth,\n\n${message}\n\nFrom: ${senderName}\nContact: ${senderEmail}`
    );
    window.location.href = `mailto:pradyuthvemula3@gmail.com?subject=${subject}&body=${body}`;
    setSentSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
            Get in Touch
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Connect with Pradyuth Vemula
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Available for product design roles, UX strategy consultations, design systems, and freelance contracts.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {/* Email Card */}
          <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-between">
            <div className="truncate mr-2">
              <div className="text-[10px] text-zinc-400 uppercase font-semibold">Email</div>
              <a href="mailto:pradyuthvemula3@gmail.com" className="text-white font-medium hover:text-indigo-400 truncate block">
                pradyuthvemula3@gmail.com
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors shrink-0 cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-zinc-400 uppercase font-semibold">Phone / WhatsApp</div>
              <a href="tel:+919949292988" className="text-white font-medium font-mono hover:text-indigo-400 block">
                +91 9949292988
              </a>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors shrink-0 cursor-pointer"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full px-3 py-2 bg-zinc-900 border border-white/10 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">Your Email</label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-3 py-2 bg-zinc-900 border border-white/10 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">Engagement Type</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-900 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
            >
              <option value="Full-Time Product Designer Role">Full-Time Product Designer Role</option>
              <option value="UX/UI Freelance Project">UX/UI Freelance Project</option>
              <option value="Design System & Audit">Design System & Usability Audit</option>
              <option value="General Consultation">General Inquiry / Collaboration</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">Project Brief / Message</label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your product timeline, scope, and goals..."
              className="w-full px-3 py-2 bg-zinc-900 border border-white/10 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <span className="text-[11px] text-zinc-500">Replies usually within 24 hours</span>
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
