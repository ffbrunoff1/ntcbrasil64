/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5DADE2',
        secondary: '#FFFFFF',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #5DADE2, #FFFFFF)',
      },
    },
  },
  plugins: [],
};
