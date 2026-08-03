import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6D28D9',
          50: '#FAF5FF',
          100: '#F3E9FE',
          200: '#E7D6FC',
          300: '#D0B3F8',
          400: '#A97CF0',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#581C9E',
          900: '#43167A',
        },
        accent: {
          DEFAULT: '#047857',
          600: '#065F46',
          500: '#10B981',
          soft: '#D1FAE5',
        },
        spark: { DEFAULT: '#F59E0B', soft: '#FEF3C7' },
        ink: '#0F172A',
        body: '#334155',
        muted: '#64748B',
        line: '#EAE4F7',
        surface: '#FFFFFF',
        canvas: '#FBF9FF',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { xl: '0.9rem', '2xl': '1.25rem', '3xl': '1.75rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(109,40,217,0.06)',
        lift: '0 10px 30px rgba(109,40,217,0.12)',
        glow: '0 0 0 1px rgba(124,58,237,0.14), 0 18px 40px rgba(124,58,237,0.16)',
      },
      maxWidth: { content: '1200px' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 28s linear infinite' },
    },
  },
  plugins: [],
};
export default config;
