const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
import React from 'react';
import { ProjectDossier } from '../types/portfolio';
import {
  X,
  ExternalLink,
  Star,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectDossier | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#090C0E] border border-white/10 clip-chamfer shadow-2xl text-white">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#090C0E]/95 backdrop-blur-sm border-b border-white/10 p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black uppercase tracking-wider">
                {project.stageNumber} // {project.category.toUpperCase()}
              </span>
              <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-zinc-300 font-mono text-[10px]">
                {project.status}
              </span>
            </div>
            <h2 className="font-tactical font-black text-xl sm:text-2xl text-white mt-1 uppercase">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white/5 border border-white/10 hover:border-[#b8f500] text-zinc-400 hover:text-white transition-all clip-chamfer cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-black/40 border border-white/5 font-mono text-xs">
            <div>
              <span className="text-zinc-500 text-[10px] block">TIMELINE</span>
              <span className="text-zinc-200 font-semibold">{project.date}</span>
            </div>
            <div>
              <span className="text-zinc-500 text-[10px] block">THREAT/DIFFICULTY</span>
              <span className="text-[#b8f500] font-bold">{project.difficulty}</span>
            </div>
            <div>
              <span className="text-zinc-500 text-[10px] block">EVALUATION</span>
              <div className="flex items-center gap-0.5 mt-0.5">
                {Array.from({ length: project.stars }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#EAB308] text-[#EAB308]" />
                ))}
              </div>
            </div>
            <div>
              <span className="text-zinc-500 text-[10px] block">DEPLOY STATUS</span>
              <span className="text-[#00F0FF] font-semibold">{project.status}</span>
            </div>
          </div>

          {/* Subtitle & Problem Statement */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold text-[#b8f500] uppercase tracking-wider">
              OPERATIONAL OVERVIEW
            </h3>
            <p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Full Architectural Description */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
              SYSTEM ARCHITECTURE & METHODOLOGY
            </h3>
            <p className="font-mono text-xs text-zinc-300 leading-relaxed bg-[#0D1216] p-4 border border-white/5">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold text-[#b8f500] uppercase tracking-wider">
              VERIFIED FIELD METRICS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-black/50 border border-white/5 space-y-0.5">
                  <span className="text-[10px] font-mono text-zinc-400 block">{m.label}</span>
                  <span className="font-tactical font-black text-lg text-[#b8f500] block">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Objectives */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
              CORE OBJECTIVES COMPLETED
            </h3>
            <div className="space-y-1.5">
              {project.technicalObjectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#0D1216] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#b8f500] shrink-0 mt-0.5" />
                  <span className="font-mono text-xs text-zinc-300">{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
              TECHNOLOGY ARSENAL
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#12191F] border border-white/10 text-zinc-200 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 z-20 bg-[#090C0E]/95 backdrop-blur-sm border-t border-white/10 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#b8f500] hover:bg-[#a6de00] text-black font-mono text-xs font-black uppercase tracking-wider transition-colors clip-chamfer cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>OPEN LIVE SYSTEM</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors clip-chamfer cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>INSPECT REPOSITORY</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white font-mono text-xs transition-colors clip-chamfer cursor-pointer"
          >
            RETURN TO MAP
          </button>
        </div>
      </div>
    </div>
  );
};
