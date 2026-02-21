import UniverseBackground from '@/components/UniverseBackground'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
	subsets: ['latin'],
	variable: '--font-manrope',
})

export const metadata: Metadata = {
	title: 'Pavel Sumin — Modern Landing Pages',
	description:
		'Modern, high-converting landing pages built with precision, performance and thoughtful design.',
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
