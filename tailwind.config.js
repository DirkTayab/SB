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
      },
      backgroundImage: {
        bgReward:
          "linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.6)),url('../img/xl-hero-desktop_2021')",
      },
    },
  },
  plugins: [],
};
