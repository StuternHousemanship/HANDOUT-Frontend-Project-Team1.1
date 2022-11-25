/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Raleway: ["Raleway"],
      },
      spacing: {
        mobileWidth: "26.75rem",
        mobileHeight: "57.875rem",
        subWidth: "20.563rem",
        biggerScreenWidth: "56.25rem",
        largeScreenWidth: "38rem",
        largeScreenHeight: "27.375rem",
      },
      colors: {
        buttonColor: "#424242",
      },
      boxShadow: {
        "3xl": "0px 2px 2px rgba(0, 0, 0, 0.05)",
        "6xl": "0.5px 2px 3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
