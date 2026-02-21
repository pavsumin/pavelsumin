'use client'

import FloatingWindow from '@/components/FloatingWindow'
import Header from '@/components/Header'

export default function HeroSection() {
	return (
		<section className='h-[700px]'>
			{/* ===== Universe Background ===== */}
			<div className='absolute inset-0 -z-30 bg-background' />

			<div className='absolute inset-0 -z-20'>
				<div className='absolute w-[900px] h-[900px] -bottom-[300px] -left-[300px] bg-accent/20 rounded-full blur-[220px]' />
				<div className='absolute w-[700px] h-[700px] -top-[200px] -right-[200px] bg-blue-400/15 rounded-full blur-[200px]' />
				<div className='absolute w-[600px] h-[600px] top-[30%] left-[40%] bg-purple-400/10 rounded-full blur-[180px]' />
			</div>

			<div className='max-w-[1200px] mx-auto px-8 relative'>
				<Header />
				<div className='grid md:grid-cols-2 gap-16 pt-20 pb-32'>
					<div>
						<h1 className='text-[64px] md:text-[44px] leading-[1.05] tracking-[-0.02em] font-semibold text-primary'>
							I design and build{' '}
							<span className='text-accent'>modern landing pages</span> that
							convert.
						</h1>

						<p className='mt-8 max-w-[520px] text-[18px] md:text-[20px] text-muted leading-[1.6]'>
							Clean engineering. Thoughtful design. Built for modern brands and
							ambitious founders.
						</p>

						<div className='mt-10 flex gap-5'>
							<button className='px-8 py-3.5 bg-accent text-white rounded-2xl text-[18px] font-bold shadow-button hover:brightness-110 duration-300 hover:scale-102 transition-all cursor-pointer'>
								Start a Project
							</button>

							<button className='px-8 py-3.5 border-[1.5px] border-primary/60 rounded-2xl text-[16px] font-medium hover:px-10 transition-all duration-300 cursor-pointer'>
								View Work
							</button>
						</div>
					</div>

					{/* RIGHT */}
					<div className='relative flex justify-center md:justify-end'>
						<FloatingWindow />
					</div>
				</div>
			</div>
		</section>
	)
}
