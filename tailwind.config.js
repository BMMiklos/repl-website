/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      press: "PressStart2P",
      sans: "OpenSans",
      raleway: "Raleway"
    },
    extend: {
      colors: {
        ...colors,
        white: "#ffffff",
        cyan: "#55ffff",
        gray: "#353b45",
        'dark-gray': "#282c34"
      },
    },
    dropShadow: {
      'repl-cyan': '4px 4px 0 #55ffff',
      'repl-gray': '4px 4px 0 #282c34',
    },
    keyframes: {
      increase: {
        '0%, 100%': { width: '75%' },
        '50%': { width: '100%' },
      },
      pulse : {
        '0%, 100%': { filter: 'opacity(100%)' },
        '50%': { filter: 'opacity(0%)' },
      }
    },
    animation: {
      increase: 'increase 60s ease-in-out infinite',
      pulse: 'pulse 1s cubic-bezier(0.2, -2, 0.8, 2) infinite',
    },
    plugins: [],
  }
}
