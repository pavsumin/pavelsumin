import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#F5F5F4',
				primary: '#1C1F1D',
				accent: '#0A84FF',
				muted: '#6B7280',
				dark: '#111111',
			},
			fontFamily: {
				sans: ['var(--font-manrope)'],
			},
		},
	},
	plugins: [],
}

export default config
