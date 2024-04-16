/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBackground:
          "linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('./images/zoo.jpg')",
        popUpBackground:
          "linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
      },
      animation: {
        popUp: {
          "0%": { scale: 0 },
          "100%": { scale: 1 },
        },
      },
    },
  },
  plugins: [],
};
