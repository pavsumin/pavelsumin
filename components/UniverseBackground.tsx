export default function UniverseBackground() {
	return (
		<>
			{/* ===== DESKTOP VERSION (md+) ===== */}
			<div className='hidden md:block fixed inset-0 -z-50 pointer-events-none overflow-hidden'>
				{/* base */}
				<div className='absolute inset-0 bg-[#f8fafc]' />

				{/* bottom-left glow */}
				<div className='absolute w-[900px] h-[900px] -bottom-[300px] -left-[300px] bg-accent/20 rounded-full blur-[220px]' />

				{/* top-right glow */}
				<div className='absolute w-[700px] h-[700px] -top-[200px] -right-[200px] bg-blue-400/15 rounded-full blur-[200px]' />

				{/* center glow */}
				<div className='absolute w-[600px] h-[600px] top-[30%] left-[40%] bg-purple-400/10 rounded-full blur-[180px]' />
			</div>

			{/* ===== MOBILE VERSION (< md) ===== */}
			<div className='block md:hidden absolute inset-0 -z-50 pointer-events-none overflow-hidden'>
				{/* base */}
				<div className='absolute inset-0 bg-[#f8fafc]' />

				{/* softer centered glow */}
				<div className='absolute w-[700px] h-[700px] top-[5%] left-1/2 -translate-x-1/2 bg-accent/15 rounded-full blur-[180px]' />

				{/* subtle secondary glow */}
				<div className='absolute w-[500px] h-[500px] top-[50%] left-1/2 -translate-x-1/2 bg-blue-400/10 rounded-full blur-[160px]' />
			</div>
		</>
	)
}
