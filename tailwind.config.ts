import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#F6F3EC",
        "light-green": "#DBE6E0",
        "green": "#82B0A6",
        "dark-green": "#083441",
      },
    },
  },
  plugins: [],
};
export default config;
