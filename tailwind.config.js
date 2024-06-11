/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        nerd: ['Rajdhani'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ],
}
