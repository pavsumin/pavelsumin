export default function UniverseBackground() {
	return (
		<>
			{/* Mobile subtle glow */}
			<div className='fixed inset-0 -z-50 pointer-events-none block sm:hidden'>
				{/* чистый фон */}
				<div className='absolute inset-0 bg-[#f8fafc]' />

				{/* мягкий центральный glow */}
				<div
					className='
          absolute
          top-[15%]
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-blue-400/20
          rounded-full
          blur-[120px]
        '
				/>
			</div>

			{/* Desktop */}
			<div className='hidden sm:block fixed inset-0 -z-50 pointer-events-none overflow-hidden'>
				{/* Base color */}
				<div className='absolute inset-0 bg-[#f8fafc]' />

				{/* bottom-left glow */}
				<div className='absolute w-[900px] h-[900px] -bottom-[300px] -left-[300px] bg-accent/20 rounded-full blur-[220px]' />

				{/* top-right glow */}
				<div className='absolute w-[700px] h-[700px] -top-[200px] -right-[200px] bg-blue-400/15 rounded-full blur-[200px]' />

				{/* center glow */}
				<div className='absolute w-[600px] h-[600px] top-[30%] left-[40%] bg-purple-400/10 rounded-full blur-[180px]' />
			</div>
		</>
	)
}
