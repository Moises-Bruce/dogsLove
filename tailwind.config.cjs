/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        green: {
          700: '#556F4D',
          800: '#506849',
          900: '#546E4D'
        },
        yellow: {
          400: '#F6C63B',
        },
        gray: {
          400: '#707070'
        }
      }
    },
    fontFamily: {
      sans: [
        'Montserrat',
        'sans-serif'
      ]
    }
  },
  plugins: [],
}
