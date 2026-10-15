import React, { useEffect, useRef } from 'react';

const PRTS_CODE_SNIPPETS = [
  'PRTS System v17.0 // Critical Phase Transition initialized',
  'Catastrophe warning level: OMINOUS // Originium resonance: 88.4%',
  'argument bound to SCORE: eval(f1_score, strat_5fold_cv)',
  'neural_sync_status: OK // Memory cache allocated: 3840MB',
  'RHODES ISLAND EMR // Specimen Operator: SYAHRUL_RAMADHON',
  'classifying student intelligence: [IQ, EQ, AQ, SQ] -> argmax',
  'AHP-SAW decision matrix weights calculated: rank(19_majors)',
  'Detecto engine proxy routing: AI_INFERENCE_DECOUPLED',
  'cipta.in tenant router: EdgeMiddleware -> purge_isr_tags()',
  'Playwright headless chromium rasterizing forensic report',
  'Cloudflare Workers AI: Llama 3.3 70B inference stream active',
  '>> ROOT_PRTS_EXECUTION: ACCESS GRANTED [CODE 200]',
  'Sanity monitor: 135/135 [FULL ENGAGEMENT PERMITTED]',
  'Decryption wave calibrated. Phase 17 locked and loaded.'
];

export const PrtsBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Code lines falling / drifting
    interface CodeStream {
      x: number;
      y: number;
      speed: number;
      text: string;
      opacity: number;
      fontSize: number;
    }

    const streams: CodeStream[] = [];
    const streamCount = Math.floor(width / 160);

    for (let i = 0; i < streamCount; i++) {
      streams.push({
        x: (i * (width / streamCount)) + Math.random() * 40,
        y: Math.random() * height,
        speed: 0.6 + Math.random() * 1.2,
        text: PRTS_CODE_SNIPPETS[Math.floor(Math.random() * PRTS_CODE_SNIPPETS.length)],
        opacity: 0.12 + Math.random() * 0.22,
        fontSize: 11 + Math.random() * 3
      });
    }

    // Originium floating embers / dust
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.3 - Math.random() * 0.5,
        size: 1 + Math.random() * 2.5,
        alpha: 0.2 + Math.random() * 0.6,
        color: Math.random() > 0.3 ? '#7CFF01' : '#00F0FF'
      });
    }

    let frame = 0;
    let lastTime = performance.now();
    const targetInterval = 1000 / 60; // 60 FPS cap

    // Check if user prefers reduced motion (saves 100% canvas CPU)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const drawGridAndBackground = (pOffsetX: number, pOffsetY: number) => {
      ctx.fillStyle = '#080A0C';
      ctx.fillRect(0, 0, width, height);

      // Draw faint tactical grid
      ctx.strokeStyle = 'rgba(124, 255, 1, 0.035)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + pOffsetX, 0);
        ctx.lineTo(x + pOffsetX, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + pOffsetY);
        ctx.lineTo(width, y + pOffsetY);
        ctx.stroke();
      }
    };

    if (prefersReducedMotion) {
      drawGridAndBackground(0, 0);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    const render = (currentTime: number) => {
      if (document.hidden) {
        animationFrameId = 0;
        return;
      }

      animationFrameId = requestAnimationFrame(render);

      const delta = currentTime - lastTime;
      if (delta < targetInterval) return;
      lastTime = currentTime - (delta % targetInterval);

      frame++;

      // Subtle parallax offset from mouse
      const pOffsetX = (mouseX - width / 2) * 0.02;
      const pOffsetY = (mouseY - height / 2) * 0.02;

      drawGridAndBackground(pOffsetX, pOffsetY);

      // Draw PRTS text code streams
      ctx.font = '11px "Share Tech Mono", monospace';
      streams.forEach(s => {
        s.y += s.speed;
        if (s.y > height + 20) {
          s.y = -20;
          s.text = PRTS_CODE_SNIPPETS[Math.floor(Math.random() * PRTS_CODE_SNIPPETS.length)];
        }

        const isGlitching = Math.random() < 0.015;
        const glitchX = isGlitching ? (Math.random() - 0.5) * 16 : 0;
        
        ctx.fillStyle = isGlitching ? '#FFFFFF' : `rgba(124, 255, 1, ${s.opacity})`;
        ctx.fillText(s.text, s.x + pOffsetX + glitchX, s.y + pOffsetY);

        if (frame % 30 < 15) {
          ctx.fillStyle = 'rgba(124, 255, 1, 0.4)';
          ctx.fillRect(s.x + pOffsetX + s.text.length * 6.5, s.y + pOffsetY - 9, 7, 11);
        }
      });

      // Draw floating Originium embers
      particles.forEach(p => {
        p.x += p.vx + pOffsetX * 0.1;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - p.size);
        ctx.lineTo(p.x + p.size, p.y);
        ctx.lineTo(p.x, p.y + p.size);
        ctx.lineTo(p.x - p.size, p.y);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // Occasional horizontal tactical scan beam
      const scanY = (frame * 1.5) % (height * 1.5);
      if (scanY < height) {
        const grad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
        grad.addColorStop(0, 'rgba(124, 255, 1, 0)');
        grad.addColorStop(0.5, 'rgba(124, 255, 1, 0.04)');
        grad.addColorStop(1, 'rgba(124, 255, 1, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, scanY - 30, width, 60);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
      } else {
        if (!animationFrameId) {
          lastTime = performance.now();
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(8,10,12,0.85)_100%)] pointer-events-none" />
    </div>
  );
};
