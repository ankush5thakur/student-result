export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffeed5',
          200: '#fdd9ab',
          300: '#fcbe75',
          400: '#fa973d',
          500: '#f8842a',
          600: '#e85e0e',
          700: '#c1470d',
          800: '#993813',
          900: '#7b3013',
          950: '#431607',
        },
        chalk: {
          900: '#0A0A0B',
          850: '#0F0F10',
          800: '#151518',
          750: '#1A1A1E',
          700: '#202024',
          600: '#2A2A2F',
          500: '#35353A',
          400: '#404045',
          300: '#A8A8AA',
          200: '#C4C4C6',
          100: '#E0E0E2',
          50: '#F5F5F7',
        },
        accent: {
          blue: '#fff7ed',
          green: '#50E3A3',
          yellow: '#FFD93D',
          red: '#FF6B6B',
          purple: '#B794F6',
          orange: '#FF9F43',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
