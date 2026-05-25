import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f7f5ef",
        charcoal: "#ffffff",
        warm: "#111315",
        platinum: "#62676b",
        champagne: "#111315",
        stone: "#7a756d",
        electric: "#111315",
      },
      fontFamily: {
        display: ['"Avenir Next"', "Avenir", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
