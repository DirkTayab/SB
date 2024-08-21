/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        primary: "#1e3932",
        secondary: "#00754a",
        tertiary: "#d4e9e2",
        gold: "#cba258",
        greenlight: "#f1f8f5",
        gray: "#f2f0eb",
        grayulet: "#f9f9f9",
      },
      backgroundImage: {
        bgReward: "url('../img/bgmobile.webp')",
      },
    },
  },
  plugins: [],
};
