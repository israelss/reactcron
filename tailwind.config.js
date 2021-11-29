module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'tilt': ['Tilt-Neon', 'sans-serif']
      },
      boxShadow: {
        'neon-sm': '0 0 1px white, 0 0 5px currentColor, 0 0 9px currentColor, inset 0 0 5px currentColor',
      },
      backgroundImage: {
        'brick-pattern': "url('./src/assets/brickPattern.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
