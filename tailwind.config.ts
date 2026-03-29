import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2B4B',
          light: '#243558',
        },
        gold: {
          DEFAULT: '#B8962E',
          light: '#C9A84C',
          pale: '#F5EDD5',
          bg: '#FDFAF3',
        },
        gray: {
          100: '#F2F0EB',
          200: '#E5E2DA',
          400: '#A8A49A',
          600: '#6B6860',
        },
        'off-white': '#F9F8F5',
      },
      fontFamily: {
        serif: ['"Frank Ruhl Libre"', 'serif'],
        sans: ['Heebo', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(48px, 6vw, 80px)',
        'section': 'clamp(28px, 3.5vw, 44px)',
      },
    },
  },
  plugins: [],
};

export default config;
