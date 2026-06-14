import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vesara: {
          gold: "#D4AF37",
          "gold-light": "#E6C547",
          "gold-dark": "#B8960F",
          maroon: "#8B3A3A",
          "maroon-light": "#A84848",
          "maroon-dark": "#6B2C2C",
          cream: "#F5F1E8",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
