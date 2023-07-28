/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        jakarta: "Plus Jakarta Sans",
      },
    },
  },
  plugins: [],
};
