/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '13':'3.25rem'
      }
    },
    fontFamily: {
      'Montserrat':['Montserrat'],
      'Poppins':['Poppins']
    }
  },
  plugins: [],
}

