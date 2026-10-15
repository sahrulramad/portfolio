import React, { useState, useMemo } from 'react';
import { ProjectDossier } from '../types/portfolio';
import { CornerAccents, TacticalBarcode, OriginiumDiamond } from './TacticalSvg';
import { X, Search, Filter, Star, ExternalLink, ArrowUpDown } from 'lucide-react';

interface StageArchivesModalProps {
  projects: ProjectDossier[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectDossier) => void;
}

export const StageArchivesModal: React.FC<StageArchivesModalProps> = ({
  projects,
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'STAGE' | 'DATE' | 'DIFFICULTY'>('STAGE');

  const categories = ['ALL', 'AI & Deep Learning', 'Web Systems', 'Microservices & Tools', 'Experimental'];

  const filteredAndSortedProjects = useMemo(() => {
    return projects
      .filter(p => {
        const matchesSearch =
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.techStack.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'STAGE') {
          return a.stageNumber.localeCompare(b.stageNumber);
        } else if (sortBy === 'DATE') {
          return b.date.localeCompare(a.date);
        } else {
          // DIFFICULTY: stars descending
          return b.stars - a.stars;
        }
      });
  }, [projects, searchTerm, selectedCategory, sortBy]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080A0C]/90 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col bg-[#0F1418] border-2 border-[#FF0055] clip-chamfer-lg shadow-[0_0_40px_rgba(255,0,85,0.25)] text-prts-white font-body">
        <CornerAccents />

        {/* Top Header */}
        <div className="bg-[#12181C] border-b border-[rgba(255,0,85,0.3)] p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <OriginiumDiamond className="w-6 h-6" />
            <div>
              <span className="font-tactical font-black text-xs tracking-widest text-[#FF0055] uppercase block">
                UNLICENSED CLINIC // COMPREHENSIVE ARCHIVES
              </span>
              <h2 className="font-tactical font-extrabold text-xl sm:text-2xl text-prts-white uppercase">
                COMPLETE OPERATION LOGS & STAGES
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-[#FF0055]/40 flex items-center justify-center text-prts-muted hover:text-[#FF0055] hover:border-[#FF0055] bg-[#0F1418] transition-all"
            aria-label="Close archives"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:p-6 bg-[#0B0E12] border-b border-prts-borderSubtle space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-prts-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search operations, tech stack..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-[#12181C] border border-[rgba(124,255,1,0.25)] focus:border-[#7CFF01] pl-9 pr-4 py-2 text-xs font-terminal text-prts-white outline-none clip-tag"
              />
            </div>

            {/* Sorting Toggles */}
            <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-terminal">
              <span className="text-prts-muted flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" />
                SORT:
              </span>
              {(['STAGE', 'DATE', 'DIFFICULTY'] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setSortBy(s)}
                  className={`px-2.5 py-1 text-[11px] clip-tag transition-all font-bold ${
                    sortBy === s
                      ? 'bg-[#7CFF01] text-[#080A0C]'
                      : 'bg-[#12181C] text-prts-muted border border-prts-borderSubtle hover:text-prts-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-terminal">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 clip-tag transition-all uppercase ${
                  selectedCategory === cat
                    ? 'bg-[#00F0FF] text-[#080A0C] font-bold'
                    : 'bg-[#12181C] text-prts-muted border border-prts-borderSubtle hover:text-prts-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Project Operation Table */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          {filteredAndSortedProjects.length === 0 ? (
            <div className="text-center py-12 text-prts-muted font-terminal text-sm">
              NO OPERATIONS FOUND MATCHING CRITERIA
            </div>
          ) : (
            filteredAndSortedProjects.map(proj => (
              <div
                key={proj.id}
                onClick={() => {
                  onClose();
                  onSelectProject(proj);
                }}
                className="group p-4 bg-[#12181C]/80 hover:bg-[#161F24] border border-[rgba(124,255,1,0.2)] hover:border-[#7CFF01] transition-all clip-chamfer cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-12 bg-[#0F1418] border border-[rgba(124,255,1,0.3)] flex flex-col items-center justify-center clip-tag">
                    <span className="font-tactical font-black text-xs text-[#7CFF01]">
                      {proj.stageNumber.replace('STAGE ', '')}
                    </span>
                    <span className="text-[9px] font-terminal text-prts-muted">{proj.date}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-tactical font-extrabold text-base text-prts-white group-hover:text-[#7CFF01] transition-colors">
                        {proj.title}
                      </span>
                      <span className="px-1.5 py-0.2 bg-[#7CFF01]/10 text-[#7CFF01] font-terminal text-[10px] clip-tag">
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-xs text-prts-muted font-body max-w-2xl line-clamp-2">
                      {proj.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-terminal text-prts-muted bg-[#080A0C] px-1.5 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="text-right hidden sm:block">
                    <div className="text-[#EAB308] text-xs flex items-center justify-end gap-0.5">
                      {Array.from({ length: proj.stars }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-terminal text-prts-muted block uppercase">
                      {proj.difficulty}
                    </span>
                  </div>
                  <button className="px-3 py-1.5 bg-[#7CFF01]/10 border border-[#7CFF01]/40 group-hover:bg-[#7CFF01] group-hover:text-[#080A0C] font-tactical font-bold text-xs uppercase transition-all clip-tag flex items-center gap-1">
                    OPEN DOSSIER
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#12181C] border-t border-prts-borderSubtle flex items-center justify-between text-xs font-terminal text-prts-muted">
          <span>TOTAL LOGGED STAGES: {projects.length}</span>
          <TacticalBarcode className="h-4 w-24 opacity-80" />
        </div>
      </div>
    </div>
  );
};
