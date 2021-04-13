const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors
    },
    fontFamily: {
      sans: ['"Nunito"', 'sans-serif']
    },
    extend: {
      scale: ['group-hover']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
