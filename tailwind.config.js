const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{tsx,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '425px',
      sm: defaultTheme.screens.sm,
      md: defaultTheme.screens.md,
      '2md': '900px',
      lg: defaultTheme.screens.lg,
      xl: defaultTheme.screens.xl,
      '2xl': defaultTheme.screens['2xl']
    },
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
  plugins: [require('@tailwindcss/typography')]
};
