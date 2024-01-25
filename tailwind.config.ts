import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        // => @media (min-width: 320px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
          "stats-bg": "url('/img/stats-bg.png')",
          "projects-bg": "url('/img/projects-page-background.png')",
          "login-bg": "url('/img/login-bg.png')",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#B7213D",
        "mjengo-red": {
          500: "#B7213D",
          600: "#A81833",
        },
      },
      placeholderColor: {
        'custom': 'gray-400', 
      },
    },
  },
  plugins: [],
};
export default config;
