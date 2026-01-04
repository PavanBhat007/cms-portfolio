/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: 'var(--color-neon)', 
        main: 'var(--bg-main)', 
      },
    },
  },
  plugins: [],
};
