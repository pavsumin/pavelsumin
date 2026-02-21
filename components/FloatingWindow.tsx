'use client'

import { useEffect, useRef, useState } from 'react'

export default function FloatingWindow() {
	const ref = useRef<HTMLDivElement>(null)
	const [rotation, setRotation] = useState({ x: 0, y: 0 })
	const [lightPos, setLightPos] = useState({ x: 50, y: 50 })

	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			if (!ref.current) return

			const rect = ref.current.getBoundingClientRect()
			const centerX = rect.left + rect.width / 2
			const centerY = rect.top + rect.height / 2

			const rotateY = ((e.clientX - centerX) / rect.width) * 10
			const rotateX = ((centerY - e.clientY) / rect.height) * 10

			setRotation({ x: rotateX, y: rotateY })

			const lightX = ((e.clientX - rect.left) / rect.width) * 100
			const lightY = ((e.clientY - rect.top) / rect.height) * 100

			setLightPos({ x: lightX, y: lightY })
		}

		window.addEventListener('mousemove', handleMove)
		return () => window.removeEventListener('mousemove', handleMove)
	}, [])

	return (
		<div
			ref={ref}
			className='relative rounded-[28px] shadow-hero overflow-hidden transition-transform duration-200 ease-out'
			style={{
				transform:
					'perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)',
			}}
		>
			{/* Chrome Top Bar */}
			<div className='flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200'>
				<div className='w-3 h-3 bg-red-500 rounded-full' />
				<div className='w-3 h-3 bg-yellow-400 rounded-full' />
				<div className='w-3 h-3 bg-green-500 rounded-full' />
				<div className='ml-4 flex-1 bg-white/70 backdrop-blur-sm rounded-md h-6' />
			</div>

			{/* Content Area */}
			<div className='relative bg-white aspect-[4/3] flex items-center justify-center text-muted text-lg'>
				Your SaaS mockup here
				{/* Light Follow Effect */}
				<div
					className='pointer-events-none absolute inset-0'
					style={{
						background:
							'radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(37,99,235,0.25), transparent 60%)',
					}}
				/>
			</div>
		</div>
	)
}
