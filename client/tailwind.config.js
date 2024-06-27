/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/*.js}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // // => @media (min-width: 1280px) { ... }

      "2xl": "1500px",
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
