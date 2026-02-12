/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a0a',
        'brand-gold': '#ffd700',
        'brand-red': '#e63946',
        'brand-gray': '#1f2937',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
        logo: ['Archivo Black', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
