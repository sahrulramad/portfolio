import React from 'react';
import { ProjectDossier } from '../types/portfolio';
import { ChevronLeft, Layers, Compass } from 'lucide-react';

export interface BranchCategory {
  id: 'remains' | 'elsewhere' | 'memories' | 'preparations';
  codeName: string;
  domainName: string;
  count: string;
  description: string;
  projectIds: string[];
  beamColor: string;
}

export const BRANCH_CATEGORIES: BranchCategory[] = [
  {
    id: 'remains',
    codeName: 'Remains',
    domainName: 'Web & Cloud Platforms',
    count: '3 / 3',
    description: 'Multi-tenant cloud architectures, Next.js 14, e-commerce & real-time analytics.',
    projectIds: ['stage-17-4', 'stage-17-1', 'stage-17-5'], // cipta.in, UMKM INFEST26, Eskala
    beamColor: '#7CFF01',
  },
  {
    id: 'elsewhere',
    codeName: 'Elsewhere',
    domainName: 'AI & Deep Learning',
    count: '2 / 2',
    description: 'AI forensics, computer vision, deep convolutional neural networks & NLP pipelines.',
    projectIds: ['stage-17-3', 'stage-17-8'], // Detecto, C1 Plano
    beamColor: '#00F0FF',
  },
  {
    id: 'memories',
    codeName: 'Memories',
    domainName: 'Decision Systems & Data Science',
    count: '1 / 1',
    description: 'AHP-SAW hybrid multi-criteria mathematical modeling, rank evaluation & thesis research.',
    projectIds: ['stage-17-2'], // Dominant Intelligence DSS
    beamColor: '#b8f500',
  },
  {
    id: 'preparations',
    codeName: 'Preparations',
    domainName: 'Automation & Microservices',
    count: '2 / 2',
    description: 'Headless Playwright PDF synthesis, Discord bot agents & high-throughput API endpoints.',
    projectIds: ['stage-17-6', 'stage-17-7'], // PDF API, Dermist Bot
    beamColor: '#EAB308',
  },
];

interface MemoriesMapViewProps {
  onBack: () => void;
  onSelectBranch: (branch: BranchCategory) => void;
  onOpenAllProjects: () => void;
}

