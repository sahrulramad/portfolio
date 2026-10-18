/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prts: {
          bg: '#080A0C',
          slate: '#0F1418',
          card: 'rgba(18, 24, 28, 0.78)',
          cardSolid: '#12181C',
          green: '#7CFF01',
          greenNeon: '#4ADE80',
          yellow: '#D9F99D',
          amber: '#EAB308',
          cyan: '#00F0FF',
          magenta: '#FF0055',
          white: '#F1F5F9',
          muted: '#94A3B8',
          border: 'rgba(124, 255, 1, 0.28)',
          borderSubtle: 'rgba(148, 163, 184, 0.15)',
        }
      },
      fontFamily: {
        serifArknights: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        condensed: ['"Barlow Condensed"', 'Outfit', 'sans-serif'],
        monoTechnical: ['"JetBrains Mono"', 'monospace'],
        tactical: ['Cinzel', '"Cormorant Garamond"', 'serif'],
        terminal: ['"JetBrains Mono"', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'signal-1': 'signalPulse 2.0s ease-in-out infinite alternate',
        'signal-2': 'signalPulse 1.6s ease-in-out infinite alternate 0.2s',
        'signal-3': 'signalPulse 2.8s ease-in-out infinite alternate 0.5s',
        'signal-4': 'signalPulse 1.9s ease-in-out infinite alternate 0.1s',
        'signal-5': 'signalPulse 2.5s ease-in-out infinite alternate 0.4s',
        'signal-6': 'signalPulse 2.1s ease-in-out infinite alternate 0.7s',
        'wave-pulse': 'wavePulse 3s ease-in-out infinite alternate',
        'dust-float': 'dustFloat 12s linear infinite',
        'camera-zoom': 'cameraZoom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'stagger-in': 'staggerFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        signalPulse: {
          '0%': { transform: 'scaleY(0.35)', opacity: '0.45' },
          '50%': { transform: 'scaleY(1.05)', opacity: '1' },
          '100%': { transform: 'scaleY(0.55)', opacity: '0.7' },
        },
        wavePulse: {
          '0%': { opacity: '0.25', transform: 'scaleX(0.96)' },
          '50%': { opacity: '0.55', transform: 'scaleX(1.02)' },
          '100%': { opacity: '0.3', transform: 'scaleX(0.98)' },
        },
        dustFloat: {
          '0%': { transform: 'translateY(100vh) scale(0.6)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '80%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0' },
        },
        cameraZoom: {
          '0%': { transform: 'scale(1.05)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        staggerFade: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
