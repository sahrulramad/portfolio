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
        tactical: ['Rajdhani', 'Orbitron', 'sans-serif'],
        terminal: ['Share Tech Mono', 'JetBrains Mono', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar': 'radar 2s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 12px rgba(124,255,1,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 24px rgba(124,255,1,0.85))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radar: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
