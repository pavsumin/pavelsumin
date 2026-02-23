'use client'

import FloatingWindow from '@/components/FloatingWindow'

export default function HeroSection() {
	return (
		<section id='intro'>
			<div className='grid md:grid-cols-2 gap-12 pt-10 md:pt-20 mt-4 md:mt-10 items-center'>
				<div>
					<h1 className='text-[40px] sm:text-[48px] lg:text-[40px] leading-[1.15] tracking-[-0.02em] font-semibold text-primary'>
						I design and build{' '}
						<span className='text-accent'>landing pages</span> for early-stage
						startups.
					</h1>

					<p className='mt-6 max-w-[520px] text-[16px] sm:text-[18px] md:text-[20px] text-muted leading-[1.6]'>
						Deep product immersion. Clear positioning. Built for ambitious
						early-stage founders.
					</p>

					<div className='mt-8 flex flex-col min-[480px]:flex-row gap-4'>
						<a
							href='#contact'
							className='w-full min-[480px]:w-auto text-center px-8 py-3.5 bg-accent text-white rounded-2xl text-[18px] font-bold shadow-button hover:brightness-110 transition-all duration-300 lg:hover:scale-102'
						>
							Start a Project
						</a>

						<a
							href='#work'
							className='w-full min-[480px]:w-auto text-center px-8 py-3.5 border-[1.5px] border-primary/60 rounded-2xl text-[16px] font-medium transition-all duration-300 lg:hover:px-9'
						>
							View Work
						</a>
					</div>
				</div>

				<div className='flex justify-center md:justify-end'>
					<FloatingWindow />
				</div>
			</div>
		</section>
	)
}
