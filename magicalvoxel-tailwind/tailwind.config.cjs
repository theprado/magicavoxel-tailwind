/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,css,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto, sans-serif",
        ],
      },
      colors: {
        'primary': '#143AC4',
        'secondary': '#30C0AA',
      },
      screens: {
        smd: '850px',
        
      },
  },
  plugins: [],
}

}