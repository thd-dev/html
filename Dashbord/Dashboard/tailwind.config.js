/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-glow': 'inset 0 30px 60px -20px rgba(80, 7, 36, 0.6)'
      }
    },
  },
  plugins: [],
}