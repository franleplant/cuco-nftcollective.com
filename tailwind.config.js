module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cuco: {
          blue: {
            500: "#1c3252",
            700: "#08152d",
          }
        }
      }
    },
  },
  plugins: [],
}
