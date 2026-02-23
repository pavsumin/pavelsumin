/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				back: '#F8FAFC',
				primary: '#111827',
				muted: '#6B7280',
				accent: '#2563EB',
			},
			boxShadow: {
				hero: '0 40px 80px -20px rgba(0,0,0,0.15)',
				button: '0 10px 30px -5px rgba(37,99,235,0.4)',
			},
		},
	},
	plugins: [],
}
