/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        moveDot: 'moveDot 6s linear infinite',
        floating: 'floating 2.6s infinite linear',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        moveDot: {
          '0%, 100%': { top: '10%', right: '10%' },
          '25%': { top: '10%', right: 'calc(100% - 35px)' },
          '50%': { top: 'calc(100% - 30px)', right: 'calc(100% - 35px)' },
          '75%': { top: 'calc(100% - 30px)', right: '10%' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
}
