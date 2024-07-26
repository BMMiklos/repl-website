/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      press: "PressStart2P",
      sans: "OpenSans"
    },
    extend: {
      colors: {
        ...colors,
        cyan: "#00ffff",
        gray: "#282c34"
      },
    },
    dropShadow: {
      'repl-cyan': '4px 4px 0 #00ffff',
      'repl-gray': '4px 4px 0 #282c34',
    }
  },
  plugins: [],
}
