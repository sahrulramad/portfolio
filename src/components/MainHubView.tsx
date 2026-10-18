import React, { useRef, useEffect } from 'react';
import { OPERATOR_PROFILE } from '../data/portfolioData';
import { ArknightsLiveWallpaper } from './ArknightsLiveWallpaper';
import { FloatingOriginiumDust } from './FloatingOriginiumDust';
import {
  HomeGeodesicIcon,
  TerminalRackIcon,
  FolderDossierIcon,
  SupplyCrateIcon,
  ArknightsKnotEmblem,
} from './ArknightsIcons';
import { Search } from 'lucide-react';

interface MainHubViewProps {
  onOpenMemories: () => void;
  onOpenProfile: () => void;
  onOpenSkills: () => void;
  onOpenClinic: () => void;
  onOpenTransfer: () => void;
  onReplayIntro: () => void;
}

export const MainHubView: React.FC<MainHubViewProps> = ({
  onOpenMemories,
  onOpenProfile,
  onOpenSkills,
  onOpenClinic,
  onOpenTransfer,
  onReplayIntro,
}) => {
  // Ponytail 60fps Optimization: Container ref drives CSS custom properties directly.
  // Zero React state updates / Zero re-renders on mouse movement!
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (rafId.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const normX = ((clientX / innerWidth - 0.5) * 2).toFixed(4);
    const normY = ((clientY / innerHeight - 0.5) * 2).toFixed(4);

    rafId.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--px', normX);
        containerRef.current.style.setProperty('--py', normY);
      }
      rafId.current = null;
    });
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-screen h-screen min-h-[640px] overflow-y-auto md:overflow-hidden bg-[#06080A] text-[#F1F5F9] select-none flex flex-col justify-between p-6 sm:p-8 md:p-12"
      style={{
        // Default zero values before mouse movement
        ['--px' as any]: 0,
        ['--py' as any]: 0,
      }}
    >
      {/* 1. Live Wallpaper Background (Parallax shifted opposite to cursor via hardware CSS vars) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: 'translate3d(calc(var(--px, 0) * -12px), calc(var(--py, 0) * -10px), 0) scale(1.03)',
        }}
      >
        <ArknightsLiveWallpaper />
      </div>

      {/* 2. Floating Originium Dust Particles */}
      <FloatingOriginiumDust />

      {/* =========================================================================
          TOP BAR (Sesuai Gambar 3)
         ========================================================================= */}
      <header
        className="relative z-30 flex items-start justify-between w-full pointer-events-auto transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: 'translate3d(calc(var(--px, 0) * 3px), calc(var(--py, 0) * 3px), 0)',
        }}
      >
        {/* Top-Left: Trapezoid Tab with < Arrow and Geodesic 3D Wireframe Mesh (Gambar 3) */}
        <div className="flex items-center -ml-6 sm:-ml-8 md:-ml-12 -mt-6 sm:-mt-8 md:-mt-12">
          <button
            onClick={onReplayIntro}
            title="Return to Intro / Reset"
            className="group flex items-center gap-3 bg-[#0a0d0f]/95 hover:bg-[#12181c] border-r border-b border-white/20 pl-6 sm:pl-8 pr-6 py-2.5 transition-all cursor-pointer shadow-2xl pointer-events-auto"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
            }}
          >
            <span className="font-serifArknights font-bold text-xl text-zinc-300 group-hover:text-[#b8f500] group-hover:-translate-x-1 transition-transform">
              &lang;
            </span>
            <HomeGeodesicIcon className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Top-Right: Arknights Classical Serif Navigation Widget (Gambar 3 & 4) */}
        <div className="flex flex-col items-end gap-1.5 -mr-2 sm:mr-0 select-none pointer-events-auto">
          <div className="flex items-center gap-3 text-xs">
            {/* Search Icon */}
            <button
              onClick={onOpenProfile}
              className="text-zinc-400 hover:text-white transition-colors p-1 cursor-pointer pointer-events-auto"
              title="Search Archives"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Operators' Trust (Classical Serif: Cormorant Garamond / Cinzel) */}
            <button
              onClick={onOpenProfile}
              className="group flex flex-col items-start leading-none text-left cursor-pointer transition-colors pointer-events-auto"
            >
              <span className="text-[10px] font-monoTechnical font-bold text-[#b8f500] italic tracking-wider leading-none mb-0.5">
                NEW
              </span>
              <div className="text-zinc-200 group-hover:text-white font-serifArknights font-bold text-sm tracking-wider uppercase">
                <span>Operators&apos;</span>
                <span className="block text-xs text-zinc-400 group-hover:text-zinc-200">Trust</span>
              </div>
            </button>

            <span className="text-zinc-600 text-sm">|</span>

            {/* Memories Link */}
            <button
              onClick={onOpenMemories}
              className="group flex items-center gap-1.5 text-zinc-300 hover:text-[#b8f500] transition-colors cursor-pointer pointer-events-auto"
            >
              <span className="text-zinc-500 group-hover:text-[#b8f500] text-xs">⚑</span>
              <span className="font-serifArknights font-bold text-sm tracking-wider uppercase">
                Memories
              </span>
            </button>
          </div>

          {/* Hexagonal Shield Badge with 4/4 */}
          <div className="flex items-center justify-end pr-1">
            <div className="flex items-center gap-1 px-2 py-0.5 bg-black/75 border border-white/20 text-white font-condensed font-semibold text-xs tracking-wider clip-chamfer">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8f500]" />
              <span>4 / 4</span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          CENTER SCREEN: ATMOSPHERIC NEGATIVE SPACE
         ========================================================================= */}
      <div className="relative z-10 flex-1 w-full pointer-events-none" />

      {/* =========================================================================
          BOTTOM AREA: CLASSICAL SERIF TITLE & HIGH-CONTRAST INTERACTIVE MENU
         ========================================================================= */}
      <div
        className="relative z-30 flex flex-col md:flex-row items-end justify-between w-full gap-8 pointer-events-auto transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: 'translate3d(calc(var(--px, 0) * 4px), calc(var(--py, 0) * 4px), 0)',
        }}
      >
        {/* SISI KIRI BAWAH: Kutipan Elegan & Judul Classical Serif */}
        <div className="max-w-xl space-y-3 pointer-events-auto">
          {/* Bait kutipan kecil miring Cormorant Garamond */}
          <p className="text-zinc-400 font-serifArknights italic text-sm sm:text-base tracking-wide leading-relaxed">
            &ldquo;Let us praise the fateful burden<br />
            That the people&apos;s leader takes up in tears.&rdquo;
          </p>

          {/* Judul Besar: Classical Serif (Cinzel / Cormorant Garamond) + Pulsing Waveform */}
          <div className="relative py-1">
            {/* Soft Emerald Waveform / Frequency Glow (Poin 2b) */}
            <div className="absolute inset-y-0 left-0 w-88 flex items-center gap-1 pointer-events-none -z-10 animate-wave-pulse">
              <span className="w-[3px] h-14 bg-gradient-to-t from-[#b8f500] to-transparent blur-[1px]" />
              <span className="w-[5px] h-20 bg-gradient-to-t from-[#7CFF01] to-transparent blur-[2px]" />
              <span className="w-[2px] h-10 bg-gradient-to-t from-[#4ade80] to-transparent" />
              <span className="w-[6px] h-24 bg-gradient-to-t from-[#b8f500] to-transparent blur-[2px]" />
              <span className="w-[3px] h-16 bg-gradient-to-t from-[#7CFF01] to-transparent" />
              <span className="w-[5px] h-22 bg-gradient-to-t from-[#b8f500] to-transparent blur-[1px]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white tracking-wider uppercase leading-none drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
              CRITICAL PHASE<br />TRANSITION
            </h1>

            {/* E P   1 7 dengan spasi renggang Geometric Sans (Barlow Condensed) */}
            <p className="text-zinc-400 font-condensed tracking-[0.8em] text-sm sm:text-base pt-2 font-medium">
              E &nbsp; P &nbsp; &nbsp; 1 &nbsp; 7
            </p>
          </div>

          {/* IDENTITAS OPERATOR UTAMA (Menonjol, Jelas & Berkelas) */}
          <div className="pt-2 border-l-2 border-[#7CFF01] pl-3.5 space-y-1 bg-black/60 backdrop-blur-md py-2 pr-5 clip-chamfer inline-block border-t border-r border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7CFF01] animate-pulse" />
              <span className="font-cinzel font-bold text-base sm:text-lg text-white tracking-wider uppercase">
                {OPERATOR_PROFILE.name}
              </span>
              <span className="px-1.5 py-0.2 bg-[#EAB308]/20 border border-[#EAB308]/40 text-[#EAB308] text-[10px] font-monoTechnical font-bold">
                S.KOM · CUM LAUDE
              </span>
            </div>
            <p className="font-condensed text-sm text-[#7CFF01] font-semibold tracking-wider uppercase">
              INFORMATICS & SOFTWARE ENGINEER // DATA SCIENTIST
            </p>
            <div className="flex items-center gap-2 text-zinc-400 font-monoTechnical text-[11px] pt-0.5">
              <span>Status: Available for Deployment · Open to Collaboration</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SISI KANAN: NAVIGASI VERTIKAL CLASSICAL SERIF DENGAN MICRO-INTERACTIONS
           ========================================================================= */}
        <div className="flex flex-col items-end gap-5 sm:gap-6 w-full md:w-auto pointer-events-auto">
          {/* 1. Joint Terminal (Hover Slide, Diamond Rotation, Animated Equalizer) */}
          <div className="group relative flex flex-col items-end p-2 rounded transition-all duration-300 hover:-translate-x-2.5 cursor-pointer pointer-events-auto">
            {/* Ambient emerald hover spotlight behind item */}
            <div className="absolute inset-0 bg-gradient-to-l from-[rgba(124,255,1,0.12)] via-[rgba(124,255,1,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded pointer-events-none" />

            {/* 6 Live Signal Equalizer Tubes (Gambar 4 - Animated keyframes!) */}
            <div className="flex flex-col items-end -mr-2 pointer-events-none">
              <TerminalRackIcon className="w-24 sm:w-28 h-12 sm:h-14 opacity-95 drop-shadow-[0_0_14px_rgba(184,245,0,0.5)]" />
            </div>

            {/* Badge Unlockable */}
            <div className="flex items-center gap-1.5 mb-0.5 -mt-2 pointer-events-none">
              <span className="px-1.5 py-0.2 bg-[#b8f500] text-[#050706] font-monoTechnical text-[10px] font-bold tracking-wider uppercase shadow-[0_0_8px_rgba(184,245,0,0.6)]">
                ▶▶ Unlockable
              </span>
            </div>

            {/* Button: Joint Terminal (Classical Serif Cormorant Garamond / Cinzel) */}
            <button
              onClick={onOpenMemories}
              className="flex items-center justify-end gap-3 text-right cursor-pointer pointer-events-auto"
            >
              <span className="font-serifArknights font-bold text-2xl sm:text-3xl text-white group-hover:text-[#b8f500] tracking-wide uppercase transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Joint Terminal
              </span>
              {/* White diamond ◇ (Rotates 90deg on hover with neon glow) */}
              <span className="w-2.5 h-2.5 bg-white rotate-45 group-hover:rotate-135 group-hover:scale-125 group-hover:bg-[#b8f500] group-hover:shadow-[0_0_12px_#b8f500] transition-all duration-300" />
            </button>
            <span className="text-[11px] font-condensed font-medium text-zinc-500 tracking-wider mt-0.5 pointer-events-none">
              [ 4 BRANCHES · 8 RESEARCH DOSSIERS ]
            </span>
          </div>

          {/* 2. List of Items Required (Tech Stack & Spesialisasi) */}
          <div className="group relative flex flex-col items-end p-2 rounded transition-all duration-300 hover:-translate-x-2 cursor-pointer pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-l from-[rgba(124,255,1,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded pointer-events-none" />

            <button
              onClick={onOpenSkills}
              className="flex items-center justify-end gap-3 text-right text-zinc-200 group-hover:text-white transition-colors cursor-pointer pointer-events-auto"
            >
              <FolderDossierIcon className="w-5 h-5 text-zinc-400 group-hover:text-[#b8f500] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shrink-0" />
              <div className="flex flex-col items-end leading-tight">
                <span className="font-serifArknights font-bold text-xl sm:text-2xl tracking-wide uppercase">
                  List of Items
                </span>
                <span className="font-serifArknights font-bold text-xl sm:text-2xl tracking-wide uppercase">
                  Required
                </span>
              </div>
            </button>
            <span className="text-[11px] font-condensed font-medium text-zinc-500 tracking-wider mt-0.5 pointer-events-none">
              18 SKILL MODULES & ARCHITECTURE
            </span>
          </div>

          {/* 3. Unlicensed Clinic (Pendidikan & Pengalaman) */}
          <div className="group relative flex flex-col items-end p-2 rounded transition-all duration-300 hover:-translate-x-2 cursor-pointer pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-l from-[rgba(234,179,8,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded pointer-events-none" />

            <button
              onClick={onOpenClinic}
              className="flex items-center justify-end gap-3 text-right text-zinc-200 group-hover:text-white transition-colors cursor-pointer pointer-events-auto"
            >
              <SupplyCrateIcon className="w-6 h-6 text-zinc-400 group-hover:text-[#EAB308] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300 shrink-0" />
              <div className="flex flex-col items-end leading-tight">
                <span className="font-serifArknights font-bold text-xl sm:text-2xl tracking-wide uppercase">
                  Unlicensed
                </span>
                <span className="font-serifArknights font-bold text-xl sm:text-2xl tracking-wide uppercase">
                  Clinic
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-monoTechnical font-bold text-[#EAB308] bg-[#EAB308]/15 px-1.5 py-0.5 border border-[#EAB308]/40">
                ⚙ 48
              </div>
            </button>
            <span className="text-[11px] font-condensed font-medium text-zinc-500 tracking-wider mt-0.5 pointer-events-none">
              ACADEMIC HONORS & WORK HISTORY
            </span>
          </div>

          {/* 4. Transfer Area (Kontak & Saluran Komunikasi) */}
          <div className="group relative flex flex-col items-end pt-2 p-2 rounded transition-all duration-300 hover:-translate-x-2.5 cursor-pointer pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-l from-[rgba(184,245,0,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded pointer-events-none" />

            <div className="flex items-center gap-1 text-[10px] font-monoTechnical font-bold text-[#EAB308] pr-2 mb-0.5 pointer-events-none">
              <span>⬡ 0</span>
            </div>

            <button
              onClick={onOpenTransfer}
              className="flex items-center justify-end gap-3 text-right cursor-pointer pointer-events-auto"
            >
              <ArknightsKnotEmblem className="w-7 h-7 group-hover:rotate-45 group-hover:scale-115 transition-all duration-300 shrink-0" />
              <div className="flex flex-col items-end leading-none">
                <span className="font-serifArknights font-bold text-2xl sm:text-3xl text-[#b8f500] tracking-wider uppercase drop-shadow-[0_0_12px_rgba(184,245,0,0.5)]">
                  Transfer Area
                </span>
              </div>
            </button>
            <span className="text-[11px] font-condensed font-medium text-zinc-500 tracking-wider mt-0.5 pointer-events-none">
              DIRECT TRANSMISSION & NETWORKS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
