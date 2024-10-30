/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'football-preview': "url(./image/football-preview.png)",
        'image-match': "url(./image/image-match.png)",
        'div': "url(./image/Div.png)",
        'image-one': "url(./image/image-1.png)",
        'image-two': "url(./image/image-2.png)",
        'image-three': "url(./image/image-3.png)",
        'image-four': "url(./image/image-4.png)",
      },
    },
  },
  plugins: [],
};
