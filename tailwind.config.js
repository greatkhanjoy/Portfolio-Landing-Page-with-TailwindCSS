/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bluePrimary: "#8873F0",
        blueSecondary: "#B9F2FE",
        bgPrimary: "#FCDA69",
        grayish: "#7f7f82",
        grayishLight: "#f6f6f6",
      },
      fontSize: {
        headingOne: "4.5rem",
        headingTwo: "3rem",
        headingThree: "2.25rem",
        headingFour: "1.87rem",
        headingFive: "1.5rem",
      },
    },
  },
  plugins: [],
};
