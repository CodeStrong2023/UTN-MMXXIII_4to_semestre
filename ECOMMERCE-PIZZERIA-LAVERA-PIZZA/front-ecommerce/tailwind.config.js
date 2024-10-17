/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flu-Primary-Orange': '#F87223',
        'flu-Primary-Yellow': '#E0AF4A',  
        'flu-Primary-Blue': '#283341',
        'flu-Primary-Grey': '#737373',   
        'flu-Seconday-Blue': '#202634',
      },
      fontFamily: {
        customFont: ['"Your Font Name"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}