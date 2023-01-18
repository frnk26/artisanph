/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          white: 'var(--color-text-white)',
        }
      },
      backgroundColor: {
        skin: {
          primary: 'var(--color-primary)',
          secondary: 'var (--color-secondary)',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        nunito: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}