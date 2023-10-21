/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body1': [ 'Lato', 'sans-serif' ]
      },
      colors:{
        "azul-claro": "#9BD8DB",
      }
    },
  },
  plugins: [],
}

