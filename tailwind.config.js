/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#0A2640', 
      secondary: '#69E6A6',
      neutral: '#FFFFFF',
      gray: '#808080',
      lightGray: '#C4C4C4',
      lightBlue: '#4A6885',
    },
  },
  plugins: [],
}

