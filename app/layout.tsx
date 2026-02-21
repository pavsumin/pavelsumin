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
		<html lang='en' className={manrope.variable}>
			<body className='font-sans antialiased bg-background text-primary'>
				{children}
			</body>
		</html>
	)
}
