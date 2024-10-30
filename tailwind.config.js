/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'football-preview': "url(./image/football-preview.png)",
        'image-match': "url(./image/image-match.png)",
        'div': "url(./image/Div.png)",
      },
    },
  },
  plugins: [],
};
