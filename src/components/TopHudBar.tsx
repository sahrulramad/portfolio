import React, { useState, useEffect } from 'react';
import { RhodesIslandEmblem, OriginiumDiamond } from './TacticalSvg';
import { Activity, Clock, ShieldCheck, Zap, Play } from 'lucide-react';

interface TopHudBarProps {
  onReplayIntro?: () => void;
}

export const TopHudBar: React.FC<TopHudBarProps> = ({ onReplayIntro }) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const yr = now.getFullYear();
      const mo = String(now.getMonth() + 1).padStart(2, '0');
      const da = String(now.getDate()).padStart(2, '0');
      const hr = String(now.getHours()).padStart(2, '0');
      const mi = String(now.getMinutes()).padStart(2, '0');
      const se = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${yr}.${mo}.${da} ${hr}:${mi}:${se} UTC+7`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-[#080A0C]/90 backdrop-blur-md border-b border-[rgba(124,255,1,0.2)] flex items-center justify-between px-4 md:px-8 select-none text-xs font-terminal">
      {/* Left: Terminal & Rhodes Island Badge */}
      <div className="flex items-center gap-3">
        <RhodesIslandEmblem className="w-8 h-8" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-tactical font-bold text-sm tracking-wider text-prts-white">
              TERMINAL // RHODES ISLAND EMR
            </span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[rgba(124,255,1,0.12)] border border-[#7CFF01]/40 text-[#7CFF01] text-[10px] uppercase font-bold tracking-widest clip-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7CFF01] animate-ping" />
              ONLINE
            </span>
          </div>
          <span className="text-[10px] text-prts-muted font-terminal tracking-tight">
            PRTS NEURAL INTERFACE // CRITICAL PHASE TRANSITION · EP 17
          </span>
        </div>
      </div>

      {/* Center: Stage Indicator (Hidden on small mobile) */}
      <div className="hidden lg:flex items-center gap-3 bg-[rgba(15,20,24,0.85)] border border-[rgba(124,255,1,0.25)] px-4 py-1.5 clip-chamfer">
        <OriginiumDiamond className="w-4 h-4" />
        <div className="flex items-center gap-2">
          <span className="text-prts-muted text-[11px]">OPERATION ZONE:</span>
          <span className="font-tactical font-bold tracking-wider text-[#7CFF01] text-xs">
            CRITICAL PHASE TRANSITION
          </span>
          <span className="text-[10px] text-[#EAB308] bg-[rgba(234,179,8,0.15)] px-1.5 py-0.2 border border-[#EAB308]/40">
            PHASE 17
          </span>
        </div>
      </div>

      {/* Right: Sanity, EXP & Military Clock */}
        {onReplayIntro && (
          <button
            onClick={onReplayIntro}
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 bg-[rgba(124,255,1,0.08)] border border-[#7CFF01]/35 hover:border-[#7CFF01] text-[#7CFF01] text-[10px] uppercase font-bold tracking-wider clip-tag transition-all"
            title="Replay PRTS Intro & Calibration"
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            REPLAY INTRO
          </button>
        )}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Sanity Counter */}
        <div className="flex items-center gap-2 bg-[rgba(124,255,1,0.06)] border border-[#7CFF01]/30 px-2.5 py-1 clip-tag">
          <Zap className="w-3.5 h-3.5 text-[#7CFF01] animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[9px] text-prts-muted uppercase leading-none">SANITY</span>
            <span className="text-[#7CFF01] font-bold tracking-wider leading-none text-xs">
              135/135
            </span>
          </div>
        </div>

        {/* Level / EXP */}
        <div className="hidden sm:flex items-center gap-2 bg-[rgba(15,20,24,0.7)] border border-prts-borderSubtle px-2.5 py-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
          <div className="flex flex-col">
            <span className="text-[9px] text-prts-muted uppercase leading-none">LEVEL</span>
            <span className="text-prts-white font-bold tracking-wider leading-none text-xs">
              LV.92 <span className="text-[10px] text-prts-muted font-normal">(3840/4000)</span>
            </span>
          </div>
        </div>

        {/* Real-time Digital Military Clock */}
        <div className="hidden md:flex items-center gap-1.5 text-prts-white/90">
          <Clock className="w-3.5 h-3.5 text-[#7CFF01]" />
          <span className="font-terminal text-xs tracking-wider font-semibold text-[#7CFF01]">
            {timeStr || '2026.10.16 04:00:00'}
          </span>
        </div>
      </div>
    </header>
  );
};
