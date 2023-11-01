/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '94rem',
      },
      colors: {
        //mustard
        mustard: {
          800: '#90A905',
          400: '#BAC320',
          200: '#EBF541',
          100: '#F8FCAD',
        },
        lachs: {
          800: '#EC903A',
          400: '#F6A356',
          200: '#FFC28A',
          100: '#FFE3CA',
        },
        gray: {
          800: '#111827',
          400: '#6B7280',
          200: '#C9CDD3',
          100: '#F9FAFB',
        },
        indigo: {
          800: '#265E78',
          400: '#3E7591',
          200: '#64A1C0',
          100: '#DFEAF0',
        },
      },
      fontFamily: {
        inter: ['Inter'],
        lora: ['Lora'],
        italic: ['Italic'],
      },
      animation: {
        pop: 'pop 500ms ease-in-out',
        slideLeft: 'slideLeft 700ms ease',
        slideRight: 'slideRight 700ms ease',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'translateX(-300px) scale(0.5)' },
          '100%': { transform: 'translateX(0px) scale(1)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0px)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
    },
    plugins: [],
  },
}
