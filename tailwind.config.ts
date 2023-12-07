import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dfddf5',
          200: '#c0baeb',
          300: '#a098e0',
          400: '#8175d6',
          500: '#6153cc',
          600: '#4e42a3',
          700: '#3a327a',
          800: '#272152',
          900: '#131129',
        },
        accent: {
          100: '#dafff6',
          200: '#b4ffed',
          300: '#8fffe3',
          400: '#69ffda',
          500: '#44ffd1',
          600: '#36cca7',
          700: '#29997d',
          800: '#1b6654',
          900: '#0e332a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
