const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cyan: "#54FCFC",
        pink: "#FC5252",
        black: colors.black,
        white: colors.white,
        grey: colors.grey,
      },
      boxShadow: {
        hard: '5px 5px 0 rgba(0, 0, 0)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
