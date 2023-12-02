/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
        bgColor: "#0A192F",
        offWhite: "#F3F6F6",
        darkText: "#E2E1F1",
        darkGrey: "#1D1D1D",
        lightGrey: "#A6A6A6"
      },
    },
  },
  plugins: [],
};
