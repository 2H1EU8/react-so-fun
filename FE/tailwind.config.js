/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111315',
        'main-bg': '#1A1D1F',
        'overlay-bg': 'rgba(39, 43, 48, 0.9)',
        'light-text': '#FCFCFC',
        'text-dark': '#6F767E',
        'success': '#83BF6E',
        'success-light': '#B5E4CA',
        'danger': '#FF6A55',
        'danger-light': '#FFBC99',
        'info': '#2A85FF',
        'info-light': '#B1E5FC',
        'warning-light': '#FFD88D',
        'border-dark': '#272B30',
      }
    },
  },
  plugins: [],
}

