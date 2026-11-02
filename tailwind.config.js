/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#000000',
          surface: '#151515',
          card: '#181818',
          border: 'rgba(255, 255, 255, 0.1)',
          secondary: '#A1A1A6',
        },
        light: {
          DEFAULT: '#FFFFFF',
          surface: '#F5F5F7',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.08)',
          secondary: '#777777',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'control': '14px',
        'button': '9999px',
        'card': '24px',
        'panel': '32px',
        'image': '20px',
      },
      boxShadow: {
        'glass-light': '0 8px 32px 0 rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
        'float': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'float-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
