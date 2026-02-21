'use client'

import profilePic from '@/public/icons/user.svg'
import Image from 'next/image'

export default function Header() {
	return (
		<nav className='flex items-center justify-between py-8 border-b-[0.5px] border-muted/50'>
			<div className='text-[20px] font-semibold text-primary'>Pavel Sumin</div>

			<div className='hidden md:flex items-center gap-10 text-[15px]'>
				<a href='#' className='hover:text-accent transition-all duration-300'>
					Home
				</a>
				<a href='#' className='hover:text-accent transition-all duration-300'>
					About
				</a>
				<a href='#' className='hover:text-accent transition-all duration-300'>
					Work
				</a>
				<a href='#' className='hover:text-accent transition-all duration-300'>
					Contact
				</a>
			</div>

			<button className='flex items-center gap-3 px-4 py-2 border border-primary rounded-xl text-[14px] font-semibold hover:px-5 transition-all duration-300'>
				<Image className='w-3.5' src={profilePic} alt='user' />
				Contact
			</button>
		</nav>
	)
}
