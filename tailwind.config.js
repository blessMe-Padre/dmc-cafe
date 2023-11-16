/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#6EC2A7',
      'dark-green': '#369C7C',
      'pink': '#FAA6AE',
      'dark-pink':' #F74A69',
      'main-black': '#303030',
      'bg': '#fff4f5',
    },

    container: {
      padding: '20px',
      center: true
    },
    fontFamily: {
      'Montserrat': ['Montserrat-regular', 'regular'],
      'Jost': ['Jost-bold', 'bold'],
    }
  },
  plugins: [],
}

