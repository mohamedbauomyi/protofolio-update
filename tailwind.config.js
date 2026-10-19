/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F0422', // Deep velvet violet/black
        primary: '#6D28D9', // Deep Purple
        secondary: '#0EA5E9', // Cyan/Blue
        accent: '#D946EF', // Magenta/Neon
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, #0F0422, #1a0b2e, #2e1065)',
      },
       fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
