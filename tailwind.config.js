/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#7700C7",
        primarySurface: "#F4EDFF",
        blackColor: "#0E0D0E",
        errorColor: "#F80F0F",
        gray: {
          dropShadow: "#606060",
          textGray: "#989898",
          grayPrimary: "#CDCDCD",
          graySurface: "#F1F1F1",
          grayTable: "#F7F7F7",
        },
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(180deg, #A329CD -5%, #7700C7 100%)",
      },
      boxShadow: {
        "input-shadow": "0px 2px 6px 0px rgba(96, 96, 96, 0.10)",
        "dropdown-shadow": "0px 2px 10px 0px rgba(96, 96, 96, 0.14)",
      },
      fontFamily: {
        Lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
