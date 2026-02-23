export default function UniverseBackground() {
	return (
		<div className='fixed inset-0 -z-50 pointer-events-none overflow-hidden'>
			{/* base color */}
			<div className='absolute inset-0 bg-[#f8fafc]' />

			{/* TOP MASK (чтобы не было резкого перехода к status bar) */}
			<div className='absolute top-0 left-0 w-full h-[40px] bg-[#f8fafc]' />

			{/* BOTTOM MASK (чтобы не было резкого края снизу) */}
			<div className='absolute bottom-0 left-0 w-full h-[40px] bg-[#f8fafc]' />

			{/* bottom-left glow */}
			<div className='absolute w-[900px] h-[900px] -bottom-[300px] -left-[300px] bg-accent/20 rounded-full blur-[220px]' />

			{/* top-right glow */}
			<div className='absolute w-[700px] h-[700px] -top-[200px] -right-[200px] bg-blue-400/15 rounded-full blur-[200px]' />

			{/* center glow */}
			<div className='absolute w-[600px] h-[600px] top-[30%] left-[40%] bg-purple-400/10 rounded-full blur-[180px]' />
		</div>
	)
}
