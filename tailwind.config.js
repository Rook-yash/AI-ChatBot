/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    fontFamily:{
      sans : ['kanit' , 'sans-serif']
    },
    extend: {
      animation: {
      typewriter: "typewriter 2s steps(11) forwards"
      },
      keyframes: {
        typewriter: {
        to: {
          left: "100%"
        }
      }
    }},
  },
  plugins: [],
}

