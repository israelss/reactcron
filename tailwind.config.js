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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
