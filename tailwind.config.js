/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "300px",
            sm: "429px",
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
        },
    },
    plugins: [],
};