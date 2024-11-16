/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'sourceSans' : 'Source Sans Pro, sans-serif'
      },
      colors: {
        deepBlue : '#0E2442',
        tomato: '#ff6347',
        purple: '#7952B3',
      },
      screens: {
        'max-xl' : { 'max': '1050px' },
        'max-lg' : { 'max': '1100px' },
        'max-md' : { 'max': '860px' },
        'max-sm' : { 'max': '550px' },
      }
    },
  },
  plugins: [],
}

