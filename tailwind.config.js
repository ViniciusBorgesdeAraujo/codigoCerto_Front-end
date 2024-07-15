module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        turret: ["Turret Road", "sans-serif"],
      },
      fontSize: {
        "18´x": "18px",
      },
      colors: {
        primary: "#E53939",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    function ({ addUtilities }) {
      addUtilities({
        ".stroke-text": {
          "-webkit-text-stroke": "1px #ffffff",
        },
      });
    },
  ],
};
