const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '3rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      colors: ({ colors }) => ({
        gray: colors.neutral,
        primary: {
          light: '#299cf0',
          DEFAULT: '#1491eb',
          dark: '#0d88e0',
        },
      }),
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      maxWidth: {
        '2xl': '40rem',
      },
      typography: ({ theme }) => ({
        minizinc: {
          css: {
            h1: {
              'font-size': '3rem',
              'font-weight': 500,
              color: theme('colors.gray[900]'),
              'line-height': 1,
            },
            h2: {
              'font-size': '2rem',
              'font-weight': 500,
              color: theme('colors.gray[900]'),
              'line-height': '3rem',
              'margin-bottom': 0,
            },
            h3: {
              'font-size': '1.5rem',
              'font-weight': 500,
              color: theme('colors.gray[900]'),
              'line-height': '2rem',
            },
            h4: {
              'font-size': '1.25rem',
              'font-weight': 500,
              color: theme('colors.gray[900]'),
              'line-height': '1.75rem',
            },
            h5: {
              'font-size': '1.125rem',
              'font-weight': 500,
              color: theme('colors.gray[900]'),
              'line-height': '2rem',
            },
            h6: {
              'font-size': '1rem',
              'font-weight': 500,
              color: theme('colors.gray[900]'),
              'line-height': '1.5rem',
            },
            a: {
              'text-decoration': 'none',
              'font-weight': 400,
              '&:hover': {
                color: theme('colors.sky[700]'),
                'text-decoration': 'underline',
              },
              '&:active': {
                color: theme('colors.sky[500]'),
              },
            },
            ul: {
              'margin-top': '0',
              'margin-bottom': '0',
            },
            li: {
              'margin-top': '0',
              'margin-bottom': '0',
            },
            code: {
              'margin-top': '0.5rem',
              'margin-bottom': '0.5rem',
              '&::before': {
                content: `''`,
              },
              '&::after': {
                content: `''`,
              },
              'font-size': '1rem',
              'font-weight': 400,
            },
            pre: { kbd: { color: theme('colors.slate[200]') } },
            '--tw-prose-body': theme('colors.neutral[950]'),
            '--tw-prose-links': theme('colors.sky[600]'),
            '--tw-prose-bullets': theme('colors.neutral[800]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
