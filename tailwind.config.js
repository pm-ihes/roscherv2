/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    screens: {
      '-xs': {'max': '350px'},
      'xs': '351px',
      '-sm': {'max': '700px'},
      'sm': '701px',
      '-md': {'max': '1000px'},
      'md': '1001px',
      '-lg': {'max': '1500px'},
      'lg': '1501px',

      'tablet': {'min': '701px', 'max': '1000px'},

      'nav_sm': {'max': '800px'},
      'nav_md': {'min': '801px', 'max': '1100px'},
    },
  },
  plugins: [require('tailwind-hamburgers')],
  important: true,
}

