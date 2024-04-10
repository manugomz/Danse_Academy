/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        textSlide:'reveal 7s infinite',
      },
      keyframes:{
        slideIn: {
          '0%': { 'margin-left':'-800px' },
          '20%' :{ 'margin-left':'-800px' },
          '35%' :{ 'margin-left':'0px' },
          '100%': { 'margin-left':'0px' }
        }
      },
      boxShadow:{
        'img-fade': '0px -69px 106px 19px rgba(0,0,0,0.75)',
      },
      fontFamily:{
        'Permanent-Marker': ["Permanent Marker","sans-serif"],
      },
      colors:{
        cyan:{
          'light':'#11CFE7',
          'dark':'#0FAEC3',
        },
        green:'#bcf52f',
        gray:{
          'dark':'#151515',
          'light':'#8A898C',
        },
        'orange':'#FE6E05',
        yellow:{
          'dark':'#FEBC04',
          'darker':'#CB9603',
          'light':'#FFCD38',
        },
      },
    },
  },
  plugins: [],
  safelist: ['bg-midnight-dark']
}

