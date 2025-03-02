/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'thinnan-orange': '#FB6B23',
        'thinnan-black': '#000000',
        'thinnan-gray': '#EEEDED',
        'thinnan-dark-gray': '#333333',
        'radial-gray': '#EEEEEE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
