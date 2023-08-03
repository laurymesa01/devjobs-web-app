/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors:{
        'violet': '#5964E0',
        'ligth-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        'midnight': '#121721',
        'white':' #ffffff',
        'light-grey': '#F4F6F8',
        'grey': '#9DAEC2',
        'dark-grey': '#6E8098'
      }
    },
  },
  plugins: [],
}

