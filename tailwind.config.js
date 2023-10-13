module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '24px',
        '2xl': '40px',
      },

      screens: {
        lg: '1024px',
        xl: '1248px',
        '2xl': '1440px',
        
      },
    },
    colors: {
      secondary: '#41464C',
      brand: '#1570EF',
      primary: '#1C1F23',
      success: '#12B76A',
      error: '#F04438',
      tertiary: '#6B7075',
    }

  },
  variants: {},
  plugins: [],
}
