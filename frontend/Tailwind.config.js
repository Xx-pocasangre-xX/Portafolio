/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d3142',
        secondary: '#4f5d75',
        accent: '#546a7b',
        light: '#f2f4f8',
        dark: '#1d1e22',
        success: '#4a8072',
        error: '#cf6679',
        warning: '#ffc107',
        info: '#17a2b8',
        'gray': {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 5px 15px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      transitionProperty: {
        'height': 'height',
      },
      borderRadius: {
        'custom': '8px',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'slideInUp': 'slideInUp 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          'from': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
      },
    },
  },
  plugins: [],
}