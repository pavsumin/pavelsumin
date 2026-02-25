'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Tilt from 'react-parallax-tilt'

export default function FloatingWindow() {
	const previewRef = useRef<HTMLDivElement | null>(null)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const check = () => {
			setIsMobile(window.innerWidth < 768)
		}

		check()
		window.addEventListener('resize', check)
		return () => window.removeEventListener('resize', check)
	}, [])

	useEffect(() => {
		if (!isMobile) return
		const el = previewRef.current
		if (!el) return

		const handleScroll = () => {
			const scrollY = window.scrollY

			// ограничиваем диапазон
			const maxScroll = 400
			const progress = Math.min(scrollY / maxScroll, 1)

			// из 6deg к 0deg
			const rotateX = 6 - progress * 8

			el.style.transform = `rotateX(${rotateX}deg) rotateY(-6deg)`
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [isMobile])

	const Content = (
		<div
			ref={previewRef}
			className='relative rounded-[28px] overflow-hidden bg-white shadow-[0_50px_100px_-25px_rgba(0,0,0,0.25)] transition-transform duration-200 will-change-transform'
			style={{ transform: 'rotateX(6deg) rotateY(-6deg)' }}
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
		</div>
	)

	return (
		<div className='relative w-full max-w-[560px] mx-auto'>
			{isMobile ? (
				Content
			) : (
				<Tilt
					tiltMaxAngleX={8}
					tiltMaxAngleY={8}
					perspective={1600}
					transitionSpeed={900}
					trackOnWindow={true}
					tiltReverse={true}
					glareEnable={true}
					glareMaxOpacity={0.1}
					glareColor='#ffffff'
					glarePosition='all'
					glareBorderRadius='28px'
					className='rounded-[28px]'
				>
					{Content}
				</Tilt>
			)}
		</div>
	)
}
