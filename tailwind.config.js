/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {

      colors: {
        'B1': '#00f7ff',
        'P1': '#ff50ee',
        
      },
      fontFamily: {
       custom: ['Lovelo'],
      },
    },
    
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
