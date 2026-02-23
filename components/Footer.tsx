import Image from 'next/image'

export default function Footer() {
	return (
		<footer className='border-t border-muted/40'>
			<div className='flex items-center justify-between py-8 text-[14px] text-muted'>
				{/* LEFT */}
				<div>© {new Date().getFullYear()} Pavel Sumin</div>

				{/* RIGHT */}
				<div className='flex items-center gap-6'>
					<a
						href='https://www.fiverr.com/s/KelxoNY'
						target='_blank'
						className='hover:scale-110 transition-transform duration-300'
					>
						<Image
							src={'/icons/Fiverr.svg'}
							width={30}
							height={30}
							alt='Fiverr'
							loading='lazy'
						></Image>
					</a>

					<a
						href='https://t.me/pazizz'
						target='_blank'
						className='hover:scale-110 transition-transform duration-300'
					>
						<Image
							src={'/icons/Telegram.svg'}
							width={30}
							height={30}
							alt='Telegram'
							loading='lazy'
						></Image>
					</a>

					<a
						href='https://www.linkedin.com/in/pavel-sumin-434465388/'
						target='_blank'
						className='hover:scale-110 transition-transform duration-300'
					>
						<Image
							src={'/icons/LinkedIn.svg'}
							width={28}
							height={28}
							alt='LinkedIn'
							loading='lazy'
						></Image>
					</a>

					<a
						href='mailto:pavsumin@gmail.com'
						className='hover:scale-110 transition-transform duration-300'
					>
						<Image
							src={'/icons/Mail.svg'}
							width={30}
							height={26}
							alt='Gmail. pavsumin@gmail.com'
							loading='lazy'
						></Image>
					</a>
				</div>
			</div>
		</footer>
	)
}
