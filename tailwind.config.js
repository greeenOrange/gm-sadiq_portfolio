/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,}",
    "./index.html"
],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black-100': 'rgba(0, 0, 0, 0.7)',
      'black-200': 'rgba(255, 255, 255, 0.4)',
      'black-300': '#222',
      'black-400': '#333',
      'black-900': '#212529',
      'black': '#000',
      'green-100': '#bac964',
      'green-200': '#b2c251',
      'blue-100': '#2c3e50',
      'text-red-500': 'rgb(239 68 68)',
    },
    extend: {},
  },
  plugins: [],
}

