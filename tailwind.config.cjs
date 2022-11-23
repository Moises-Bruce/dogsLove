/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        green: {
          800: '#506849',
          900: '#546E4D'
        },
        yellow: {
          400: '#F6C63B',
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
