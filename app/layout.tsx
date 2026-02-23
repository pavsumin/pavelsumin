import UniverseBackground from '@/components/UniverseBackground'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
	subsets: ['latin'],
	variable: '--font-manrope',
})

export const metadata = {
	title: 'Pavel Sumin — Landing Pages for Early-Stage Startups',
	description:
		'I design and build high-converting landing pages for early-stage startups. Deep product immersion. Clear positioning. Built to convert.',
	keywords: [
		'landing page designer',
		'early stage startup',
		'startup landing page',
		'conversion focused design',
	],
	authors: [{ name: 'Pavel Sumin' }],
	openGraph: {
		title: 'Pavel Sumin — Landing Pages for Early-Stage Startups',
		description: 'High-converting landing pages built for ambitious founders.',
		url: 'https://pavelsumin.com',
		siteName: 'Pavel Sumin',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
			},
		],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='relative bg-background text-primary overflow-x-hidden font-sans antialiased'>
				<UniverseBackground />
				<div className='relative z-10'>{children}</div>
			</body>
		</html>
	)
}
