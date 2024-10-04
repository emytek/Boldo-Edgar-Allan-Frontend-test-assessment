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
    },
    // spacing: {
    //   'sc': '4rem',
    //   'sg': '2.5rem',
    //   's': '2rem',
    //   's1': '1rem',
    //   'xs': '0.5rem',
    // },
  },
  plugins: [],
}

