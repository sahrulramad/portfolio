import React, { useState, useEffect } from 'react';

interface IntroCinematicProps {
  onComplete: () => void;
}

export const IntroCinematic: React.FC<IntroCinematicProps> = ({ onComplete }) => {
  // Phase 1: 0.0s - 2.0s (Gambar 2: Layar hitam pekat + kutipan tipis di bawah)
  // Phase 2: 2.0s - 4.5s (Gambar 1: Tirai cahaya hijau zamrud + kristal putih + judul renggang)
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
      {/* Top Letterbox Bar */}
      <div className="w-full h-10 md:h-16 bg-black border-b border-white/5 flex items-center justify-between px-6 z-20">
        <div className="flex items-center gap-2 text-white/30 text-[10px] tracking-widest font-mono">
          <span className="w-1 h-1 rounded-full bg-[#b8f500]/60 animate-ping" />
          <span>PRTS // INITIALIZATION</span>
        </div>
        <button
          onClick={handleSkip}
          className="text-[10px] tracking-widest text-white/40 hover:text-[#b8f500] font-mono transition-colors"
        >
          [ CLICK TO ENTER ]
        </button>
      </div>

      {/* Center Cinematic Stage */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden">
        {/* Phase 1 (Gambar 2): Layar hitam hening, kutipan tipis di bawah */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 px-6 transition-all duration-1000 ${
            phase === 'quote' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base tracking-[0.25em] text-center max-w-2xl leading-relaxed">
            Let us praise, companions, freedom&apos;s twilight.
          </p>
          <div className="w-8 h-[1px] bg-white/20 mt-4" />
        </div>

        {/* Phase 2 (Gambar 1): Tirai Cahaya Hijau Zamrud + Kristal Putih + Tipografi Renggang */}
        <div
          className={`relative flex flex-col items-center justify-center transition-all duration-1000 ${
            phase === 'crystal' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {/* Luminous Emerald Curtain of Light behind crystal */}
          <div className="relative flex items-center justify-center">
            {/* Vertical emerald light beam (Gambar 1) */}
            <div className="absolute w-44 md:w-64 h-64 md:h-96 bg-gradient-to-b from-transparent via-[#2b5a22]/35 to-transparent blur-2xl pointer-events-none" />
            <div className="absolute w-20 md:w-28 h-56 md:h-80 bg-gradient-to-b from-transparent via-[#7CFF01]/20 to-transparent blur-xl pointer-events-none" />

            {/* Faceted Crystal / Shard Silhouette in pure white */}
            <div className="relative z-10 my-4 drop-shadow-[0_0_24px_rgba(184,245,0,0.4)]">
              <svg width="42" height="74" viewBox="0 0 42 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Clean faceted polygon shard matching Arknights Ep.17 */}
                <polygon points="21,0 38,28 32,74 21,68 10,74 4,28" fill="#FFFFFF" />
                <polygon points="21,0 38,28 21,68" fill="#F1F5F9" opacity="0.9" />
                <polygon points="21,0 4,28 21,68" fill="#E2E8F0" opacity="0.75" />
                <line x1="21" y1="0" x2="21" y2="68" stroke="#CBD5E1" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Spaced Typography (Persis Gambar 1) */}
          <div className="text-center mt-6 space-y-2 z-10">
            <h1 className="text-zinc-200 font-light tracking-[0.4em] sm:tracking-[0.55em] text-xs sm:text-sm md:text-base uppercase">
              C R I T I C A L &nbsp; P H A S E &nbsp; T R A N S I T I O N
            </h1>
            <p className="text-zinc-400 font-light tracking-[0.5em] text-[11px] sm:text-xs">
              E P &nbsp; 1 7
            </p>
            <p className="text-[#b8f500]/70 font-mono tracking-[0.25em] text-[9px] sm:text-[10px] pt-4 uppercase">
              SYAHRUL RAMADHON // INFORMATICS & SOFTWARE ENGINEER
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Letterbox Bar */}
      <div className="w-full h-10 md:h-16 bg-black border-t border-white/5 flex items-center justify-between px-6 z-20">
        <span className="text-[10px] tracking-widest text-white/30 font-mono">RHODES ISLAND EMR // PRTS v17.0</span>
        <span className="text-[10px] tracking-widest text-zinc-500 font-mono">CLICK TO SKIP</span>
      </div>
    </div>
  );
};
