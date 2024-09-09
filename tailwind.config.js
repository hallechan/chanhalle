/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['DMSans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'background': '#EEEEEE',
        'background-header': '#E9E9E9',
        'coal': '#141414',
        'light-coal': '#202020',
        'dark-pink': '#DCA3B1',
        'platinum': '#F8F8F8',
        'grey': '#888888'
      },
      lineHeight: {
        'extra-tight': '0.95',
      }
    },
    letterSpacing: {
      tighter: '-.03em',
      evenTighter: '-.050em',
      tightest: '-.075em',
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

