
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{js,css}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
