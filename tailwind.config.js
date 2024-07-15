/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        squadaOne: ['SquadaOne', 'sans-serif']
      },
      colors: {
        'background': '#F1F1F1',
        'coal': '#181818',
        'light-coal': '#1E1E1E',
        'pink': '#E9CAD4',
        'dark-pink': '#D894AB',
        'platinum': '#D9D9D9'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

