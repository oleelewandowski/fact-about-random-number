/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('assets/background.svg')",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "20%": { opacity: 0.1 },
          "40%": { opacity: 0.3 },
          "60%": { opacity: 0.5 },
          "80%": { opacity: 0.9 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade 0.5s linear",
      },
    },
  },
  plugins: [],
};
