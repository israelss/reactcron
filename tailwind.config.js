module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-one': '#41D1FF',
        'color-two': '#BD34FE',
        'color-three': '#FFEA83',
        'color-four': '#FFDD35',
        'color-five': '#FFA800',
      },
      fontFamily: {
        'tilt': ['Tilt-Neon', 'sans-serif']
      },
      boxShadow: {
        'neon-sm': '0 0 1px white, 0 0 5px currentColor, 0 0 9px currentColor',
        'neon': '0 0 1px white, 0 0 7px currentColor, 0 0 21px currentColor, 0 0 82px currentColor, 0 0 102px currentColor',
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
