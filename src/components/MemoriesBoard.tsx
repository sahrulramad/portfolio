import React, { useState } from 'react';
import { ProjectDossier } from '../types/portfolio';
import { OriginiumDiamond, TacticalBarcode, CornerAccents } from './TacticalSvg';
import { FolderGit2, Star, Unlock, Lock, Eye, ExternalLink, Activity } from 'lucide-react';

interface MemoriesBoardProps {
  projects: ProjectDossier[];
  onSelectProject: (project: ProjectDossier) => void;
  onOpenArchives: () => void;
}

export const MemoriesBoard: React.FC<MemoriesBoardProps> = ({
  projects,
  onSelectProject,
  onOpenArchives,
}) => {
  const [unlockedNodes, setUnlockedNodes] = useState<Record<string, boolean>>({
    'stage-17-1': true, // first node unlocked by default
    'stage-17-2': true,
    'stage-17-3': true,
  });

  const [activePulseNode, setActivePulseNode] = useState<string | null>(null);

  const handleNodeClick = (proj: ProjectDossier) => {
    setActivePulseNode(proj.id);
    setTimeout(() => {
      setActivePulseNode(null);
    }, 600);

    setUnlockedNodes(prev => ({
      ...prev,
      [proj.id]: true,
    }));
  };

  const unlockAllNodes = () => {
    const all: Record<string, boolean> = {};
    projects.forEach(p => (all[p.id] = true));
    setUnlockedNodes(all);
  };

  return (
    <section id="memories" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[rgba(124,255,1,0.25)] pb-5 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FolderGit2 className="w-5 h-5 text-[#7CFF01]" />
            <span className="font-tactical font-black text-xs tracking-widest text-[#7CFF01] uppercase">
              TACTICAL NODE NETWORK // RHODES ISLAND EMR
            </span>
          </div>
          <h2 className="font-tactical font-black text-3xl sm:text-5xl text-prts-white uppercase tracking-wider">
            Memories
          </h2>
          <p className="font-terminal text-xs text-prts-muted mt-1">
            EXPLORE OPERATOR PROJECT DOSSIERS & RESEARCH STAGES // EPISODE 17 PROTOCOL
          </p>
        </div>

        {/* Tactical Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={unlockAllNodes}
            className="px-4 py-2 bg-[#12181C] border border-[#EAB308]/50 hover:border-[#EAB308] text-[#EAB308] font-tactical font-bold text-xs tracking-wider uppercase clip-tag flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(234,179,8,0.2)]"
          >
            <Unlock className="w-3.5 h-3.5" />
            [ UNLOCK ALL NODES ]
          </button>
          <button
            onClick={onOpenArchives}
            className="px-4 py-2 bg-[#7CFF01]/10 border border-[#7CFF01]/40 hover:bg-[#7CFF01] hover:text-[#080A0C] text-[#7CFF01] font-tactical font-bold text-xs tracking-wider uppercase clip-tag flex items-center gap-1.5 transition-all"
          >
            STAGE ARCHIVES
          </button>
        </div>
      </div>

      {/* Isometric/Tactical Stage Board Surface */}
      <div className="relative p-6 sm:p-8 bg-[#0B0E12]/90 border border-[rgba(124,255,1,0.28)] clip-chamfer-lg shadow-2xl mb-12">
        <CornerAccents />

        {/* Board Status HUD Banner */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(124,255,1,0.15)] pb-3 mb-8 text-xs font-terminal">
          <div className="flex items-center gap-3">
            <span className="text-[#7CFF01] font-bold">GRID STATUS: NORMAL</span>
            <span className="text-prts-muted">|</span>
            <span className="text-prts-muted">OPTIC NEURAL BUS: 60FPS SYNCHRONIZED</span>
          </div>
          <div className="text-prts-muted text-[11px]">
            UNLOCKED OPERATIONS: {Object.values(unlockedNodes).filter(Boolean).length} / {projects.length}
          </div>
        </div>

        {/* Grid of Projects (Tactical Dossier Cards + Circular Mechanical Nodes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => {
            const isUnlocked = unlockedNodes[proj.id];
            const isPulsing = activePulseNode === proj.id;

            return (
              <div
                key={proj.id}
                className={`relative transition-all duration-300 clip-chamfer ${
                  isUnlocked
                    ? 'bg-[#0F1418] border border-[rgba(124,255,1,0.3)] hover:border-[#7CFF01] shadow-[0_0_20px_rgba(124,255,1,0.06)]'
                    : 'bg-[#0B0E12] border border-dashed border-prts-borderSubtle'
                }`}
              >
                <CornerAccents />

                {/* Node Card Header */}
                <div className="p-4 border-b border-[rgba(124,255,1,0.15)] flex items-center justify-between bg-[#12181C]/90">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#7CFF01]/10 text-[#7CFF01] font-tactical font-black text-xs clip-tag">
                      {proj.stageNumber}
                    </span>
                    <span className="text-[10px] font-terminal text-prts-muted uppercase">
                      {proj.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#EAB308]">
                    {Array.from({ length: proj.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <h3 className="font-tactical font-black text-xl text-prts-white mb-1 leading-snug">
                      {proj.title}
                    </h3>
                    <div className="text-xs font-terminal text-[#7CFF01] mb-3">
                      {proj.subtitle}
                    </div>
                    <p className="text-xs font-body text-prts-white/80 line-clamp-3 mb-4">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Mechanical Node Interactive State */}
                  <div>
                    {isUnlocked ? (
                      <div className="space-y-3">
                        {/* Tech tags preview */}
                        <div className="flex flex-wrap gap-1.5">
                          {proj.techStack.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[10px] font-terminal text-[#7CFF01] bg-[#080A0C] border border-[#7CFF01]/25 px-1.5 py-0.5">
                              {t}
                            </span>
                          ))}
                          {proj.techStack.length > 3 && (
                            <span className="text-[10px] font-terminal text-prts-muted px-1">
                              +{proj.techStack.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Open Dossier Button */}
                        <button
                          onClick={() => onSelectProject(proj)}
                          className="w-full py-2 bg-[#7CFF01]/10 border border-[#7CFF01]/40 hover:bg-[#7CFF01] hover:text-[#080A0C] text-[#7CFF01] font-tactical font-extrabold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 clip-tag"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          INSPECT TACTICAL DOSSIER
                        </button>
                      </div>
                    ) : (
                      /* Locked Node State: Press to unlock ribbon */
                      <div className="flex flex-col items-center justify-center py-4">
                        <button
                          onClick={() => handleNodeClick(proj)}
                          className={`relative px-5 py-2.5 hazard-stripes-yellow text-[#080A0C] font-tactical font-black text-xs tracking-wider uppercase clip-tag flex items-center gap-2 shadow-lg transition-transform hover:scale-105 ${
                            isPulsing ? 'animate-ping' : ''
                          }`}
                        >
                          <Lock className="w-3.5 h-3.5" />
                          [ PRESS TO UNLOCK ]
                        </button>
                        <span className="text-[10px] font-terminal text-prts-muted mt-2">
                          DECRYPT STAGE CREDENTIALS
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Barcode line */}
                <div className="px-4 py-2 bg-[#0B0E12] border-t border-[rgba(148,163,184,0.1)] flex items-center justify-between text-[10px] font-terminal text-prts-muted">
                  <span>STATUS: {proj.status}</span>
                  <TacticalBarcode className="h-3 w-16 opacity-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
