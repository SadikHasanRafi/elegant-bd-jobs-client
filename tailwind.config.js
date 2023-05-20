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
          primary: "#20C997",
          neutral: "#00AE88",       
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

