import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hostinger: {
          dark: "#0c0d0d",
          purple: "#673de6",
          lightPurple: "#a98cf1",
          softPurple: "#e4dcfa",
          accent: "#2b186b",
          cardDark: "#121316",
          border: "#2f3136",
        },
      },
    },
  },
  plugins: [],
};
export default config;
