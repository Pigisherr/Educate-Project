/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0606c7",
        green: "#98FF98",
      },
    },
  },
  plugins: [],
};
