import React from 'react';
import { ProjectDossier } from '../types/portfolio';
import { BranchCategory } from './MemoriesMapView';
import { PROJECTS_DATA } from '../data/portfolioData';
import { X, ExternalLink, ChevronRight, Star } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface BranchDrawerProps {
  branch: BranchCategory | null;
  onClose: () => void;
  onSelectProject: (project: ProjectDossier) => void;
}

export const BranchDrawer: React.FC<BranchDrawerProps> = ({
  branch,
  onClose,
  onSelectProject,
}) => {
  if (!branch) return null;

  const branchProjects = PROJECTS_DATA.filter((p) =>
    branch.projectIds.includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in select-none">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0 cursor-pointer pointer-events-auto" onClick={onClose} />

      {/* Slide-over panel */}
      <div className="relative w-full sm:w-[520px] md:w-[620px] h-full bg-[#080B0D]/95 backdrop-blur-md border-l border-white/10 shadow-2xl z-10 pointer-events-auto flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black tracking-wider uppercase">
                BRANCH // {branch.codeName.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-zinc-400">
                {branchProjects.length} DOSSIERS
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 bg-white/5 border border-white/10 hover:border-[#b8f500] text-zinc-400 hover:text-white transition-all clip-chamfer cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-tactical font-black text-white tracking-wide uppercase">
            {branch.domainName}
          </h2>
          <p className="font-mono text-xs text-zinc-400 mt-1 mb-6 leading-relaxed">
            {branch.description}
          </p>

          {/* Project List */}
          <div className="space-y-4">
            {branchProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#0D1216] border border-white/10 hover:border-[#b8f500]/50 p-5 clip-chamfer transition-all"
              >
                {/* Stage tag & Stars */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] text-[#b8f500] font-bold tracking-widest">
                    {project.stageNumber} // {project.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: project.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#EAB308] text-[#EAB308]" />
                    ))}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-tactical font-bold text-lg text-white group-hover:text-[#b8f500] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400 mt-1 line-clamp-2">
                  {project.subtitle}
                </p>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2 my-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="px-2 py-0.5 bg-black/50 border border-white/5 text-[10px] font-mono"
                    >
                      <span className="text-zinc-500 mr-1">{m.label}:</span>
                      <span className="text-zinc-200 font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#12191F] text-zinc-300 text-[10px] font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#b8f500] hover:underline cursor-pointer"
                  >
                    <span>INSPECT FULL DOSSIER</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/5 hover:bg-[#b8f500] hover:text-black text-zinc-300 rounded transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/5 hover:bg-[#b8f500] hover:text-black text-zinc-300 rounded transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
          <span className="text-[10px] font-mono text-zinc-500">
            PRTS ARCHIVE // RHODES ISLAND EMR
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors clip-chamfer cursor-pointer"
          >
            CLOSE DRAWER
          </button>
        </div>
      </div>
    </div>
  );
};
