/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroimage': "url('../public/outerspace.png')",
      },
      spacing: {
        '90vh': '90vh',
        '70vh': '70vh',
      },
    },
  },
  plugins: [],
}
