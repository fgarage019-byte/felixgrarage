/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'allvento-dark': '#080808',
        'allvento-black': '#000000',
        'allvento-white': '#FFFFFF',
        'allvento-purple': '#5636d1',
        'allvento-pink': '#e2498a',
        'felix-dark': '#0F0F0F',
        'felix-black': '#1a1a1a',
        'felix-white': '#FFFFFF',
        'felix-purple': '#5636d1',
        'felix-pink': '#e2498a',
        'felix-orange': '#FFA500',
        'felix-orange-dark': '#FF8C00',
      },
      fontFamily: {
        'play': ['Play', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-allvento': 'linear-gradient(180deg, #00000000 12%, #080808 82%)',
      },
    },
  },
  plugins: [],
}
