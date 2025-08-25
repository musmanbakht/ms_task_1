/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      colors: {
        blueGray: {
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
        },
        lightBlue: {
          500: "#0EA5E9",
          600: "#0284C7",
        },
      },
    },
    fontFamily: {
      // Override the default font family
      sans: ["Arial", "sans-serif"],
    },
  },
  plugins: [],
};