export const MemoriesMapView: React.FC<MemoriesMapViewProps> = ({
  onBack,
  onSelectBranch,
  onOpenAllProjects,
}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#070908] text-[#F1F5F9] select-none flex flex-col justify-between p-6 sm:p-10 md:p-12">
      {/* =========================================================================
          PURE TACTICAL TOP-DOWN DARK MAP BACKGROUND (NO Character image/video, Persis Gambar 5)
         ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#080b0a] via-[#0b100e] to-[#070908]">
        {/* Tactical topographic grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,255,1,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(124,255,1,0.035)_1px,transparent_1px)] bg-[size:60px_60px] opacity-70" />

        {/* Concentric Orbit Rings in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[640px] h-[340px] sm:h-[480px] md:h-[640px] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[340px] md:w-[460px] h-[240px] sm:h-[340px] md:h-[460px] rounded-full border border-dashed border-[#b8f500]/20 pointer-events-none animate-[spin_120s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] sm:w-[200px] h-[140px] sm:h-[200px] rounded-full border border-white/10 pointer-events-none" />

        {/* Center Tactical Radar Reticle (Clean, NO weird neck polygon) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#b8f500]/30 bg-black/60 flex items-center justify-center shadow-[0_0_25px_rgba(184,245,0,0.2)]">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#b8f500] animate-ping" />
            </div>
          </div>
          {/* Subtle tactical pulse glow */}
          <div className="absolute w-44 h-44 bg-[#112613]/30 rounded-full blur-2xl -z-10" />
        </div>

        {/* Radiating Laser Light Beams to 4 Branches (Persis Gambar 5) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Line to Top-Left Remains */}
          <line x1="50%" y1="50%" x2="28%" y2="24%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="28%" y2="24%" stroke="#7CFF01" strokeWidth="1" opacity="0.3" />

          {/* Line to Bottom-Left Elsewhere (Dual Red & Cyan laser beam from Gambar 5) */}
          <line x1="50%" y1="50%" x2="24%" y2="76%" stroke="#00F0FF" strokeWidth="1.5" opacity="0.55" />
          <line x1="50%" y1="50%" x2="23.5%" y2="76.5%" stroke="#FF0055" strokeWidth="1" opacity="0.55" />

          {/* Line to Bottom-Center Memories (Bright Lime-Yellow Laser Beam from Gambar 5) */}
          <line x1="50%" y1="50%" x2="50%" y2="82%" stroke="#b8f500" strokeWidth="2.2" opacity="0.85" className="drop-shadow-[0_0_8px_#b8f500]" />

          {/* Line to Right Preparations */}
          <line x1="50%" y1="50%" x2="76%" y2="48%" stroke="#EAB308" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.5" />
        </svg>

        {/* Tactical Corner Scanlines & Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(7,9,8,0.95)_100%)] pointer-events-none" />
        <div className="absolute inset-0 scanlines opacity-15 pointer-events-none" />
      </div>

      {/* =========================================================================
          TOP BAR (Gambar 5: Tombol Persegi Panjang Gelap Minimalis dengan Ikon <)
         ========================================================================= */}
      <header className="relative z-30 flex items-center justify-between w-full pointer-events-auto">
        {/* Tombol Kembali ke Menu Utama */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2.5 px-3 py-1.5 bg-black/90 border border-white/20 hover:border-[#b8f500] text-zinc-300 hover:text-white transition-all clip-chamfer cursor-pointer shadow-lg pointer-events-auto"
        >
          <ChevronLeft className="w-4 h-4 text-zinc-400 group-hover:text-[#b8f500] group-hover:-translate-x-1 transition-transform" />
          <span className="font-tactical font-bold text-xs uppercase tracking-widest text-[#b8f500]">
            RETURN TO TERMINAL
          </span>
        </button>

        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 bg-black/80 px-3 py-1 border border-white/10 clip-tag pointer-events-none">
          <Compass className="w-3.5 h-3.5 text-[#b8f500]" />
          <span>TACTICAL MAP // JOINT TERMINAL EP.17</span>
        </div>
      </header>

      {/* =========================================================================
          4 BRANCH POINTS (Mewakili 4 Bidang Keahlian & Kategori Proyek - Persis Gambar 5)
         ========================================================================= */}
      <div className="relative z-30 flex-1 w-full flex items-center justify-center pointer-events-none">
        {/* 1. TOP-LEFT: Remains (Web & Cloud Platforms) */}
        <div className="absolute top-[8%] sm:top-[12%] left-[4%] sm:left-[10%] max-w-xs pointer-events-auto">
          <button
            onClick={() => onSelectBranch(BRANCH_CATEGORIES[0])}
            className="group text-left cursor-pointer transition-all hover:scale-105 p-3 rounded-lg hover:bg-black/40 border border-transparent hover:border-[#7CFF01]/30 pointer-events-auto"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="px-1.5 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black tracking-wider uppercase shadow-[0_0_8px_rgba(184,245,0,0.5)]">
                ▶▶ Unlock
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">STAGE 01</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-tactical font-black text-3xl sm:text-4xl text-white group-hover:text-[#b8f500] transition-colors leading-none">
                {BRANCH_CATEGORIES[0].count}
              </span>
              <div className="flex flex-col">
                <span className="font-tactical font-black text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-[#b8f500] transition-colors">
                  {BRANCH_CATEGORIES[0].codeName}
                </span>
                <span className="text-[11px] font-mono text-[#b8f500] tracking-tight">
                  {BRANCH_CATEGORIES[0].domainName}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 font-mono mt-1 leading-relaxed hidden sm:block max-w-[220px]">
              {BRANCH_CATEGORIES[0].description}
            </p>
          </button>
        </div>

        {/* 2. BOTTOM-LEFT: Elsewhere (AI & Deep Learning) */}
        <div className="absolute bottom-[16%] sm:bottom-[18%] left-[4%] sm:left-[10%] max-w-xs pointer-events-auto">
          <button
            onClick={() => onSelectBranch(BRANCH_CATEGORIES[1])}
            className="group text-left cursor-pointer transition-all hover:scale-105 p-3 rounded-lg hover:bg-black/40 border border-transparent hover:border-[#00F0FF]/30 pointer-events-auto"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="px-1.5 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black tracking-wider uppercase shadow-[0_0_8px_rgba(184,245,0,0.5)]">
                ▶▶ Unlock
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">STAGE 02</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-tactical font-black text-3xl sm:text-4xl text-white group-hover:text-[#00F0FF] transition-colors leading-none">
                {BRANCH_CATEGORIES[1].count}
              </span>
              <div className="flex flex-col">
                <span className="font-tactical font-black text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-[#00F0FF] transition-colors">
                  {BRANCH_CATEGORIES[1].codeName}
                </span>
                <span className="text-[11px] font-mono text-[#00F0FF] tracking-tight">
                  {BRANCH_CATEGORIES[1].domainName}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 font-mono mt-1 leading-relaxed hidden sm:block max-w-[220px]">
              {BRANCH_CATEGORIES[1].description}
            </p>
          </button>
        </div>

        {/* 3. BOTTOM-CENTER: Memories (Decision Systems & Data Science) */}
        <div className="absolute bottom-[8%] sm:bottom-[10%] left-1/2 -translate-x-1/2 max-w-xs text-center pointer-events-auto">
          <button
            onClick={() => onSelectBranch(BRANCH_CATEGORIES[2])}
            className="group flex flex-col items-center cursor-pointer transition-all hover:scale-105 p-3 rounded-lg hover:bg-black/40 border border-transparent hover:border-[#b8f500]/30 pointer-events-auto"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="px-1.5 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black tracking-wider uppercase shadow-[0_0_8px_rgba(184,245,0,0.5)]">
                ▶▶ Unlock
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">STAGE 03</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-tactical font-black text-3xl sm:text-4xl text-white group-hover:text-[#b8f500] transition-colors leading-none">
                {BRANCH_CATEGORIES[2].count}
              </span>
              <div className="flex flex-col items-start">
                <span className="font-tactical font-black text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-[#b8f500] transition-colors">
                  {BRANCH_CATEGORIES[2].codeName}
                </span>
                <span className="text-[11px] font-mono text-[#b8f500] tracking-tight">
                  {BRANCH_CATEGORIES[2].domainName}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 font-mono mt-1 leading-relaxed hidden sm:block max-w-[240px]">
              {BRANCH_CATEGORIES[2].description}
            </p>
          </button>
        </div>

        {/* 4. RIGHT: Preparations (Automation & Microservices) */}
        <div className="absolute top-[40%] right-[4%] sm:right-[10%] max-w-xs text-right pointer-events-auto">
          <button
            onClick={() => onSelectBranch(BRANCH_CATEGORIES[3])}
            className="group flex flex-col items-end cursor-pointer transition-all hover:scale-105 p-3 rounded-lg hover:bg-black/40 border border-transparent hover:border-[#EAB308]/30 pointer-events-auto"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">STAGE 04</span>
              <span className="px-1.5 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black tracking-wider uppercase shadow-[0_0_8px_rgba(184,245,0,0.5)]">
                ▶▶ Unlock
              </span>
            </div>

            <div className="flex items-baseline gap-2 justify-end">
              <div className="flex flex-col items-end">
                <span className="font-tactical font-black text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-[#EAB308] transition-colors">
                  {BRANCH_CATEGORIES[3].codeName}
                </span>
                <span className="text-[11px] font-mono text-[#EAB308] tracking-tight">
                  {BRANCH_CATEGORIES[3].domainName}
                </span>
              </div>
              <span className="font-tactical font-black text-3xl sm:text-4xl text-white group-hover:text-[#EAB308] transition-colors leading-none">
                {BRANCH_CATEGORIES[3].count}
              </span>
            </div>

            <p className="text-[11px] text-zinc-400 font-mono mt-1 leading-relaxed hidden sm:block max-w-[220px]">
              {BRANCH_CATEGORIES[3].description}
            </p>
          </button>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM-LEFT CORNER: All Archives / Projects (Adaptasi Clue Rewards Gambar 5)
         ========================================================================= */}
      <footer className="relative z-30 flex items-center justify-between w-full pointer-events-auto">
        <button
          onClick={onOpenAllProjects}
          className="group flex items-center gap-3 bg-black/90 border border-white/20 hover:border-[#b8f500] px-4 py-2 clip-chamfer cursor-pointer transition-all shadow-xl pointer-events-auto"
        >
          <div className="flex items-center gap-1.5 text-[#b8f500]">
            <Layers className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-none">
              ALL ARCHIVES
            </span>
            <span className="font-tactical font-bold text-sm text-white group-hover:text-[#b8f500] transition-colors tracking-wide leading-none mt-1">
              8 Projects Cleared
            </span>
          </div>
          <span className="ml-2 px-2 py-0.5 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black tracking-wider uppercase">
            ▶▶ View All
          </span>
        </button>

        <div className="hidden md:flex items-center gap-2 text-zinc-500 font-mono text-[10px] tracking-widest pointer-events-none">
          <span>SELECT A BRANCH TO INSPECT FIELD ARCHIVES</span>
        </div>
      </footer>
    </div>
  );
};
