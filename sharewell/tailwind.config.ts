import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'neutral-600': '#525252',
        'indigo-500': '#687CEB',
        'gray-200': '#E5E7EB',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        '2xl': '32px'
      },
    },
  },
  plugins: [],
}
export default config
