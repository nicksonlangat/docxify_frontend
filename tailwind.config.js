/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        over: "'Overpass', sans-serif",
        dyna: "'DynaPuff', cursive",
        kalam: '"Kalam"',
        philo: '"Philosopher"'
      },
      backgroundImage: {
        // home: "url('./assets/cinema.png')",
      },
    },
  },
  plugins: [],
}

