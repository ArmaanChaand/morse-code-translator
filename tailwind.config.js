/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        'bright-orange': "#FF5F1F",
        'bright-blue': "#0096FF",
        'gray-dark': '#121212'
      },
      fontFamily: {
        'future': ['Orbitron', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
