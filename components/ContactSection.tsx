'use client'

import Reveal from '@/components/Reveal'
import ContactForm from './ContactForm'

export default function ContactSection() {
	return (
		<section id='contact'>
			<div className='text-center max-w-[640px] mx-auto'>
				<Reveal>
					<h2 className='text-[40px] font-semibold text-primary'>
						Let’s build your next landing.
					</h2>

					<p className='mt-4 text-muted text-[18px]'>
						Tell me about your product and goals — I’ll get back within 24
						hours.
					</p>
				</Reveal>
				<Reveal>
					<div className='mt-10 flex justify-center'>
						<ContactForm />
					</div>
				</Reveal>
			</div>
		</section>
	)
}
