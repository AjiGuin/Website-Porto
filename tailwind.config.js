/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0E',
        charcoal: '#1A1A1C',
        graphite: '#2A2A2D',
        steel: '#5C5F66',
        mist: '#9A9DA4',
        haze: '#D7D9DC',
        silver: '#C7CBD1',
        'silver-light': '#E9EAEC',
        paper: '#FAFAF8',
        'paper-dim': '#F1F1EF',
        line: 'rgba(13,13,14,0.08)',
        'line-strong': 'rgba(13,13,14,0.14)',
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(13,13,14,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(13,13,14,0.05) 1px, transparent 1px)',
        'blueprint-fine':
          'linear-gradient(rgba(13,13,14,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(13,13,14,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
        'grid-fine': '16px 16px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        dash: 'dash 1.6s ease-out forwards',
        blink: 'blink 1s step-end infinite',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
