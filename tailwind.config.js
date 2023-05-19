/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui:{
      themes:[
      {
        hiretoolTheme:{
          primary: "#26bbac",
          neutral: "#00e5bd",       
          "base-100": "#FFFFFF",
        },  
      }
    ],
  },
  theme: {
    extend: {
    },
  },
  plugins: [require('daisyui')],
}

