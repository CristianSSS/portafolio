/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sky: "#38bdf8",
      white:"#fff"
    },
    extend: {
      minHeight: {
        '600': '600px',
      }
    
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '850px',
        xl: '1000px',
        '2xl': '1200px',
      },
    },

  },
  plugins: [],
}