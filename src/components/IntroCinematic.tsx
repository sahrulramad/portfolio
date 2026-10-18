import React, { useState, useEffect } from 'react';

interface IntroCinematicProps {
  onComplete: () => void;
}

export const IntroCinematic: React.FC<IntroCinematicProps> = ({ onComplete }) => {
  // Phase 1: 0.0s - 2.0s (Gambar 2: Layar hitam pekat + kutipan tipis renggang di bawah)
  // Phase 2: 2.0s - 4.5s (Gambar 1: Tirai vertikal cahaya hijau zamrud + kristal putih + judul renggang)
  const [phase, setPhase] = useState<'quote' | 'crystal' | 'exit'>('quote');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase('crystal');
    }, 2000);

    const t2 = setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 700);
    }, 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('exit');
    setTimeout(onComplete, 400);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 bg-[#050605] text-white flex flex-col justify-between items-center select-none cursor-pointer transition-opacity duration-700 ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Letterbox Bar (Clean, no corner text, matches Gambar 1 & 2) */}
      <div className="w-full h-12 sm:h-16 md:h-20 bg-black z-20 pointer-events-none" />

      {/* Center Cinematic Stage */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden">
        {/* Phase 1 (Gambar 2): Layar hitam hening, hanya satu baris kutipan tipis di bawah tengah */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-end pb-20 sm:pb-28 px-6 transition-all duration-1000 ${
            phase === 'quote' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base tracking-[0.25em] text-center max-w-2xl leading-relaxed">
            Let us praise, companions, freedom&apos;s twilight.
          </p>
          <div className="w-8 h-[1px] bg-white/20 mt-4" />
        </div>

        {/* Phase 2 (Gambar 1): Tirai Garis-Garis Cahaya Vertikal Hijau Zamrud + Kristal Putih + Tipografi Renggang */}
        <div
          className={`relative flex flex-col items-center justify-center transition-all duration-1000 ${
            phase === 'crystal' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {/* Vertical Emerald Light Curtain with vertical beam stripes (Sesuai Gambar 1) */}
          <div className="relative flex items-center justify-center">
            {/* Background Emerald Glow */}
            <div className="absolute w-56 sm:w-72 md:w-88 h-64 sm:h-80 md:h-96 bg-gradient-to-b from-transparent via-[#1a3d1b]/50 to-transparent blur-2xl pointer-events-none" />

            {/* Vertical Light Beam Lines (Repeating linear gradient curtain matching Gambar 1) */}
            <div
              className="absolute w-44 sm:w-60 md:w-72 h-60 sm:h-76 md:h-92 pointer-events-none opacity-80 mix-blend-screen"
              style={{
                background:
                  'repeating-linear-gradient(90deg, transparent 0px, transparent 6px, rgba(124, 255, 1, 0.2) 7px, rgba(74, 222, 128, 0.35) 9px, transparent 12px, transparent 18px, rgba(184, 245, 0, 0.3) 19px, transparent 23px)',
                maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
              }}
            />

            {/* Bright Center Core Pillar */}
            <div className="absolute w-20 sm:w-28 h-56 sm:h-72 bg-gradient-to-b from-transparent via-[#4ade80]/20 to-transparent blur-lg pointer-events-none" />

            {/* Faceted Crystal / Shard Silhouette in pure clean white */}
            <div className="relative z-10 my-4 drop-shadow-[0_0_24px_rgba(255,255,255,0.7)]">
              <svg width="42" height="74" viewBox="0 0 42 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="21,0 38,28 32,74 21,68 10,74 4,28" fill="#FFFFFF" />
                <polygon points="21,0 38,28 21,68" fill="#F8FAFC" opacity="0.9" />
                <polygon points="21,0 4,28 21,68" fill="#E2E8F0" opacity="0.8" />
                <line x1="21" y1="0" x2="21" y2="68" stroke="#CBD5E1" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Spaced Typography (Persis Gambar 1) */}
          <div className="text-center mt-6 space-y-2 z-10">
            <h1 className="text-zinc-200 font-light tracking-[0.45em] sm:tracking-[0.6em] text-xs sm:text-sm md:text-base uppercase">
              C R I T I C A L &nbsp; P H A S E &nbsp; T R A N S I T I O N
            </h1>
            <p className="text-zinc-400 font-light tracking-[0.55em] text-[11px] sm:text-xs">
              E P &nbsp; 1 7
            </p>
            <p className="text-[#b8f500]/80 font-mono tracking-[0.3em] text-[9px] sm:text-[10px] pt-4 uppercase">
              SYAHRUL RAMADHON // S.KOM (CUM LAUDE) · SOFTWARE ENGINEER
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Letterbox Bar (Clean, no corner text, matches Gambar 1 & 2) */}
      <div className="w-full h-12 sm:h-16 md:h-20 bg-black z-20 pointer-events-none" />
    </div>
  );
};
