/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        _bg: "#0f172a",
        _primary: {
          100: "#dd9a41",
          500: "#ce722d",
          700: "#aa581a",
        },
        _error: {
          100: "#fdd8d8",
          500: "#cd2b31",
          600: "#b8252a"
        },
        _secondary: {
          100:"#3b3b3b",
          500:"#121212"
        },
      },
    },
  },
  plugins: [],
};
