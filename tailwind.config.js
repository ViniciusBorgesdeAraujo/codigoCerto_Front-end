module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0920",
        secondary: "#221C3E",
        tertiary: "#F2F0FF",
        black: "#000000",
        red: "#E53939",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
