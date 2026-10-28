/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        emerald: {
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        earth: {
          50: '#fbf9f5',
          100: '#f5f0e8',
          200: '#ebdccb',
          300: '#dec2a7',
          400: '#cfa17e',
          500: '#b47b52',
          600: '#9b603d',
          700: '#7d4931',
          800: '#643929',
          900: '#4d2b20',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f2',
          200: '#f4ede2',
          300: '#ece1cf',
        },
        charcoal: {
          800: '#1e242b',
          900: '#131920',
          950: '#0a0d12',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 83, 45, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(20, 83, 45, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
