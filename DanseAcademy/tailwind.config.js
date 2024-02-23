/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ["Roboto","sans-serif"],
      },
      colors:{
        yellow:{
          'dark':'#FEBC04',
          'light':'#FFCD38',
        },
        gray:{
          'dark':'#151515',
          'light':'#8A898C',
        },
        cyan:{
          'light':'#11CFE7',
          'dark':'#0FAEC3',
        },
        'orange':'#FE6E05',
      },
    },
  },
  plugins: [],
  safelist: ['bg-midnight-dark']
}

