/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-background': "url('/Photon-8.3s-3000px.svg')",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
