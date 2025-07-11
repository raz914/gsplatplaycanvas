/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agipo: ['Agipo', 'sans-serif'],
      },
      colors: {
        "gradient-title": "linear-gradient(360deg, #9C79FC 0%, #FE7887 62%)",
      },
    },
  },
  plugins: [],
}

