import Image from 'next/image'
import profilePic from '../public/icons/user.svg'

export default function Home() {
	return (
		<main className='relative min-h-screen bg-background overflow-hidden'>
			{/* ===== Background Layers ===== */}
			<div className='absolute inset-0 -z-20 bg-background' />

			{/* bottom-left glow */}
			<div className='absolute -z-10 bottom-[-200px] left-[-200px] w-[700px] h-[700px] bg-accent/20 rounded-full blur-[180px]' />

			{/* top-right glow */}
			<div className='absolute -z-10 top-[-150px] right-[-150px] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[160px]' />

			{/* ===== Container ===== */}
			<div className='max-w-[1200px] mx-auto px-8'>
				{/* ===== Navbar ===== */}
				<nav className='flex items-center justify-between py-8'>
					<div className='text-[20px] font-semibold text-primary'>
						Pavel Sumin
					</div>

					<div className='hidden md:flex items-center gap-10 text-[15px]'>
						<a
							href='#'
							className='text-primary hover:text-primaryHover transition cursor-pointer'
						>
							Home
						</a>
						<a
							href='#'
							className='hover:text-primaryHover transition cursor-pointer'
						>
							About
						</a>
						<a
							href='#'
							className='hover:text-primaryHover transition cursor-pointer'
						>
							Work
						</a>
						<a
							href='#'
							className='hover:text-primaryHover transition cursor-pointer'
						>
							Contact
						</a>
					</div>

					<button className='flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-xl text-[14px] hover:bg-gray-300 transition cursor-pointer font-semibold'>
						<Image className='w-3.5' src={profilePic} alt='user' />
						Contact
					</button>
				</nav>

				{/* ===== Hero ===== */}
				<section className='grid md:grid-cols-2 items-center gap-16 pt-20 pb-32'>
					{/* LEFT */}
					<div>
						<h1 className='text-[44px] md:text-[68px] leading-[1.05] tracking-[-0.02em] font-semibold text-primary'>
							I design and build{' '}
							<span className='text-accent'>modern landing pages</span> that
							convert.
						</h1>

						<p className='mt-8 max-w-[520px] text-[18px] md:text-[20px] text-muted leading-[1.6]'>
							Clean engineering. Thoughtful design. Built for modern brands and
							ambitious founders.
						</p>

						<div className='mt-10 flex gap-5'>
							<button className='px-8 py-4 bg-accent text-white rounded-2xl text-[16px] font-medium shadow-button hover:brightness-110 transition-all'>
								Start a Project
							</button>

							<button className='px-8 py-4 bg-white border border-gray-200 rounded-2xl text-[16px] font-medium hover:bg-gray-100 transition'>
								View Work
							</button>
						</div>
					</div>

					{/* RIGHT */}
					<div className='relative'>
						{/* image container */}
						<div className='relative rounded-[28px] overflow-hidden shadow-hero'>
							{/* placeholder image */}
							<div className='aspect-[4/3] bg-gray-200 flex items-center justify-center text-muted text-lg'>
								Image placeholder
							</div>

							{/* LEFT FADE OVERLAY */}
							<div className='absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent' />
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}
