module.exports = {
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        pulse: 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};