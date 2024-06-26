import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      "mono":['Space Mono','monospace'],
      // "grotesk":['Familjen Grotesk', 'sans-serif']
    },
    extend: {
      colors:{
        "primary-bg":"#e1dfdd",
        "font-primary":"#282828",
        "font-secondary":"000000",
        "grotesq-color":"1c1c1c",
        "bg-green-500":"rgb(34 197 94)",
        "bg-green-300":"rgb(34 197 94)",
        "bg-green-200":"rgb(34 197 94)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    }
  },
  plugins: [],
};
export default config;
