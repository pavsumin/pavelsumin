import Image from 'next/image'

export default function Footer() {
	return (
		<footer className='border-t border-muted/40'>
			<div
				className='
        flex flex-col sm:flex-row
        items-center
        justify-center sm:justify-between
        gap-6 sm:gap-0
        py-8
        text-[14px]
        text-muted
      '
			>
				{/* LEFT */}
				<div className='text-center sm:text-left'>
					© {new Date().getFullYear()} Pavel Sumin
				</div>

				{/* RIGHT */}
				<div
					className='
          flex items-center gap-6
        '
				>
					<a
						href='https://www.fiverr.com/s/KelxoNY'
						target='_blank'
						className='hover:scale-110 transition-transform duration-300'
					>
						<Image
							src='/icons/Fiverr.svg'
							width={24}
							height={24}
							className='w-[30px] h-[30px]'
							alt='Fiverr'
							loading='lazy'
						/>
					</a>

					<a
						href='https://t.me/pazizz'
						target='_blank'
						className='hover:scale-110 transition-transform duration-300'
					>
						<Image
							src='/icons/Telegram.svg'
							width={24}
							height={24}
							className='w-[30px] h-[30px]'
							alt='Telegram'
							loading='lazy'
						/>
					</a>

					<a
						href='https://www.linkedin.com/in/pavel-sumin-434465388/'
						target='_blank'
						className='hover:scale-110 transition-transform duration-300'
					>
						<Image
							src='/icons/LinkedIn.svg'
							width={22}
							height={22}
							className='w-[28px] h-[28px]'
							alt='LinkedIn'
							loading='lazy'
						/>
					</a>

					<a
						href='mailto:pavsumin@gmail.com'
						className='hover:scale-110 transition-transform duration-300'
					>
						<Image
							src='/icons/Mail.svg'
							width={22}
							height={20}
							className='w-[30px] h-[26px]'
							alt='Mail'
							loading='lazy'
						/>
					</a>
				</div>
			</div>
		</footer>
	)
}
