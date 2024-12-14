/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'text': '#d8f7ea',
      'background': '#020c08',
      'primary': '#8ee9be',
      'secondary': '#821a58',
      'accent': '#d87038',
      transperent:'transperent'
    },
    fontFamily: {
      cursive: ['cursive', 'sans-serif']
    }
  },
  plugins: [],
}