import React from 'react';

// Static module-level constant to prevent re-allocation & GC churn on renders
const PARTICLES = [
  { left: '10%', delay: '0s', duration: '14s', size: '2px', opacity: 0.5 },
  { left: '18%', delay: '4s', duration: '16s', size: '2.5px', opacity: 0.7 },
  { left: '26%', delay: '1s', duration: '11s', size: '1.5px', opacity: 0.4 },
  { left: '35%', delay: '7s', duration: '15s', size: '3px', opacity: 0.6 },
  { left: '42%', delay: '3s', duration: '13s', size: '2px', opacity: 0.5 },
  { left: '50%', delay: '9s', duration: '17s', size: '2.5px', opacity: 0.7 },
  { left: '58%', delay: '2s', duration: '12s', size: '1.5px', opacity: 0.4 },
  { left: '66%', delay: '5s', duration: '15s', size: '2px', opacity: 0.6 },
  { left: '74%', delay: '8s', duration: '14s', size: '3px', opacity: 0.5 },
  { left: '82%', delay: '1s', duration: '13s', size: '2px', opacity: 0.7 },
  { left: '90%', delay: '6s', duration: '16s', size: '2.5px', opacity: 0.4 },
  { left: '14%', delay: '11s', duration: '18s', size: '2px', opacity: 0.5 },
  { left: '48%', delay: '12s', duration: '15s', size: '2px', opacity: 0.6 },
  { left: '86%', delay: '10s', duration: '14s', size: '1.5px', opacity: 0.5 },
];

export const FloatingOriginiumDust: React.FC = React.memo(() => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none">
      {PARTICLES.map((p, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-[#7CFF01] shadow-[0_0_8px_#7CFF01] animate-dust-float"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
            bottom: '-20px',
          }}
        />
      ))}
    </div>
  );
});

FloatingOriginiumDust.displayName = 'FloatingOriginiumDust';
