import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'neutral-600': '#525252',
        'indigo-500': '#687CEB',
        'zinc-800': '#282B2D',
        'gray-200': '#E5E7EB',
        'teal-500': '#31A6AD',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
export default config
