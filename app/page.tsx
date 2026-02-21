export default function Home() {
	return (
		<main className='min-h-screen'>
			<section className='max-w-5xl mx-auto px-6 py-32'>
				<h1 className='text-5xl md:text-6xl font-semibold leading-tight'>
					I build modern landing pages
					<span className='text-accent'> that convert.</span>
				</h1>

				<p className='mt-6 text-xl text-muted max-w-2xl'>
					Clean frontend architecture. Thoughtful design. Built for founders,
					creators and modern brands.
				</p>

				<div className='mt-10 flex gap-4'>
					<a
						href='#contact'
						className='px-6 py-3 bg-dark text-white rounded-lg text-lg font-medium hover:opacity-90 transition'
					>
						Start a Project
					</a>

					<a
						href='#portfolio'
						className='px-6 py-3 border border-dark rounded-lg text-lg font-medium hover:bg-dark hover:text-white transition'
					>
						View Work
					</a>
				</div>
			</section>
		</main>
	)
}
