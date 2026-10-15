import React, { useState } from 'react';
import { OPERATOR_PROFILE, SKILL_MODULES, OPERATION_LOGS, PROJECTS_DATA } from '../data/portfolioData';
import { ProjectDossier } from '../types/portfolio';
import {
  X,
  FileDown,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Search,
  Star,
  GraduationCap,
  Briefcase,
  Award,
  Layers
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

// =========================================================================
// 1. ProfileModal (Operators' Trust)
// =========================================================================
export const ProfileModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-2xl bg-[#090C0E] border border-white/10 p-6 sm:p-8 clip-chamfer shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black uppercase">
              OPERATOR DOSSIER // STATUS
            </span>
            <span className="text-[10px] font-mono text-zinc-400">SR-522</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white/5 border border-white/10 hover:border-[#b8f500] text-zinc-400 hover:text-white transition-all clip-chamfer cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Operator Identity */}
        <div className="flex flex-col sm:flex-row items-start gap-6 pb-6 border-b border-white/5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#12181C] border border-[#b8f500]/40 p-1 flex items-center justify-center shrink-0">
            <img
              src="https://avatars.githubusercontent.com/u/121705382?v=4"
              alt={OPERATOR_PROFILE.name}
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-tactical font-black text-white uppercase">
                {OPERATOR_PROFILE.name}
              </h2>
              <span className="px-1.5 py-0.2 bg-[#EAB308]/15 border border-[#EAB308]/40 text-[#EAB308] text-[10px] font-mono font-bold">
                CUM LAUDE
              </span>
            </div>
            <p className="font-mono text-xs text-[#b8f500]">
              {OPERATOR_PROFILE.subClass}
            </p>
            <p className="font-mono text-xs text-zinc-400">
              {OPERATOR_PROFILE.location}
            </p>
          </div>
        </div>

        {/* Bio & Academic Honors */}
        <div className="py-6 space-y-4 text-xs font-mono leading-relaxed text-zinc-300">
          <p>{OPERATOR_PROFILE.summary}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 bg-black/40 border border-white/5">
              <span className="text-[10px] text-zinc-500 block">EDUCATION</span>
              <span className="font-bold text-white">S.Kom (Informatika)</span>
            </div>
            <div className="p-3 bg-black/40 border border-white/5">
              <span className="text-[10px] text-zinc-500 block">GPA / IPK</span>
              <span className="font-bold text-[#b8f500]">3.82 / 4.00</span>
            </div>
            <div className="p-3 bg-black/40 border border-white/5">
              <span className="text-[10px] text-zinc-500 block">SPECIALTY</span>
              <span className="font-bold text-white">ML & Full-Stack</span>
            </div>
            <div className="p-3 bg-black/40 border border-white/5">
              <span className="text-[10px] text-zinc-500 block">TRUST</span>
              <span className="font-bold text-[#b8f500]">200% MAX</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <a
            href="./Syahrul-Ramadhon-CV.pdf"
            download="Syahrul-Ramadhon-CV.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-[#b8f500] hover:bg-[#a6de00] text-black font-mono text-xs font-black tracking-wider uppercase transition-colors clip-chamfer cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>DOWNLOAD OFFICIAL CV (PDF)</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors clip-chamfer cursor-pointer"
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. SkillsModal (List of Items Required)
// =========================================================================
export const SkillsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const categories = [
    { title: 'Programming Languages', items: SKILL_MODULES.filter((s) => s.category === 'WEAPONS') },
    { title: 'Frameworks & Full-Stack', items: SKILL_MODULES.filter((s) => s.category === 'ARMOR') },
    { title: 'Infrastructure & Tools', items: SKILL_MODULES.filter((s) => s.category === 'KEY ITEMS') },
    { title: 'Machine Learning & Arts', items: SKILL_MODULES.filter((s) => s.category === 'ORIGINIUM ARTS') },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-4xl bg-[#090C0E] border border-white/10 p-6 sm:p-8 clip-chamfer shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black uppercase">
                INVENTORY // LIST OF ITEMS REQUIRED
              </span>
              <span className="text-[10px] font-mono text-zinc-400">18 MODULES</span>
            </div>
            <h2 className="text-2xl font-tactical font-black text-white uppercase mt-1">
              Tech Stack & Engineering Skills
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white/5 border border-white/10 hover:border-[#b8f500] text-zinc-400 hover:text-white transition-all clip-chamfer cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-mono text-xs font-bold text-[#b8f500] uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#b8f500]" />
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {cat.items.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-3 bg-[#0D1216] border border-white/5 hover:border-white/20 transition-all clip-chamfer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-tactical font-bold text-sm text-white">
                        {skill.name}
                      </span>
                      <span className="text-[#EAB308] text-xs font-mono">
                        {skill.rarity}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-zinc-400 line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors clip-chamfer cursor-pointer"
          >
            RETURN TO TERMINAL
          </button>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. ClinicModal (Unlicensed Clinic)
// =========================================================================
export const ClinicModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-3xl bg-[#090C0E] border border-white/10 p-6 sm:p-8 clip-chamfer shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#EAB308] text-[#050706] font-mono text-[10px] font-black uppercase">
                FIELD ARCHIVE // UNLICENSED CLINIC
              </span>
              <span className="text-[10px] font-mono text-zinc-400">OPERATION HISTORY</span>
            </div>
            <h2 className="text-2xl font-tactical font-black text-white uppercase mt-1">
              Education, Experience & Research
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white/5 border border-white/10 hover:border-[#b8f500] text-zinc-400 hover:text-white transition-all clip-chamfer cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Timeline Manifest */}
        <div className="space-y-6">
          {OPERATION_LOGS.map((log) => (
            <div
              key={log.code}
              className="p-4 bg-[#0D1216] border-l-2 border-[#b8f500] border-t border-r border-b border-white/5 space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-[#b8f500] font-bold tracking-wider">
                  {log.period} // {log.code}
                </span>
                <span className="px-2 py-0.5 bg-white/5 text-zinc-300 font-mono text-[10px]">
                  {log.type}
                </span>
              </div>

              <h3 className="font-tactical font-bold text-lg text-white">
                {log.title} · <span className="text-zinc-400">{log.institution}</span>
              </h3>

              <div className="space-y-1 pt-1">
                {log.description.map((item: string, idx: number) => (
                  <p key={idx} className="font-mono text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
                    <span className="text-[#b8f500] mt-0.5">▸</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              {log.rewards.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {log.rewards.map((reward: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/30 text-[10px] font-mono"
                    >
                      ✦ {reward}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors clip-chamfer cursor-pointer"
          >
            RETURN TO TERMINAL
          </button>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 4. TransferModal (Transfer Area - Direct Contact)
// =========================================================================
export const TransferModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OPERATOR_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[PORTFOLIO CONTACT] Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${OPERATOR_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-2xl bg-[#090C0E] border border-white/10 p-6 sm:p-8 clip-chamfer shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black uppercase">
                COMM FREQUENCY // TRANSFER AREA
              </span>
              <span className="text-[10px] font-mono text-zinc-400">DIRECT DISPATCH</span>
            </div>
            <h2 className="text-2xl font-tactical font-black text-white uppercase mt-1">
              Contact & Collaboration Channels
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white/5 border border-white/10 hover:border-[#b8f500] text-zinc-400 hover:text-white transition-all clip-chamfer cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-[#0D1216] border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 block">PRIMARY EMAIL</span>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-white truncate">{OPERATOR_PROFILE.email}</span>
              <button
                onClick={handleCopyEmail}
                className="px-2 py-0.5 bg-[#b8f500]/10 border border-[#b8f500]/40 text-[#b8f500] text-[10px] font-mono uppercase font-bold hover:bg-[#b8f500] hover:text-black transition-all cursor-pointer"
              >
                {copied ? '✓ COPIED' : 'COPY'}
              </button>
            </div>
          </div>

          <div className="p-3 bg-[#0D1216] border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 block">PHONE / WHATSAPP</span>
            <span className="font-mono text-xs text-white">{OPERATOR_PROFILE.phone}</span>
          </div>

          <a
            href="https://linkedin.com/in/syahrul-ramadhon-86ba93246"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#0D1216] border border-white/5 hover:border-[#b8f500] flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
          >
            <div className="flex items-center gap-2">
              <LinkedinIcon className="w-4 h-4 text-[#00F0FF]" />
              <span className="font-mono text-xs">LinkedIn Profile</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
          </a>

          <a
            href={OPERATOR_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#0D1216] border border-white/5 hover:border-[#b8f500] flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
          >
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-white" />
              <span className="font-mono text-xs">GitHub Workspace</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

        {/* Transmission Form */}
        <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-white/10">
          <span className="text-xs font-mono font-bold text-[#b8f500] uppercase block">
            TRANSMIT DIRECT MESSAGE
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-[#0D1216] border border-white/10 p-2.5 text-xs font-mono text-white placeholder-zinc-500 focus:border-[#b8f500] outline-none"
            />
            <input
              type="email"
              required
              placeholder="Your Return Email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-[#0D1216] border border-white/10 p-2.5 text-xs font-mono text-white placeholder-zinc-500 focus:border-[#b8f500] outline-none"
            />
          </div>

          <textarea
            required
            rows={3}
            placeholder="Message Payload / Project Inquiry..."
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full bg-[#0D1216] border border-white/10 p-2.5 text-xs font-mono text-white placeholder-zinc-500 focus:border-[#b8f500] outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full py-2.5 bg-[#b8f500] hover:bg-[#a6de00] text-black font-mono text-xs font-black tracking-widest uppercase transition-colors clip-chamfer cursor-pointer flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>DISPATCH TRANSMISSION</span>
          </button>
        </form>
      </div>
    </div>
  );
};

// =========================================================================
// 5. AllProjectsModal (All Archives / Clue Rewards Explorer)
// =========================================================================
export const AllProjectsModal: React.FC<{
  onClose: () => void;
  onSelectProject: (project: ProjectDossier) => void;
}> = ({ onClose, onSelectProject }) => {
  const [search, setSearch] = useState('');

  const filtered = PROJECTS_DATA.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    return matchSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-5xl bg-[#090C0E] border border-white/10 p-6 sm:p-8 clip-chamfer shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black uppercase">
                ALL ARCHIVES // 8 RESEARCH DOSSIERS
              </span>
            </div>
            <h2 className="text-2xl font-tactical font-black text-white uppercase mt-1">
              Complete Project Directory
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dossiers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#0D1216] border border-white/10 pl-8 pr-3 py-1.5 text-xs font-mono text-white placeholder-zinc-500 focus:border-[#b8f500] outline-none"
              />
            </div>

            <button
              onClick={onClose}
              className="p-1.5 bg-white/5 border border-white/10 hover:border-[#b8f500] text-zinc-400 hover:text-white transition-all clip-chamfer cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0D1216] border border-white/10 hover:border-[#b8f500]/50 p-4 clip-chamfer transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[10px] text-[#b8f500] font-bold tracking-widest">
                    {project.stageNumber} // {project.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: project.stars }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#EAB308] text-[#EAB308]" />
                    ))}
                  </div>
                </div>

                <h3 className="font-tactical font-bold text-base text-white group-hover:text-[#b8f500] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-[11px] text-zinc-400 mt-1 line-clamp-2">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.2 bg-black/40 text-zinc-300 text-[10px] font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1 py-0.2 text-zinc-500 text-[10px] font-mono">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-mono font-bold text-[#b8f500] hover:underline cursor-pointer"
                >
                  INSPECT DOSSIER →
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 bg-white/5 hover:bg-[#b8f500] hover:text-black text-zinc-300 rounded transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 bg-white/5 hover:bg-[#b8f500] hover:text-black text-zinc-300 rounded transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors clip-chamfer cursor-pointer"
          >
            CLOSE ARCHIVES
          </button>
        </div>
      </div>
    </div>
  );
};
