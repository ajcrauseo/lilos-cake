/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#7C3C33',
      'secondary-a': '#FFD5D7',
      'secondary-b': '#FFEBEC',
      'light': '#FFF5F6',
      'dark': '#0D0D0D'
    },

    extend: {
      backgroundImage: {
        'marmoleado': "url('../public/bg.png')"
      },

      fontFamily: {
        lobsterTwo: ['var(--font-lobster-two)']
      }
    }
  },
  plugins: [],
};
