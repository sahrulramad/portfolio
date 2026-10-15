import React from 'react';
import { OPERATOR_PROFILE, PROJECTS_DATA } from '../data/portfolioData';
import { OriginiumDiamond, TacticalBarcode, CornerAccents } from './TacticalSvg';
import {
  FolderGit2,
  FileText,
  ClipboardList,
  Archive,
  Send,
  Download,
  ExternalLink,
  ChevronRight,
  Terminal,
  Activity
} from 'lucide-react';

interface HeroHubProps {
  onOpenArchives: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroHub: React.FC<HeroHubProps> = ({ onOpenArchives, onNavigate }) => {
  return (
    <section id="terminal-hub" className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-terminal">
        <div className="flex items-center gap-2 text-prts-muted">
          <Terminal className="w-4 h-4 text-[#7CFF01]" />
          <span>PRTS://ROOT/OPERATORS/SR-522/TACTICAL_HUB</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-[#12181C] border border-[#7CFF01]/40 px-3 py-1 clip-tag">
          <span className="w-2 h-2 rounded-full bg-[#7CFF01] animate-ping" />
          <span className="text-[#7CFF01] font-bold tracking-widest uppercase">
            CRITICAL PHASE TRANSITION IS NOW OPEN
          </span>
        </div>
      </div>

      {/* Main Grid: Left Dossier Summary + Right Vertical Tactical Menu */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Operator Identity, Headline, & Telemetry (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Operator Classification Tag */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-0.5 bg-[#7CFF01]/10 border border-[#7CFF01]/40 text-[#7CFF01] font-terminal text-[11px] font-bold tracking-wider uppercase clip-tag">
              RHODES ISLAND SPECIALIST
            </span>
            <TacticalBarcode className="h-4 w-28 opacity-80" />
            <span className="text-prts-muted font-terminal text-xs">ID: 5220411289</span>
          </div>

          {/* Operator Name with Chromatic Text Glitch */}
          <h1 className="font-tactical font-black text-4xl sm:text-6xl md:text-7xl tracking-wider text-prts-white uppercase mb-3 leading-none">
            <span className="glitch-text" data-text={OPERATOR_PROFILE.name}>
              {OPERATOR_PROFILE.name}
            </span>
          </h1>

          {/* Subtitle / Role */}
          <h2 className="font-tactical font-bold text-lg sm:text-2xl text-[#7CFF01] tracking-wide mb-6">
            {OPERATOR_PROFILE.headline}
          </h2>

          {/* Main Tactical Summary Box */}
          <div className="relative p-6 bg-[#0F1418]/85 border border-[rgba(124,255,1,0.25)] backdrop-blur-md clip-chamfer mb-8">
            <CornerAccents />
            <div className="flex items-center justify-between border-b border-[rgba(124,255,1,0.18)] pb-2 mb-3">
              <span className="font-terminal text-xs text-[#7CFF01] font-bold tracking-wider uppercase flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                EXECUTIVE DOSSIER SUMMARY
              </span>
              <span className="font-terminal text-[10px] text-prts-muted">VERIFIED BY PRTS ARCHIVE</span>
            </div>
            <p className="font-body text-sm sm:text-base text-prts-white/90 leading-relaxed mb-4">
              {OPERATOR_PROFILE.summary}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[rgba(148,163,184,0.1)] text-xs font-terminal">
              <div>
                <span className="text-prts-muted block text-[10px] uppercase">CLASS</span>
                <span className="text-[#7CFF01] font-bold">{OPERATOR_PROFILE.classType}</span>
              </div>
              <div>
                <span className="text-prts-muted block text-[10px] uppercase">STATUS</span>
                <span className="text-prts-white font-bold">Cum Laude (3.53)</span>
              </div>
              <div>
                <span className="text-prts-muted block text-[10px] uppercase">LOCATION</span>
                <span className="text-prts-white font-bold">Magelang, ID</span>
              </div>
              <div>
                <span className="text-prts-muted block text-[10px] uppercase">TRUST LEVEL</span>
                <span className="text-[#00F0FF] font-bold">{OPERATOR_PROFILE.trust}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('memories')}
              className="px-6 py-3.5 bg-[#7CFF01] text-[#080A0C] font-tactical font-black text-sm tracking-wider uppercase flex items-center gap-2 clip-chamfer hover:bg-[#4ADE80] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(124,255,1,0.35)]"
            >
              <FolderGit2 className="w-4 h-4" />
              VIEW MEMORIES (PROJECTS)
            </button>
            <a
              href="Syahrul-Ramadhon-CV.pdf"
              download
              className="px-6 py-3.5 bg-[rgba(18,24,28,0.85)] border border-[rgba(124,255,1,0.4)] text-prts-white font-tactical font-bold text-sm tracking-wider uppercase flex items-center gap-2 clip-chamfer hover:border-[#7CFF01] hover:text-[#7CFF01] transition-all"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD DOSSIER (CV.PDF)
            </a>
          </div>
        </div>

        {/* Right Column: Arknights Episode 17 Vertical Tactical Menu (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="flex items-center justify-between px-2 mb-1">
            <span className="font-terminal text-xs text-prts-muted uppercase tracking-wider">
              PRTS NAVIGATION TERMINAL
            </span>
            <span className="font-terminal text-[10px] text-[#7CFF01]">EP.17 PROTOCOL</span>
          </div>

          {/* 1. Memories (Projects) */}
          <button
            onClick={() => onNavigate('memories')}
            className="group relative p-4 bg-[#0F1418]/90 border border-[rgba(124,255,1,0.25)] hover:border-[#7CFF01] transition-all clip-chamfer flex items-center justify-between text-left hover:bg-[#12181C]"
          >
            <CornerAccents />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-[#7CFF01]/10 border border-[#7CFF01]/40 flex items-center justify-center text-[#7CFF01] group-hover:bg-[#7CFF01] group-hover:text-[#080A0C] transition-all">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-tactical font-extrabold text-lg text-prts-white group-hover:text-[#7CFF01] transition-colors">
                    Memories
                  </span>
                  <span className="px-2 py-0.5 bg-[#7CFF01]/15 text-[#7CFF01] font-terminal text-[11px] font-bold clip-tag">
                    {PROJECTS_DATA.length} OPERATIONS
                  </span>
                </div>
                <span className="font-terminal text-xs text-prts-muted block">
                  Tactical node board & technical dossiers
                </span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-prts-muted group-hover:text-[#7CFF01] group-hover:translate-x-1 transition-all" />
          </button>

          {/* 2. Terminal // Operator Files (About & Inventory) */}
          <button
            onClick={() => onNavigate('operator-files')}
            className="group relative p-4 bg-[#0F1418]/90 border border-[rgba(124,255,1,0.25)] hover:border-[#7CFF01] transition-all clip-chamfer flex items-center justify-between text-left hover:bg-[#12181C]"
          >
            <CornerAccents />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-[#080A0C] transition-all">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-tactical font-extrabold text-lg text-prts-white group-hover:text-[#00F0FF] transition-colors">
                    Terminal // Operator Files
                  </span>
                  <span className="px-2 py-0.5 bg-[rgba(124,255,1,0.15)] text-[#7CFF01] font-terminal text-[10px] font-bold clip-tag">
                    ACTIVE
                  </span>
                </div>
                <span className="font-terminal text-xs text-prts-muted block">
                  Lore dialogue & tactical module inventory
                </span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-prts-muted group-hover:text-[#00F0FF] group-hover:translate-x-1 transition-all" />
          </button>

          {/* 3. List of Items Required (Mission & Operation Log) */}
          <button
            onClick={() => onNavigate('mission-log')}
            className="group relative p-4 bg-[#0F1418]/90 border border-[rgba(124,255,1,0.25)] hover:border-[#7CFF01] transition-all clip-chamfer flex items-center justify-between text-left hover:bg-[#12181C]"
          >
            <CornerAccents />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-[#EAB308]/10 border border-[#EAB308]/40 flex items-center justify-center text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#080A0C] transition-all">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-tactical font-extrabold text-lg text-prts-white group-hover:text-[#EAB308] transition-colors">
                    List of Items Required
                  </span>
                  <span className="px-2 py-0.5 bg-[#EAB308]/15 text-[#EAB308] font-terminal text-[10px] font-bold clip-tag">
                    MISSIONS
                  </span>
                </div>
                <span className="font-terminal text-xs text-prts-muted block">
                  Education, certifications, & battle history
                </span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-prts-muted group-hover:text-[#EAB308] group-hover:translate-x-1 transition-all" />
          </button>

          {/* 4. Unlicensed Clinic / Archives (Modal Opener) */}
          <button
            onClick={onOpenArchives}
            className="group relative p-4 bg-[#0F1418]/90 border border-[rgba(124,255,1,0.25)] hover:border-[#7CFF01] transition-all clip-chamfer flex items-center justify-between text-left hover:bg-[#12181C]"
          >
            <CornerAccents />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-[#FF0055]/10 border border-[#FF0055]/40 flex items-center justify-center text-[#FF0055] group-hover:bg-[#FF0055] group-hover:text-[#080A0C] transition-all">
                <Archive className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-tactical font-extrabold text-lg text-prts-white group-hover:text-[#FF0055] transition-colors">
                    Unlicensed Clinic / Archives
                  </span>
                  <span className="px-2 py-0.5 bg-[#FF0055]/15 text-[#FF0055] font-terminal text-[10px] font-bold clip-tag">
                    FULL REPO
                  </span>
                </div>
                <span className="font-terminal text-xs text-prts-muted block">
                  Search & sort all stage operations
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-prts-muted group-hover:text-[#FF0055] transition-all" />
          </button>

          {/* 5. Transfer Area (Contact & Transmission) */}
          <button
            onClick={() => onNavigate('contact')}
            className="group relative p-5 bg-gradient-to-r from-[#0F1418] via-[#12181C] to-[#0F1418] border-2 border-[#7CFF01] hover:border-[#4ADE80] transition-all clip-chamfer flex items-center justify-between text-left shadow-[0_0_20px_rgba(124,255,1,0.15)] mt-2"
          >
            <CornerAccents />
            <div className="flex items-center gap-4">
              <OriginiumDiamond className="w-10 h-10 animate-pulse-glow" />
              <div>
                <span className="font-tactical font-black text-xl text-[#7CFF01] tracking-wider block">
                  Transfer Area
                </span>
                <span className="font-terminal text-xs text-prts-white">
                  Open PRTS Comm Channel & Transmit
                </span>
              </div>
            </div>
            <Send className="w-5 h-5 text-[#7CFF01] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
