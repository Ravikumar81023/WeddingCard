/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#4A0E17',
          deep: '#2B050B',
          light: '#6E1A27',
          darker: '#170306',
          text: '#52161E',
        },
        gold: {
          primary: '#C59341',
          light: '#F3DE9E',
          bright: '#DFBA67',
          dark: '#8F621D',
          amber: '#996822',
        },
        ivory: {
          DEFAULT: '#FDFBF7',
          warm: '#FAF5EC',
        },
        cream: {
          DEFAULT: '#F4ECE1',
          soft: '#EFE6D8',
          sand: '#E5DAC9',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        royal: ['Cinzel', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        devanagari: ['"Tiro Devanagari Hindi"', '"Baloo 2"', 'serif'],
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #FBF0B9 0%, #DFBA67 28%, #C59341 55%, #E7C979 78%, #996822 100%)',
        'bg-radial': 'radial-gradient(circle at 50% 30%, #2e080e 0%, #170306 100%)',
      },
      boxShadow: {
        'sm-wedding': '0 4px 12px rgba(74, 14, 23, 0.08)',
        'md-wedding': '0 8px 24px rgba(74, 14, 23, 0.12)',
        'lg-wedding': '0 16px 36px rgba(74, 14, 23, 0.18)',
        'gold-wedding': '0 6px 20px rgba(197, 147, 65, 0.35)',
      },
      maxWidth: {
        'wedding': '460px',
      }
    },
  },
  plugins: [],
}
