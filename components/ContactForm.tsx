'use client'

import { useState } from 'react'

export default function ContactForm() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle')

	const isValidEmail = (email: string) =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!name.trim() || !message.trim() || !isValidEmail(email)) {
			setStatus('error')
			return
		}

		try {
			setStatus('loading')

			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message }),
			})

			if (!res.ok) throw new Error()

			setStatus('success')
			setName('')
			setEmail('')
			setMessage('')
		} catch {
			setStatus('error')
		}
	}

	return (
		<form onSubmit={handleSubmit} className='w-full max-w-[720px] space-y-6'>
			{/* Name + Email */}
			<div className='grid md:grid-cols-2 gap-6'>
				<input
					type='text'
					placeholder='Your name'
					value={name}
					onChange={e => setName(e.target.value)}
					className='
            w-full
            px-5 py-4
            rounded-2xl
            border border-primary/20
            bg-background/60
            backdrop-blur-sm
            text-primary
            placeholder:text-muted
            outline-none
            focus:border-accent
            transition
          '
				/>

				<input
					type='email'
					placeholder='Your email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					className='
            w-full
            px-5 py-4
            rounded-2xl
            border border-primary/20
            bg-background/60
            backdrop-blur-sm
            text-primary
            placeholder:text-muted
            outline-none
            focus:border-accent
            transition
          '
				/>
			</div>

			{/* Message */}
			<textarea
				placeholder='Tell me about your startup and what you need…'
				value={message}
				onChange={e => setMessage(e.target.value)}
				rows={5}
				className='
          w-full
          px-5 py-4
          rounded-2xl
          border border-primary/20
          bg-background/60
          backdrop-blur-sm
          text-primary
          placeholder:text-muted
          outline-none
          focus:border-accent
          transition
          resize-none
        '
			/>

			{/* Button */}
			<button
				type='submit'
				disabled={status === 'loading'}
				className='
          px-8 py-4
          bg-accent
          text-white
          rounded-2xl
          font-semibold
          shadow-button
          hover:brightness-110
          hover:scale-[1.02]
          transition-all
          disabled:opacity-50
        '
			>
				{status === 'loading' ? 'Sending…' : 'Start a Project'}
			</button>

			{/* Status messages */}
			{status === 'error' && (
				<p className='text-red-500 text-sm'>
					Please fill all fields correctly.
				</p>
			)}

			{status === 'success' && (
				<p className='text-green-500 text-sm'>
					Message sent. I’ll get back to you soon.
				</p>
			)}
		</form>
	)
}
