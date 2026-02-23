import UniverseBackground from '@/components/UniverseBackground'
import { Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const manrope = Manrope({
	subsets: ['latin'],
	variable: '--font-manrope',
})

export const metadata = {
	metadataBase: new URL('https://pavelsumin.com'),

	title: {
		default: 'Pavel Sumin — Landing Pages Built for Early-Stage Startups',
		template: '%s | Pavel Sumin',
	},

	description:
		'I design and build high-converting landing pages for early-stage startups. Clear positioning. Deep product immersion. Built to convert.',

	keywords: [
		'landing page designer',
		'startup landing page',
		'conversion focused design',
		'early stage startup',
		'Pavel Sumin',
	],

	authors: [{ name: 'Pavel Sumin' }],

	openGraph: {
		title: 'Pavel Sumin — from Positioning to Launch',
		description: 'High-converting landing pages for early-stage startups.',
		url: 'https://pavelsumin.com',
		siteName: 'Pavel Sumin',
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Pavel Sumin — from Positioning to Launch',
		description: 'High-converting landing pages for early-stage startups.',
	},

	alternates: {
		canonical: 'https://pavelsumin.com',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='relative bg-[#F8FAFC] text-primary overflow-x-hidden font-sans antialiased'>
				<UniverseBackground />
				<div className='relative z-10'>{children}</div>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Pavel Sumin',
							url: 'https://pavelsumin.com',
							jobTitle: 'from Positioning to Launch',
							sameAs: [
								'https://www.linkedin.com/in/pavel-sumin-434465388/',
								'https://t.me/pazizz',
							],
						}),
					}}
				/>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
					strategy='afterInteractive'
				/>

				<Script id='google-analytics' strategy='afterInteractive'>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-06J00X8EE8');
					`}
				</Script>
			</body>
		</html>
	)
}
