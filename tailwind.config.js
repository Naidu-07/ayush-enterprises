/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#062B59',
          'navy-dark': '#002653',
          'navy-deep': '#001A3A',
          orange: '#FFA500',
          'orange-hover': '#FF9100',
          'orange-dark': '#E68A00',
          'light-grey': '#F5F7FA',
          'border-grey': '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 38, 83, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 24px rgba(6, 43, 89, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
        'hotspot': '0 0 0 4px rgba(255, 165, 0, 0.3), 0 4px 12px rgba(0,0,0,0.25)',
        'hotspot-pulse': '0 0 20px 6px rgba(255, 165, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
