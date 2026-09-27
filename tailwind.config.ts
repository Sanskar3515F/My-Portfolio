import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}', './hooks/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './utils/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        soft: 'var(--soft)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        highlight: 'var(--highlight)',
        success: 'var(--success)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)'
      },
      boxShadow: {
        premium: '0 24px 80px -28px rgba(15, 23, 42, 0.16)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.08), 0 24px 70px -26px rgba(37, 99, 235, 0.22)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' }
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(14px, -10px, 0) rotate(10deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' }
        },
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
