/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        manga: {
          paper: '#F5F0E8',
          ink: '#0A0A0A',
          blood: '#CC0000',
          crimson: '#FF1A1A',
          charcoal: '#111111',
          offwhite: '#E8E8E8',
        }
      },
      fontFamily: {
        bangers: ['Bangers', 'cursive'],
        boogaloo: ['Boogaloo', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
        kalam: ['Kalam', 'cursive'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'speed-lines': 'speedLines 0.3s ease-out',
        'slam': 'slam 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ink-splash': 'inkSplash 0.8s ease-out forwards',
        'page-curl': 'pageCurl 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        speedLines: {
          '0%': { opacity: '0', transform: 'scaleX(0)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scaleX(1)' },
        },
        slam: {
          '0%': { transform: 'scale(1.5) rotate(-5deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        inkSplash: {
          '0%': { clipPath: 'circle(0% at 50% 50%)' },
          '100%': { clipPath: 'circle(150% at 50% 50%)' },
        },
        pageCurl: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-15deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(204, 0, 0, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
