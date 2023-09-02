/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./index.html","./page.html","./content.html","./login.html"],
  theme: {
    extend:{
      fontFamily: {
        'raleway':['raleway']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
