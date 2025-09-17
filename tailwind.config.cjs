/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bg-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'bg-move': 'bg-move 2s linear infinite',
      },
      colors: {
        'primary': '#0d487c',
        'c-blue1': '#244c7d',
        'c-blue2': '#0d2959'
      },
      container: {
        center: true,
      },
      width: {
        '350': '350px',
        '700': '700px',
        '1200': '1200px',
        '1400': '1400px',
      },
      height: {
        '350': '350px',
        '380': '380px',
        '400': '400px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '800': '800px',
        '960': '960px',
      },
      padding: {
        '300': '300px'
      }
    },
  },
  plugins: [],
}
