import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        sonar: {
          '0%': {
            width: '20px',
            height: '20px',
            opacity: '1'
          },
          '80%': {
            opacity: '1'
          },
          '100%': {
            width: '500vw',
            height: '500vw',
            opacity: '0'
          }
        }
      },
      animation: {
        sonar: 'sonar 1.5s ease-in-out'
      },
      colors: {
        background: 'var(--background)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        card: 'var(--card)',
        badge: 'var(--badge)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
