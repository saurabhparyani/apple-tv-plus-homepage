/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#000",
      backgroundContrast: "#111",
      textBlack: "#1d1d1f",
      white: "#fff",
      textWhiteNav: "#A5A5A5"
    }, 
    extend: {
      fontSize: {
        // 12, 14, 17, 19,21,24, 32,40,48 64. 80, 
      },
      fontFamily: {
        'sf-pro': ['SF Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

