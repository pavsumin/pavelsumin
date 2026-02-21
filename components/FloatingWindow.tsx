'use client'

import Tilt from 'react-parallax-tilt'

export default function FloatingWindow() {
	return (
		<div className='relative w-full max-w-[560px] mx-auto'>
			{/* Base Angle Wrapper */}
			<div style={{ transform: 'rotateX(6deg) rotateY(-6deg)' }}>
				<Tilt
					tiltMaxAngleX={6}
					tiltMaxAngleY={6}
					perspective={1600}
					transitionSpeed={900}
					trackOnWindow={true}
					tiltReverse={true}
					glareEnable={true}
					glareMaxOpacity={0.2}
					glareColor='#ffffff'
					glarePosition='all'
					glareBorderRadius='28px'
					className='rounded-[28px]'
				>
					<div className='relative rounded-[28px] overflow-hidden bg-white shadow-[0_50px_100px_-25px_rgba(0,0,0,0.25)]'>
						{/* Chrome Bar */}
						<div className='flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200'>
							<div className='w-3 h-3 bg-red-500 rounded-full' />
							<div className='w-3 h-3 bg-yellow-400 rounded-full' />
							<div className='w-3 h-3 bg-green-500 rounded-full' />
							<div className='ml-4 flex-1 bg-white/70 backdrop-blur-sm rounded-md h-6' />
						</div>

						<div className='aspect-[4/3] flex items-center justify-center text-gray-500 text-lg bg-white'>
							Your SaaS mockup here
						</div>
					</div>
				</Tilt>
			</div>
		</div>
	)
}
