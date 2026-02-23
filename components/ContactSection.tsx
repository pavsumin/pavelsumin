'use client'

import ContactForm from './ContactForm'

export default function ContactSection() {
	return (
		<section className='py-32'>
			<h2 className='text-4xl font-semibold text-primary mb-8'>
				Let’s build something great.
			</h2>

			<ContactForm />
		</section>
	)
}
