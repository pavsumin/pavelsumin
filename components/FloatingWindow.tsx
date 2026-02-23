'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export default function FloatingWindow() {
	return (
		<div className='relative w-full max-w-[560px] mx-auto'>
			<Tilt
				tiltMaxAngleX={8}
				tiltMaxAngleY={8}
				perspective={1600}
				transitionSpeed={900}
				trackOnWindow
				tiltReverse
				glareEnable
				glareMaxOpacity={0.1}
				glareColor='#ffffff'
				glarePosition='all'
				glareBorderRadius='28px'
				className='rounded-[28px]'
				tiltEnable={true}
			>
				<div
					className='
            relative rounded-[28px] overflow-hidden bg-white
            shadow-[0_50px_100px_-25px_rgba(0,0,0,0.25)]
            lg:[transform:rotateX(6deg)_rotateY(-6deg)]
          '
				>
					{/* Chrome Bar */}
					<div className='flex items-center gap-2 px-4 py-3 bg-back border-b border-back'>
						<div className='w-3 h-3 bg-red-500 rounded-full' />
						<div className='w-3 h-3 bg-yellow-400 rounded-full' />
						<div className='w-3 h-3 bg-green-500 rounded-full' />
						<div className='ml-4 flex-1 bg-muted/10 backdrop-blur-sm rounded-md h-6' />
					</div>

					{/* Mockup */}
					<div className='relative aspect-[15/8] bg-white'>
						<Image
							src='/mockups/saas-landing-growIQ-croped.avif'
							alt='SaaS Landing Preview'
							fill
							className='object-cover'
							priority
						/>
					</div>

					{/* Subtle overlay */}
					<div className='pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10 mix-blend-overlay' />
				</div>
			</Tilt>
		</div>
	)
}
