/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: {
          light: "#faf8f8",
          navbar: "#1f2937",
        },
      },
    },
  },
  plugins: [],
};
