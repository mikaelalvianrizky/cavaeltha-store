/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2D336B',
        'mid-blue': '#7886C7',
        'light-blue': '#A9B5DF',
        'off-white': '#FFF2F2',
      },
      // Add this section to set the default font
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}