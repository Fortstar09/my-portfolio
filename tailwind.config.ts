import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        mainwhite: '#F3F3F3',
        secondary: '#2429AF',
        mainblack: '#181717',
        maingrey: '#606060',
      },

      fontSize: {
        'sm': '0.75rem',
        'subText': '0.875rem',
        'body': '1.125rem',
        'link': '1.125rem',
        'nav': '1.3125rem',
        'h2': '2rem',
        'h1': '3.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
