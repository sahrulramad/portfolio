import React from 'react';

export const OriginiumDiamond: React.FC<{ className?: string; glow?: boolean }> = ({ className = 'w-6 h-6', glow = true }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} ${glow ? 'drop-shadow-[0_0_12px_rgba(124,255,1,0.85)]' : ''}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Diamond */}
    <polygon points="50,5 95,50 50,95 5,50" stroke="#7CFF01" strokeWidth="3" fill="rgba(124, 255, 1, 0.08)" />
    {/* Inner facets */}
    <polygon points="50,20 80,50 50,80 20,50" stroke="#7CFF01" strokeWidth="2" fill="rgba(124, 255, 1, 0.25)" />
    {/* Center Core */}
    <polygon points="50,34 66,50 50,66 34,50" fill="#7CFF01" />
    {/* Cross Hair lines */}
    <line x1="50" y1="0" x2="50" y2="100" stroke="#4ADE80" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
    <line x1="0" y1="50" x2="100" y2="50" stroke="#4ADE80" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
  </svg>
);

export const RhodesIslandEmblem: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="60,6 114,36 114,84 60,114 6,84 6,36" stroke="#7CFF01" strokeWidth="2.5" fill="rgba(15,20,24,0.85)" />
    <polygon points="60,18 102,42 102,78 60,102 18,78 18,42" stroke="rgba(124,255,1,0.4)" strokeWidth="1.5" />
    <polygon points="60,32 88,48 88,72 60,88 32,72 32,48" fill="rgba(124,255,1,0.15)" stroke="#7CFF01" strokeWidth="1" />
    {/* Center Emblem R */}
    <text x="60" y="67" textAnchor="middle" fill="#7CFF01" fontSize="22" fontFamily="'Rajdhani', sans-serif" fontWeight="bold" letterSpacing="1">
      PRTS
    </text>
  </svg>
);

export const TacticalBarcode: React.FC<{ className?: string }> = ({ className = 'h-5 w-24' }) => (
  <svg viewBox="0 0 100 20" className={className} preserveAspectRatio="none">
    <rect x="0" y="0" width="3" height="20" fill="#7CFF01" opacity="0.9" />
    <rect x="5" y="0" width="1.5" height="20" fill="#7CFF01" opacity="0.6" />
    <rect x="9" y="0" width="4" height="20" fill="#7CFF01" opacity="0.9" />
    <rect x="15" y="0" width="2" height="20" fill="#7CFF01" opacity="0.4" />
    <rect x="19" y="0" width="5" height="20" fill="#7CFF01" opacity="0.9" />
    <rect x="26" y="0" width="1" height="20" fill="#7CFF01" opacity="0.5" />
    <rect x="30" y="0" width="3.5" height="20" fill="#7CFF01" opacity="0.8" />
    <rect x="36" y="0" width="2" height="20" fill="#7CFF01" opacity="0.6" />
    <rect x="40" y="0" width="6" height="20" fill="#7CFF01" opacity="0.9" />
    <rect x="48" y="0" width="2" height="20" fill="#7CFF01" opacity="0.4" />
    <rect x="52" y="0" width="4" height="20" fill="#7CFF01" opacity="0.8" />
    <rect x="58" y="0" width="1.5" height="20" fill="#7CFF01" opacity="0.6" />
    <rect x="62" y="0" width="5" height="20" fill="#7CFF01" opacity="0.9" />
    <rect x="69" y="0" width="2" height="20" fill="#7CFF01" opacity="0.5" />
    <rect x="73" y="0" width="3" height="20" fill="#7CFF01" opacity="0.7" />
    <rect x="78" y="0" width="1.5" height="20" fill="#7CFF01" opacity="0.4" />
    <rect x="82" y="0" width="4.5" height="20" fill="#7CFF01" opacity="0.9" />
    <rect x="88" y="0" width="2" height="20" fill="#7CFF01" opacity="0.6" />
    <rect x="92" y="0" width="3" height="20" fill="#7CFF01" opacity="0.8" />
    <rect x="97" y="0" width="3" height="20" fill="#7CFF01" opacity="0.9" />
  </svg>
);

export const CornerAccents: React.FC = () => (
  <>
    <div className="corner-bracket-tl" />
    <div className="corner-bracket-tr" />
    <div className="corner-bracket-bl" />
    <div className="corner-bracket-br" />
  </>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
