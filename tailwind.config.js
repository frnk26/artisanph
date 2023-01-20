/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wht: '#fffaf5',
        blk: '#18130e',
        primary: "#e3c9b2",
        secondary: "#e3d3b2"
      },
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
    fontSize: {
      sm: ['0.8rem', '1rem'],
      base: ['1.6rem', '1.5rem'],
      md: ['2.4rem', '2rem'],
      xl: ['3.157rem', '2.4rem'],
      '2xl': ['4.209rem', '2.6rem'],
      '3xl': ['5.61rem', '2.6rem'],
    }

  },
  plugins: [],
}