module.exports = {
  purge: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // CUSTOM COLORS
        secondary: {
          1: "#FDBF3E",
        },
        primary: {
          1: "#262a65",
          2: "#05007C",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
       handwriting: ["Ms Madi"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
