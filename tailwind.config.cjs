/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background-color': '#292738',
      'white': '#FFFFFF',
      'back': '#000000',
      'background-card-color': '#363447',
      'green': '#81FBB8',
      'gray-eilipse': '#D9D9D9',
      'purple': '#7367F0',
      'dark-purple': '#4A4556',
      'orange': '#DF9780',
    },
    extend: {
      boxShadow: {
        '3xl': '3px 4px 26px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'lg': '1120px'
      }
    },
  },
  plugins: [],
}
