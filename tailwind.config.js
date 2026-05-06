/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
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
