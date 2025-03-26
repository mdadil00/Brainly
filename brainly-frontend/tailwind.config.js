/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200:"#8c8e95",
          100:"#dddddd",
          600:"#565960"
        },
        purple: {
          600: "#4e45e1",
          200: "#e0e7ff",
          500: "#5d56c7"
        }
      }
    },
  },
  plugins: [],
}