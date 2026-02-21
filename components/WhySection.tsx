export default function WhySection() {
	return (
		<section className='relative py-32'>
			<div className='max-w-[1100px] mx-auto px-8'>
				{/* Heading */}
				<div className='text-center max-w-[720px] mx-auto'>
					<h2 className='text-[40px] md:text-[48px] font-semibold text-primary tracking-[-0.02em]'>
						Why early-stage founders choose me
					</h2>

					<p className='mt-6 text-muted text-[18px] leading-[1.6]'>
						I don’t just design landing pages. I dive into the product,
						positioning and user psychology to build sites that actually work.
					</p>
				</div>

				{/* Cards */}
				<div className='grid md:grid-cols-3 gap-8 mt-20'>
					{/* Card 1 */}
					<div className='group relative p-8 rounded-3xl border border-primary/10 bg-white/40 backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1'>
						<div className='text-[42px] font-semibold text-accent'>100%</div>

						<h3 className='mt-4 text-[20px] font-semibold text-primary'>
							Deep Product Immersion
						</h3>

						<p className='mt-4 text-muted leading-[1.6]'>
							I fully immerse myself in your product, positioning and target
							audience. The result — design decisions that make sense
							strategically, not just visually.
						</p>

						<div className='absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent/40 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />
					</div>

					{/* Card 2 */}
					<div className='group relative p-8 rounded-3xl border border-primary/10 bg-white/40 backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1'>
						<div className='text-[42px] font-semibold text-accent'>4+</div>

						<h3 className='mt-4 text-[20px] font-semibold text-primary'>
							Years of Frontend Craft
						</h3>

						<p className='mt-4 text-muted leading-[1.6]'>
							Clean architecture. Pixel precision. Performance-first
							engineering. Your landing page won’t just look good — it will load
							fast and scale.
						</p>

						<div className='absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent/40 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />
					</div>

					{/* Card 3 */}
					<div className='group relative p-8 rounded-3xl border border-primary/10 bg-white/40 backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1'>
						<div className='text-[42px] font-semibold text-accent'>1</div>

						<h3 className='mt-4 text-[20px] font-semibold text-primary'>
							Founder-Level Thinking
						</h3>

						<p className='mt-4 text-muted leading-[1.6]'>
							I approach every project like a founder — focusing on clarity,
							traction and real business impact. No fluff. No overdesign. Just
							execution.
						</p>

						<div className='absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent/40 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />
					</div>
				</div>
			</div>
		</section>
	)
}
