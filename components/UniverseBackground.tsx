export default function UniverseBackground() {
	return (
		<div className='fixed inset-0 -z-50 pointer-events-none overflow-hidden'>
			{/* base color */}
			<div className='absolute inset-0 bg-background' />

			{/* bottom-left glow */}
			<div
				className='
        absolute
        w-[500px] h-[500px] md:w-[900px] md:h-[900px]
        -bottom-[150px] md:-bottom-[300px]
        -left-[150px] md:-left-[300px]
        bg-accent/30 md:bg-accent/20
        rounded-full
        blur-[120px] md:blur-[220px]
        will-change-transform
      '
			/>

			{/* top-right glow */}
			<div
				className='
        absolute
        w-[400px] h-[400px] md:w-[700px] md:h-[700px]
        -top-[100px] md:-top-[200px]
        -right-[100px] md:-right-[200px]
        bg-blue-400/25 md:bg-blue-400/15
        rounded-full
        blur-[100px] md:blur-[200px]
        will-change-transform
      '
			/>

			{/* center glow */}
			<div
				className='
        absolute
        w-[350px] h-[350px] md:w-[600px] md:h-[600px]
        top-[40%] md:top-[30%]
        left-[50%]
        -translate-x-1/2
        bg-purple-400/20 md:bg-purple-400/10
        rounded-full
        blur-[100px] md:blur-[180px]
        will-change-transform
      '
			/>
		</div>
	)
}
