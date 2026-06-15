import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080D19',
        midnight: '#0B1020',
        panel: '#101827',
        cyanGlow: '#6EE7F9',
        violetGlow: '#A78BFA',
      },
      boxShadow: {
        glow: '0 0 34px rgba(124, 58, 237, 0.28)',
        cyan: '0 0 28px rgba(34, 211, 238, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 35% 20%, rgba(124,58,237,.28), transparent 34%), radial-gradient(circle at 78% 12%, rgba(34,211,238,.16), transparent 26%), linear-gradient(180deg, #080D19 0%, #0B1020 44%, #070A12 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.75' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseLine: 'pulseLine 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
