module.exports = {
  purge: ['./{pages, src}/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#09152d"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
