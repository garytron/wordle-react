/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-empty': '#939B9F4D',
      },
      borderColor: {
        'custom-empty': '#939B9F4D',
      }
    },
  },
  plugins: [],
}