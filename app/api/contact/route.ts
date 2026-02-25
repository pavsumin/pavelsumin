import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json()

		if (!name || !email || !message) {
			return Response.json({ error: 'Missing fields' }, { status: 400 })
		}

		await resend.emails.send({
			from: 'Contact Form <form@contact.pavelsumin.com>',
			to: 'pavsumin@gmail.com',
			subject: `New message from ${name}`,
			replyTo: email,
			html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
		})

		return Response.json({ success: true })
	} catch (error) {
		return Response.json({ error: 'Server error' }, { status: 500 })
	}
}
