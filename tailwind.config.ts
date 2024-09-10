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
        "white-bone-100": "#DCDCDC",
        "rock-blue-500": "#94A3B8",
        "white-lilac-50": "#F4F5F9",
        "alabaster-50": "#F8F8F8",
        "seashell-100": "#F1F1F1",
        "seashell-200": "#DCDCDC",
        "heather-300": "#b2bac5",
        "aluminium-500": "#a8a8af",
        "athens-gray-100": "#ebecee",
        "jumbo-700": "#82828B",
        "outer-space-950": "#273035",
        "boulder-500": "#75797b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/assets/background.jpg')",
        product: "url('/assets/background-product.jpg')",
        info: "url('/assets/background-info.jpg')",
        about: "url('/assets/background-about.jpg')",
        quotes: "url('/assets/background-quotes.jpg')",
        contact: "url('/assets/background-contact.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
