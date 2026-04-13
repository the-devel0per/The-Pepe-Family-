/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pepe: {
          green: '#4CAF50',
          dark: '#0d1a0d',
          lime: '#76ff03',
          yellow: '#FFE600',
          pink: '#FF69B4',
          blue: '#00BFFF',
          orange: '#FF6B35',
          purple: '#BF00FF',
        }
      },
      fontFamily: {
        meme: ['"Bangers"', 'cursive'],
        body: ['"Comic Neue"', 'cursive'],
      },
    },
  },
  plugins: [],
}
