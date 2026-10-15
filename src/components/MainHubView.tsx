import React from 'react';
import { OPERATOR_PROFILE } from '../data/portfolioData';
import { ArknightsLiveWallpaper } from './ArknightsLiveWallpaper';
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
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050706] text-[#F1F5F9] select-none flex flex-col justify-between p-6 sm:p-8 md:p-12">
      {/* 1. Live Wallpaper Background (Looping 00:08–00:14 with instant Gambar 3 art fallback) */}
      <ArknightsLiveWallpaper mode="main" />

      {/* =========================================================================
          TOP BAR (Sesuai Gambar 3)
         ========================================================================= */}
      <header className="relative z-20 flex items-start justify-between w-full">
        {/* Top-Left: Trapezoid Tab with < Arrow and Geodesic 3D Wireframe Mesh (Gambar 3) */}
        <div className="flex items-center -ml-6 sm:-ml-8 md:-ml-12 -mt-6 sm:-mt-8 md:-mt-12">
          <button
            onClick={onReplayIntro}
            title="Return to Intro / Reset"
            className="group flex items-center gap-3 bg-[#0a0d0f]/90 hover:bg-[#12181c] border-r border-b border-white/20 pl-6 sm:pl-8 pr-6 py-2.5 transition-all cursor-pointer shadow-2xl"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
            }}
          >
            {/* Back Chevron < */}
            <span className="font-tactical font-black text-xl text-zinc-300 group-hover:text-[#b8f500] group-hover:-translate-x-0.5 transition-transform">
              &lang;
            </span>
            {/* Geodesic Mesh with Home Silhouette inside */}
            <HomeGeodesicIcon className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Top-Right: Arknights Authentic Navigation Widget (Gambar 3 & 4) */}
        <div className="flex flex-col items-end gap-1.5 -mr-2 sm:mr-0 select-none">
          <div className="flex items-center gap-3 text-xs font-mono">
            {/* Search Icon */}
            <button
              onClick={onOpenProfile}
              className="text-zinc-400 hover:text-white transition-colors p-1"
              title="Search Archives"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Operators' Trust (Stacked 2 lines with yellow NEW script on top) */}
            <button
              onClick={onOpenProfile}
              className="group flex flex-col items-start leading-none text-left cursor-pointer transition-colors"
            >
              <span className="text-[10px] font-bold text-[#b8f500] italic tracking-wider leading-none mb-0.5">
                NEW
              </span>
              <div className="text-zinc-200 group-hover:text-white font-tactical font-bold text-xs tracking-wider uppercase">
                <span>Operators&apos;</span>
                <span className="block text-[11px] text-zinc-400 group-hover:text-zinc-200">Trust</span>
              </div>
            </button>

            {/* Vertical Separator | */}
            <span className="text-zinc-600 text-sm">|</span>

            {/* Memories Link */}
            <button
              onClick={onOpenMemories}
              className="group flex items-center gap-1.5 text-zinc-300 hover:text-[#b8f500] transition-colors cursor-pointer"
            >
              <span className="text-zinc-500 group-hover:text-[#b8f500] text-xs">⚑</span>
              <span className="font-tactical font-bold text-xs tracking-wider uppercase">Memories</span>
            </button>
          </div>

          {/* Hexagonal Shield Badge with 4/4 or 1/5 (Gambar 3 & 4) */}
          <div className="flex items-center justify-end pr-1">
            <div className="flex items-center gap-1 px-2 py-0.5 bg-black/60 border border-white/20 text-white font-mono text-[10px] tracking-wider clip-chamfer">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8f500]" />
              <span>4 / 4</span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          CENTER SCREEN: ATMOSPHERIC NEGATIVE SPACE
          (Allows the PRTS consciousness digital face & live wallpaper to shine!)
         ========================================================================= */}
      <div className="relative z-10 flex-1 w-full" />

      {/* =========================================================================
          BOTTOM AREA: TITLE ON LEFT & VERTICAL FRAMELESS MENU ON RIGHT
         ========================================================================= */}
      <div className="relative z-20 flex flex-col md:flex-row items-end justify-between w-full gap-8">
        {/* SISI KIRI BAWAH (Persis Gambar 3) */}
        <div className="max-w-lg space-y-3">
          {/* Bait kutipan kecil abu-abu redup di atas judul */}
          <p className="text-zinc-400 font-serif italic text-xs sm:text-sm tracking-wide leading-relaxed">
            &ldquo;Let us praise the fateful burden<br />
            That the people&apos;s leader takes up in tears.&rdquo;
          </p>

          {/* Judul Besar: CRITICAL PHASE TRANSITION dengan efek gelombang vertikal hijau zamrud */}
          <div className="relative py-1">
            {/* Latar waveform hijau zamrud di belakang judul (Spectrogram dari Gambar 3) */}
            <div className="absolute inset-y-0 left-0 w-80 flex items-center gap-1 opacity-40 pointer-events-none -z-10">
              <span className="w-[3px] h-12 bg-gradient-to-t from-[#b8f500] to-transparent blur-[1px]" />
              <span className="w-[4px] h-16 bg-gradient-to-t from-[#7CFF01] to-transparent blur-[1px]" />
              <span className="w-[2px] h-10 bg-gradient-to-t from-[#4ade80] to-transparent" />
              <span className="w-[5px] h-20 bg-gradient-to-t from-[#b8f500] to-transparent blur-[2px]" />
              <span className="w-[3px] h-14 bg-gradient-to-t from-[#7CFF01] to-transparent" />
              <span className="w-[4px] h-18 bg-gradient-to-t from-[#b8f500] to-transparent blur-[1px]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-tactical font-black text-white tracking-wider uppercase leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              CRITICAL PHASE<br />TRANSITION
            </h1>

            {/* E P   1 7 dengan spasi renggang lebar (Gambar 3) */}
            <p className="text-zinc-400 font-mono tracking-[0.7em] text-xs sm:text-sm pt-2">
              E &nbsp; P &nbsp; &nbsp; 1 &nbsp; 7
            </p>
          </div>

          {/* Operation Status (Persis format Gambar 3) */}
          <div className="space-y-0.5 pt-1 font-mono text-[11px]">
            <div className="text-zinc-400">
              Operation Ends at: <span className="text-zinc-200">2026/10/28 03:59</span>
            </div>
            <div className="text-[#b8f500] font-bold tracking-wider">
              12 days Remaining · Available for Deployment
            </div>
            <div className="text-zinc-500 text-[10px]">
              OPERATOR // {OPERATOR_PROFILE.name.toUpperCase()} (S.KOM CUM LAUDE)
            </div>
          </div>
        </div>

        {/* =========================================================================
            SISI KANAN: NAVIGASI VERTIKAL TANPA BINGKAI (Persis Gambar 3 & 4)
           ========================================================================= */}
        <div className="flex flex-col items-end gap-5 sm:gap-6 w-full md:w-auto">
          {/* 1. Joint Terminal (Peta Proyek & Bidang Keahlian) */}
          <div className="flex flex-col items-end">
            {/* Illuminated vertical light tubes / vacuum rods (Gambar 4) */}
            <div className="flex flex-col items-end -mr-2">
              <TerminalRackIcon className="w-24 sm:w-28 h-12 sm:h-14 opacity-90 drop-shadow-[0_0_12px_rgba(184,245,0,0.4)]" />
            </div>

            {/* Badge Unlockable */}
            <div className="flex items-center gap-1.5 mb-0.5 -mt-2">
              <span className="px-1.5 py-0.2 bg-[#b8f500] text-[#050706] font-mono text-[10px] font-black tracking-wider uppercase shadow-[0_0_8px_rgba(184,245,0,0.5)]">
                ▶▶ Unlockable
              </span>
            </div>

            {/* Button: Joint Terminal (Stacked 2 lines + white diamond ◇) */}
            <button
              onClick={onOpenMemories}
              className="group flex items-center justify-end gap-2.5 text-right hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <div className="flex flex-col items-end leading-none">
                <span className="font-tactical font-black text-2xl sm:text-3xl text-white group-hover:text-[#b8f500] tracking-wide uppercase transition-colors">
                  Joint Terminal
                </span>
              </div>
              {/* White diamond ◇ */}
              <span className="w-2.5 h-2.5 bg-white rotate-45 group-hover:bg-[#b8f500] group-hover:shadow-[0_0_10px_#b8f500] transition-all" />
            </button>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider mt-0.5">
              [ 4 BRANCHES · 8 RESEARCH DOSSIERS ]
            </span>
          </div>

          {/* 2. List of Items Required (Tech Stack & Spesialisasi) */}
          <div className="flex flex-col items-end">
            <button
              onClick={onOpenSkills}
              className="group flex items-center justify-end gap-3 text-right text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <FolderDossierIcon className="w-5 h-5 text-zinc-400 group-hover:text-[#b8f500] transition-colors shrink-0" />
              <div className="flex flex-col items-end leading-tight">
                <span className="font-tactical font-bold text-lg sm:text-xl tracking-wide uppercase">
                  List of Items
                </span>
                <span className="font-tactical font-bold text-lg sm:text-xl tracking-wide uppercase">
                  Required
                </span>
              </div>
            </button>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider mt-0.5">
              18 SKILL MODULES & ARCHITECTURE
            </span>
          </div>

          {/* 3. Unlicensed Clinic (Pendidikan & Pengalaman) */}
          <div className="flex flex-col items-end">
            <button
              onClick={onOpenClinic}
              className="group flex items-center justify-end gap-3 text-right text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <SupplyCrateIcon className="w-6 h-6 text-zinc-400 group-hover:text-[#EAB308] transition-colors shrink-0" />
              <div className="flex flex-col items-end leading-tight">
                <span className="font-tactical font-bold text-lg sm:text-xl tracking-wide uppercase">
                  Unlicensed
                </span>
                <span className="font-tactical font-bold text-lg sm:text-xl tracking-wide uppercase">
                  Clinic
                </span>
              </div>
              {/* Gold gear badge / 48 (Gambar 4) */}
              <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#EAB308] bg-[#EAB308]/10 px-1.5 py-0.5 border border-[#EAB308]/30">
                ⚙ 48
              </div>
            </button>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider mt-0.5">
              ACADEMIC HONORS & WORK HISTORY
            </span>
          </div>

          {/* 4. Transfer Area (Kontak & Saluran Komunikasi) */}
          <div className="flex flex-col items-end pt-2">
            {/* Gold Hexagon with 0 (Gambar 4) */}
            <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#EAB308] pr-2 mb-0.5">
              <span>⬡ 0</span>
            </div>

            <button
              onClick={onOpenTransfer}
              className="group flex items-center justify-end gap-3 text-right hover:scale-[1.03] transition-transform cursor-pointer"
            >
              {/* Glowing Arknights Knot Emblem in Lime Neon */}
              <ArknightsKnotEmblem className="w-7 h-7 shrink-0" />
              <div className="flex flex-col items-end leading-none">
                <span className="font-tactical font-black text-2xl sm:text-3xl text-[#b8f500] tracking-wider uppercase drop-shadow-[0_0_12px_rgba(184,245,0,0.5)]">
                  Transfer Area
                </span>
              </div>
            </button>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider mt-0.5">
              DIRECT TRANSMISSION & NETWORKS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
