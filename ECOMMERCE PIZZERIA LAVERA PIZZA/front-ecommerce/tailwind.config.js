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
      backgroundImage: {
        'bg-section1': "url('/src/assets/images/pizzeria_75.jpg')",
        'bg-DarckRock':"/src/assets/images/pizzeria_31.jpg",
        'bg-LigthRock':"/src/assets/images/pizzeria_76.jpg",
        'bg-PizzaBasil':"/src/assets/images/pizzeria_77.jpg",
      },
      fontFamily: {
        customFont: ['"Your Font Name"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}