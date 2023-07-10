/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-dark-blue": "hsl(238, 29%, 16%)",
        "tw-red": "hsl(14, 88%, 65%)",
        "tw-violet": "hsl(273, 75%, 66%)",
        "tw-blue": "hsl(240, 73%, 65%)",
        "tw-dark-gray": "hsl(237, 12%, 33%)",
        "tw-medium-gray": "hsl(240, 6%, 50%)",
        "tw-light-gray": "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        primary: ["'Kumbh Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
