import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark": "#273035",
        "primary-green": "#3B5D4F",
        "white-bone": "#F4F4F4",
        "rock-blue-500": "#94A3B8",
        "white-lilac-50": "#F4F5F9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
