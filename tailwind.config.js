/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131417",
        secondary: "#1E1F26",
        primaryText: "#868CA0",
        text555: "#555",
      },
    },
  },
  plugins: [],
};
