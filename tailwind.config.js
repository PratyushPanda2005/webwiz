/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customDropdown: '#2D2D2D'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        sixtyFour: ['Sixtyfour', 'sans-serif'],
        pacifico: ['Pacifico', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

