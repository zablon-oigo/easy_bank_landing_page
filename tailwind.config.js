/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'image-intro':"url('./assets/images/bg-intro-desktop.svg')"
      }
    },
  },
  plugins: [],
}

