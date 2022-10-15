/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: { min: "640px" },
      // => @media (min-width: 640px

      md: { min: "768px" },
      // => @media (min-width: 768px

      lg: { min: "1024px" },
      // => @media (min-width: 1024px

      xl: { min: "1280px" },
      // => @media (min-width: 1280px
    },
    container: {
      center: true,
    },
    extend: {
      animation: {
        type: "type 2.7s ease-out .8s infinite alternate both",
      },
      keyframes: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
