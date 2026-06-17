import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1724',
        midnight: '#121C2B',
        panel: '#151F30',
        cyanGlow: '#C9A4F5',
        violetGlow: '#A160EB',
        cyan: {
          100: '#EDE4FB',
          200: '#C9A4F5',
          300: '#A160EB',
          400: '#8848D7',
          500: '#7C3AED',
        },
        violet: {
          100: '#EDE4FB',
          200: '#C9A4F5',
          300: '#B98DF0',
          400: '#A160EB',
          500: '#9333DA',
          600: '#8848D7',
        },
      },
      boxShadow: {
        glow: '0 0 34px rgba(161, 96, 235, 0.30)',
        cyan: '0 0 28px rgba(161, 96, 235, 0.20)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 50% 6%, rgba(161,96,235,.30), transparent 40%), radial-gradient(circle at 84% 30%, rgba(136,72,215,.14), transparent 30%), radial-gradient(circle at 16% 32%, rgba(124,58,237,.13), transparent 30%), linear-gradient(180deg, #0F1724 0%, #121C2B 44%, #0B1320 100%)',
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
