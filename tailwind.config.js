/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'm-black': '#111315',
        'm-dark': '#1A1D1F',
        'm-blue': '#2A85FF',
        'm-green': '#83BF6E',
        'm-red': '#FF6A55',
        'm-purple': '#FF6A55',
        's-red': '#FFBC99',
        's-purple': '#CABDFF',
        's-blue': '#B1E5FC',
        's-green': '#B5E4CA',
        's-yellow': '#FFD88D',
        's-text-dark': '#6F767E',
        'border-dark': '#272B30'
      }
    },
  },
  plugins: [],
}

