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

          "--rounded-box": "0rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "0rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0s", // duration of animation when you click on button
          "--animation-input": "0s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0", // scale transform of button when you focus on it
          "--border-btn": "0px", // border width of buttons
          "--tab-border": "0px", // border width of tabs
          "--tab-radius": "0rem", // border radius of tabs
        },  
      }
    ],
  },
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
    },
  },
  plugins: [require('daisyui')],
}

