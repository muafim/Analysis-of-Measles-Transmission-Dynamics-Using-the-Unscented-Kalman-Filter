/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        health: "#176b67",
        forest: "#123e3b",
        coral: "#db7759",
        paper: "#f5f8f6",
      },
    },
  },
  plugins: [],
};
