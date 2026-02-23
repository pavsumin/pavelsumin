import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		console.log('New contact message:', body)

		return NextResponse.json({ success: true })
	} catch {
		return NextResponse.json({ success: false }, { status: 500 })
	}
}
