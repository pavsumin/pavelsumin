export default function Footer() {
	return (
		<footer className='mt-32 pt-16 pb-10 border-t border-muted/40'>
			<div className='flex flex-col md:flex-row md:justify-between gap-12'>
				{/* LEFT */}
				<div>
					<h3 className='text-[18px] font-semibold text-primary'>
						Pavel Sumin
					</h3>
					<p className='mt-4 max-w-[320px] text-[15px] text-muted leading-[1.6]'>
						Designing high-converting landing pages for early-stage founders.
					</p>
				</div>

				{/* RIGHT */}
				<div className='flex flex-col gap-4 text-[15px]'>
					<a
						href='https://t.me/yourtelegram'
						target='_blank'
						className='hover:text-accent transition-colors'
					>
						Telegram
					</a>

					<a
						href='https://linkedin.com/in/yourlinkedin'
						target='_blank'
						className='hover:text-accent transition-colors'
					>
						LinkedIn
					</a>

					<a
						href='https://fiverr.com/yourprofile'
						target='_blank'
						className='hover:text-accent transition-colors'
					>
						Fiverr
					</a>

					<a
						href='mailto:your@email.com'
						className='hover:text-accent transition-colors'
					>
						Email
					</a>
				</div>
			</div>

			{/* Bottom line */}
			<div className='mt-16 text-[13px] text-muted/70'>
				© {new Date().getFullYear()} Pavel Sumin. All rights reserved.
			</div>
		</footer>
	)
}
