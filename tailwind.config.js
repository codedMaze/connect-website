/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "n-gray": "#737373",
        black: "#373737",
        pcolor: "rgba(24, 25, 31, 0.5)",
      },
      boxShadow: {
        sfull: "0px 4px 20px rgba(238, 238, 238, 0.5)",
        "shadow-img": "96px -66px 20px rgba(238, 238, 238, 0.5)",
        "mobile-shadow": "0px 4px 7px rgba(0, 0, 0, 0.05);",
      },
      backgroundColor: {
        "button-bg": "#675CE8;",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        map: "url('/src/asset/path5406.png')",
      },
    },
  },
  plugins: [],
};
