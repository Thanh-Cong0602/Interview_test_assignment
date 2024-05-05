import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ssm: '360px'
      },
      fontSize: {
        xs: ['12px', '18px'],
        sm: ['14px', '18px']
      },
      colors: {
        white: {
          100: '#FFFFFF',
          200: '#FBFAFB',
          300: '#F1F1FF',
          500: '#F5F4F7'
        },
        purple: {
          400: '#462E67'
        },
        gray: {
          '100': '#868098'
        },
        blue: {
          '200': '#5682F4'
        }
      }
    }
  },
  plugins: [],
};
export default config;
