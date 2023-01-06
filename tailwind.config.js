/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: {
          100: 'hsla(206, 97%, 69%, 1)',
          200: 'hsla(219, 100%, 50%, 1)',
          300: 'hsla(232, 77%, 22%, 1)',
          400: 'hsla(240, 100%, 13%, 1)',
        },
        secondary: {
          100: 'hsla(49, 96%, 71%, 1)',
          200: 'hsla(45, 99%, 60%, 1)',
          300: 'hsla(45, 100%, 51%, 1)',
          500: 'hsla(42, 91%, 52%, 1)',
          400: 'hsla(42, 100%, 47%, 1)',
        },
        neutral: {
          100: 'hsla(0, 0%, 100%, 1)',
          150: 'hsla(0, 0%, 100%, 0.5)',
          180: 'hsla(0, 0%, 100%, 0.8)',
          200: 'hsla(210, 12%, 93%, 1)',
          210: 'hsla(210, 12%, 93%, 0.1)',
          250: 'hsla(210, 12%, 93%, 0.5)',
          300: 'hsla(223, 26%, 16%, 1)',
          350: 'hsla(223, 26%, 16%, 0.5)',
          380: 'hsla(223, 26%, 16%, 0.8)',
          400: 'hsla(0, 0%, 13%, 1)',
        },
      },
    },
  },
  plugins: [],
}
