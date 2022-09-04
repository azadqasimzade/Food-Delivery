/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "#fcfcfc",
        bgRed: "#df2020",
        footerBg: "#fde4e4",
      },
      colors: {
        hColor: "#212245",
        hHover: "#df2020",
        footerBg: "#fde4e4",
      },
      backgroundImage: {
        "common-img": "url(/src/assets/images/banner-02.jpg)",
      },
    },
  },
  plugins: [],
};
