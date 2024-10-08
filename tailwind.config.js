/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primaryLight: ['TWKEverett-Light', 'serif'],
        primaryRegular: ['TWKEverett-Regular', 'serif'],
        secondaryLight: ['SuisseIntl-Light', 'serif'],
        secondaryRegular: ['SuisseIntl-Regular', 'serif'],
        secondaryBold: ['SuisseIntl-Bold', 'serif'],
      }
    },
  },
  plugins: [],
}

