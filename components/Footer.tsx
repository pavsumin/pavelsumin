export default function Footer() {
	return (
		<footer className='border-t border-muted/40'>
			<div className='flex items-center justify-between py-8 text-[14px] text-muted'>
				{/* LEFT */}
				<div>© {new Date().getFullYear()} Pavel Sumin</div>

				{/* RIGHT */}
				<div className='flex items-center gap-6'>
					<a
						href='https://t.me/yourtelegram'
						target='_blank'
						className='hover:text-accent transition-colors duration-300'
					>
						TG
					</a>

					<a
						href='https://linkedin.com/in/yourlinkedin'
						target='_blank'
						className='hover:text-accent transition-colors duration-300'
					>
						LI
					</a>

					<a
						href='https://fiverr.com/yourprofile'
						target='_blank'
						className='hover:text-accent transition-colors duration-300'
					>
						Fv
					</a>

					<a
						href='mailto:your@email.com'
						className='hover:text-accent transition-colors duration-300'
					>
						✉
					</a>
				</div>
			</div>
		</footer>
	)
}
