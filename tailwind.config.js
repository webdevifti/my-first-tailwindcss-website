/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./index.html","./login.html","./contact.html","./chat.html"],
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

