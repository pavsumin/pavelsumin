'use client'

import FloatingWindow from '@/components/FloatingWindow'

export default function HeroSection() {
	return (
		<section id='intro' className='h-[auto]'>
			<div className='grid md:grid-cols-2 gap-16 pt-20 mt-10 items-center'>
				<div>
					<h1 className='text-[64px] md:text-[40px] leading-[1.25] tracking-[-0.02em] font-semibold text-primary'>
						I design and build{' '}
						<span className='text-accent'>landing pages</span> for early-stage
						startups.
					</h1>

					<p className='mt-8 max-w-[520px] text-[18px] md:text-[20px] text-muted leading-[1.6]'>
						Deep product immersion. Clear positioning. Built for ambitious
						early-stage founders.
					</p>

					<div className='mt-10 flex gap-5'>
						<a
							href='#contact'
							className='px-8 py-3.5 bg-accent text-white rounded-2xl text-[18px] font-bold shadow-button hover:brightness-110 duration-300 hover:scale-102 transition-all cursor-pointer'
						>
							Start a Project
						</a>

						<a
							href='#work'
							className='px-8 py-3.5 border-[1.5px] border-primary/60 rounded-2xl text-[16px] font-medium hover:px-10 transition-all duration-300 cursor-pointer'
						>
							View Work
						</a>
					</div>
				</div>

				{/* RIGHT */}
				<div className='z-0 flex justify-center md:justify-end'>
					<FloatingWindow />
				</div>
			</div>
		</section>
	)
}
