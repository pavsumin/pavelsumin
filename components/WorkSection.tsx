'use client'

import Image from 'next/image'

export default function WorkSection() {
	return (
		<section id='work' className='relative'>
			{/* ===== Section Header ===== */}
			<div className='mb-16'>
				<p className='text-sm uppercase tracking-widest text-muted mb-4'>
					Selected Work
				</p>

				<h2 className='text-[42px] md:text-[36px] font-semibold text-primary leading-[1.1]'>
					EatyWise — AI Nutrition Platform
				</h2>

				<p className='mt-6 max-w-[640px] text-[18px] text-muted leading-[1.6]'>
					Landing page designed and built for an early-stage AI startup focused
					on conscious founders and creators.
				</p>
			</div>

			{/* ===== Main Layout ===== */}
			<div className='grid lg:grid-cols-2 md:gap-40 gap-20 items-center'>
				{/* ===== LEFT: Case Content ===== */}
				<div className='space-y-10'>
					{/* Challenge */}
					<div className='p-6 rounded-2xl border border-primary/10 bg-white/40 backdrop-blur-sm'>
						<h3 className='text-lg font-semibold text-primary mb-4'>
							01 — The Challenge
						</h3>
						<p className='text-muted leading-[1.6]'>
							Early-stage product with a complex value proposition. Needed to
							communicate clarity, emotion, and positioning — without
							overwhelming the user.
						</p>
					</div>

					{/* Approach */}
					<div className='p-6 rounded-2xl border border-primary/10 bg-white/40 backdrop-blur-sm'>
						<h3 className='text-lg font-semibold text-primary mb-4'>
							02 — My Approach
						</h3>
						<p className='text-muted leading-[1.6]'>
							Deep immersion into the product and founder mindset. Built a
							narrative-driven layout with clean typography and
							performance-focused frontend architecture.
						</p>
					</div>

					{/* Result */}
					<div className='p-6 rounded-2xl border border-primary/10 bg-white/40 backdrop-blur-sm'>
						<h3 className='text-lg font-semibold text-primary mb-4'>
							03 — The Result
						</h3>
						<p className='text-muted leading-[1.6]'>
							Clear positioning, structured messaging, strong CTAs and a fully
							responsive implementation optimized for speed and user focus.
						</p>
					</div>

					{/* Metrics Row */}
					<div className='flex gap-10 pt-6'>
						<div>
							<p className='text-3xl font-semibold text-accent'>4</p>
							<p className='text-sm text-muted'>Core narrative blocks</p>
						</div>

						<div>
							<p className='text-3xl font-semibold text-accent'>100%</p>
							<p className='text-sm text-muted'>Custom layout</p>
						</div>

						<div>
							<p className='text-3xl font-semibold text-accent'>0</p>
							<p className='text-sm text-muted'>Visual noise</p>
						</div>
					</div>
				</div>

				{/* ===== RIGHT: Mockup Area ===== */}
				<div className='relative perspective w-[428px]'>
					<div className='relative preview-tilt rounded-[28px] overflow-hidden'>
						{/* Placeholder mockup image */}
						<a href='https://eatywise.vercel.app/' target='_blank'>
							<Image
								src={'/mockups/EatyWise-landing-80.avif'}
								alt='EatyWise Landing Preview'
								width={428}
								height={630}
							></Image>
						</a>

						{/* <div className='aspect-[16/10] bg-gradient-to-br from-background via-white to-background flex items-center justify-center text-muted'>
							EatyWise Landing Preview
						</div> */}
					</div>

					{/* subtle glow */}
					<div className='absolute -z-10 w-[400px] h-[400px] bg-accent/15 blur-[140px] rounded-full -bottom-20 -right-20' />
				</div>
			</div>

			{/* ===== CTA ===== */}
			<div className='mt-20 mb-6'>
				<a
					href='#contact'
					className='px-8 py-4 bg-accent text-white rounded-2xl text-lg font-semibold shadow-button hover:brightness-110 transition-all duration-300 cursor-pointer'
				>
					Launch Your Landing
				</a>
			</div>
		</section>
	)
}
