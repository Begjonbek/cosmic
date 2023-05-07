/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'monserrat':['Montserrat', 'sans-serif'],
        'dm':['DM Serif Display', 'sans-serif'],
        'urbanist':['Urbanist', 'sans-serif'],
      },
      maxWidth: {
        xxl:"1480px", 
      }
      
  },
  plugins: [],
}
}
