const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBM Plex Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#54FCFC',
        pink: '#FC5252',
        black: colors.black,
        white: colors.white,
        grey: colors.grey,
      },
      boxShadow: {
        hard: '5px 5px 0 rgba(0, 0, 0)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
