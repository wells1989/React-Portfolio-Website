/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        gold: "#FFD700",
        platinum: "#5b5b5a",
        // e.g. not can use className="text-gold" 
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundImage: {
        "hero-pattern": "url('https://github.com/wells1989/React-Portfolio-Website/blob/main/src/assets/herobg.png?raw=true')",
        "gold-pattern": "url('https://github.com/wells1989/React-Portfolio-Website/blob/main/src/assets/tech/golden-background.jpg?raw=true')"
        // e.g. now can use className="bg-gold-pattern" 
      },
    },
  },
  plugins: [],
};
