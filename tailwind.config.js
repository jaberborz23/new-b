/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
   maxWidth :{
    "container" : "1400px"
   },
   backgroundColor:{
    'bl': "#0872b9"
   },
   colors : {
    "bl" : "rgb(8, 114, 185)",
    'wh' : "rgb(231, 231, 231)",
    "sk" : "#0872b9",
    "lb"  : "rgb(85, 85, 85)",
    "sc" : "rgb(53, 53, 53)",
    "sb"  : " rgb(91, 197, 244)",
    "nt" : "rgb(91, 197, 244)",
    "ft" : "rgb(241, 241, 241)"

  
   },
   fontFamily : {
     "op"  : [ 'Open Sans',"sans-serif"],       
     "os"  : [ 'Oswald',"sans-serif"],       
     "pt"  : [  'PT Sans',"sans-serif"],
            
   
   }



    },
    screens: {
      'xxs' : "240px",
      'xs' : "400px",
      'sm' : "640px",
      'md' : "768px",
      'lg' : "1024px",
      'xl' : "1280px",
      '2xl' : "1536px",
      
    },
  },
  plugins: [],
}

