/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
      colors: {
        first: "#6080bf",
        second: "#54828c",
        third: "#82d9d0",
        fourth: "#72f27a",
        fifth: "#abf2a0",
      },
    },
  },
  plugins: [],
};
