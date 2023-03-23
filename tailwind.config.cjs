/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*/**.{js,jsx,ts,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
