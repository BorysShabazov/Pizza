/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "128px",
        },
        margin: false,
      },
      colors: {
        blue: "#3470FF",
        white: "#FFF",
        gray: "#C1C1C1",
        lightgray: "#DADADA",
        black: "#494949",
      },
    },
  },
  plugins: [],
};
