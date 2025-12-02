/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007AFF', // Apple Blue-ish
          dark: '#0056B3',
          light: '#4DA3FF',
        },
        secondary: {
          DEFAULT: '#000000', // Black
          light: '#1C1C1E', // Dark Gray
        },
        background: {
          DEFAULT: '#F5F5F7', // Off-white
          paper: '#FFFFFF',
        },
        text: {
          primary: '#1D1D1F',
          secondary: '#86868B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
