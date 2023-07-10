/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "linear-gradient(to right, rgba(0, 255, 43, 0.4), rgba(0, 217, 255, 0.6)), url(./bg.jpg)"
      },
    },
  },
  plugins: [],
}

