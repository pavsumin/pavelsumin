export default function UniverseBackground() {
	return (
		<>
			{/* DESKTOP */}
			<div className='hidden md:block fixed inset-0 z-0 pointer-events-none'>
				<div className='absolute inset-0 bg-[#f8fafc]' />
				<div className='absolute w-[900px] h-[900px] -bottom-[300px] -left-[300px] bg-accent/20 rounded-full blur-[220px]' />
				<div className='absolute w-[700px] h-[700px] -top-[200px] -right-[200px] bg-blue-400/15 rounded-full blur-[200px]' />
				<div className='absolute w-[600px] h-[600px] top-[30%] left-[40%] bg-purple-400/10 rounded-full blur-[180px]' />
			</div>

			{/* MOBILE */}
			<div className='md:hidden fixed inset-0 z-0 pointer-events-none'>
				<div className='absolute inset-0 bg-[#f8fafc]' />
				<div className='absolute w-[700px] h-[700px] top-[10%] left-1/2 -translate-x-1/2 bg-accent/20 rounded-full blur-[160px]' />
				<div className='absolute w-[500px] h-[500px] top-[55%] left-1/2 -translate-x-1/2 bg-blue-400/15 rounded-full blur-[140px]' />
			</div>
		</>
	)
}
