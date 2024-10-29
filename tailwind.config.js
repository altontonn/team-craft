/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'football-preview': "url(./image/football-preview.png)",
      },
    },
  },
  plugins: [],
};
