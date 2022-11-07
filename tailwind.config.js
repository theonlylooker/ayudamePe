/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
      colors: {
        paleblue: "#6080BF",
        darkblue: "#54828C",
        bluegreen: "#82D9D0",
        green: "#72F27A",
        palegreen: "#ABF2A0",
      },
    },
  },
  plugins: [],
};
