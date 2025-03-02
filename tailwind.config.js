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
        'primary': '#000000',
        'secondary': '#FFFFFF',
        'accent': '#FB6B23',
        'gray-light': '#EEEDED',
        'gray-dark': '#333333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
