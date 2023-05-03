/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // heading: {"font-size": "3.2em", "line-height": "1.1"},
      colors: {
        _bg: "#0f172a",
        _primary: {
          100: "#dd9a41",
          500: "#ce722d",
        },
        _error: {
          100: "#fdd8d8",
          500: "#cd2b31",
          600: "#b8252a"
        },
        _secondary: "#aaaaaa",
      },
    },
  },
  plugins: [],
};
