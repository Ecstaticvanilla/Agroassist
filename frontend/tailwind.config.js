module.exports = {

  darkMode: 'class', // use 'class' instead of 'media'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Add Outfit font to Tailwind config
        revalia: ['Revalia', 'sans-serif'],
        maiden: ['Maiden Orange', 'serif']
      },
    },
  },
  plugins: [],
};
