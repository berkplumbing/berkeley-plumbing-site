/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f172a',
          800: '#1a2744',
          700: '#243461',
        },
        copper: {
          DEFAULT: '#b87333',
          light: '#d4994a',
          dark: '#8a5520',
        },
        stone: {
          warm: '#f8f6f2',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
