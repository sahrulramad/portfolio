import React from 'react';

// Top-Left Geodesic 3D Wireframe Polyhedron with Home Icon inside (Gambar 3)
export const HomeGeodesicIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,5 52,18 52,42 30,55 8,42 8,18" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
    <line x1="30" y1="5" x2="30" y2="55" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    <line x1="8" y1="18" x2="52" y2="42" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <line x1="8" y1="42" x2="52" y2="18" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <circle cx="30" cy="5" r="2" fill="white" />
    <circle cx="52" cy="18" r="2" fill="white" />
    <circle cx="52" cy="42" r="2" fill="white" />
    <circle cx="30" cy="55" r="2" fill="white" />
    <circle cx="8" cy="42" r="2" fill="white" />
    <circle cx="8" cy="18" r="2" fill="white" />
    <path
      d="M30 18L40 27V38H33V31H27V38H20V27L30 18Z"
      fill="white"
      className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
    />
  </svg>
);

// 6 Live Signal Equalizer Bars + Terminal Console Chassis (Gambar 4 - Animated!)
export const TerminalRackIcon: React.FC<{ className?: string }> = ({ className = 'w-24 h-16' }) => (
  <svg viewBox="0 0 120 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 6 Vertical glowing acrylic tubes with independent signal animations */}
    <g transform="translate(0, 0)">
      {/* Rod 1 */}
      <rect
        x="25"
        y="4"
        width="4"
        height="34"
        rx="2"
        fill="url(#rodGrad)"
        style={{ transformOrigin: '27px 38px' }}
        className="animate-signal-1"
      />
      {/* Rod 2 */}
      <rect
        x="37"
        y="0"
        width="5"
        height="38"
        rx="2.5"
        fill="url(#rodGradGlow)"
        style={{ transformOrigin: '39px 38px' }}
        className="animate-signal-2"
      />
      {/* Rod 3 */}
      <rect
        x="50"
        y="8"
        width="4"
        height="30"
        rx="2"
        fill="url(#rodGrad)"
        style={{ transformOrigin: '52px 38px' }}
        className="animate-signal-3"
      />
      {/* Rod 4 */}
      <rect
        x="62"
        y="2"
        width="5"
        height="36"
        rx="2.5"
        fill="url(#rodGradGlow)"
        style={{ transformOrigin: '64px 38px' }}
        className="animate-signal-4"
      />
      {/* Rod 5 */}
      <rect
        x="75"
        y="10"
        width="4"
        height="28"
        rx="2"
        fill="url(#rodGrad)"
        style={{ transformOrigin: '77px 38px' }}
        className="animate-signal-5"
      />
      {/* Rod 6 */}
      <rect
        x="87"
        y="4"
        width="5"
        height="34"
        rx="2.5"
        fill="url(#rodGradGlow)"
        style={{ transformOrigin: '89px 38px' }}
        className="animate-signal-6"
      />
    </g>

    {/* Horizontal Terminal Keyboard / Deck below the tubes */}
    <rect x="15" y="40" width="86" height="18" rx="2" fill="#0C1014" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    <line x1="22" y1="45" x2="94" y2="45" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="4 3" />
    <line x1="22" y1="51" x2="88" y2="51" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="4 3" />

    <defs>
      <linearGradient id="rodGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d9f99d" stopOpacity="0.4" />
        <stop offset="60%" stopColor="#b8f500" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#7CFF01" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="rodGradGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#d9f99d" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#b8f500" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

// Tactical Folder / Clipboard Dossier Icon
export const FolderDossierIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="rgba(255,255,255,0.08)" />
    <path d="M7 2H15V5H7V2Z" fill="currentColor" />
    <line x1="7" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.4" />
    <line x1="7" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.4" />
    <line x1="7" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="1.4" />
    <rect x="19" y="8" width="2" height="6" fill="#b8f500" />
  </svg>
);

// Isometric 3D Medical / Supply Crate Icon
export const SupplyCrateIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,2 25,8 14,14 3,8" stroke="currentColor" strokeWidth="1.4" fill="rgba(255,255,255,0.12)" />
    <polygon points="3,8 14,14 14,26 3,20" stroke="currentColor" strokeWidth="1.4" fill="rgba(255,255,255,0.05)" />
    <polygon points="14,14 25,8 25,20 14,26" stroke="currentColor" strokeWidth="1.4" fill="rgba(255,255,255,0.08)" />
    <line x1="14" y1="2" x2="14" y2="14" stroke="#EAB308" strokeWidth="1.2" opacity="0.8" />
    <line x1="3" y1="8" x2="25" y2="8" stroke="#EAB308" strokeWidth="1.2" opacity="0.8" />
  </svg>
);

// Arknights Heraldic Diamond Knot / Celtic Cross Emblem in Lime Neon
export const ArknightsKnotEmblem: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="8"
      y="8"
      width="24"
      height="24"
      rx="2"
      transform="rotate(45 20 20)"
      stroke="#b8f500"
      strokeWidth="2.2"
      fill="rgba(184,245,0,0.15)"
      className="drop-shadow-[0_0_10px_rgba(184,245,0,0.7)]"
    />
    <rect
      x="12"
      y="12"
      width="16"
      height="16"
      transform="rotate(45 20 20)"
      stroke="white"
      strokeWidth="1.4"
      fill="rgba(0,0,0,0.5)"
    />
    <circle cx="20" cy="5" r="1.5" fill="#b8f500" />
    <circle cx="35" cy="20" r="1.5" fill="#b8f500" />
    <circle cx="20" cy="35" r="1.5" fill="#b8f500" />
    <circle cx="5" cy="20" r="1.5" fill="#b8f500" />
    <rect x="18" y="18" width="4" height="4" transform="rotate(45 20 20)" fill="#b8f500" />
  </svg>
);
