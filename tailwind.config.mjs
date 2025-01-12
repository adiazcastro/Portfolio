/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008B80',
          hover: '#007A70',
        },
        secondary: '#596277',
        body: {
          DEFAULT: '#222',
          dark: '#e5e7eb',
        },
        heading: {
          DEFAULT: '#1a1a1a',
          dark: '#f3f4f6',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#111827',
        }
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#222',
            h1: {
              color: '#1a1a1a',
            },
            h2: {
              color: '#1a1a1a',
            },
            h3: {
              color: '#1a1a1a',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}