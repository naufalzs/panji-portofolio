/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      lora: ["Lora", "serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FF69B4",
        secondary: "#69D2E7",
        neutral: {
          80: "#58585B",
          100: "#010101",
        },
        purple: "#C4A1FF",
        red: "#EF462F",
        orange: "#FAB338",
        gradient: {
          1: "#FFBDC470",
          2: "#FFDB58",
          3: "#C4A1FF70",
        },
        slate: {
          400: "#99B0B5",
        },
      },
      boxShadow: {
        btn: "4px 4px 0px 0px rgba(0, 0, 0, 0.65), 4px 4px 0px 0px rgba(0, 0, 0, 0.65)",
        mini: "2px 2px 0px 0px rgba(0, 0, 0, 0.65), 2px 2px 0px 0px rgba(0, 0, 0, 0.65)",
        card: "8px 8px 0px 0px rgba(0, 0, 0, 0.65), 8px 8px 0px 0px rgba(0, 0, 0, 0.65)",
      },
    },
  },
  plugins: [],
};
