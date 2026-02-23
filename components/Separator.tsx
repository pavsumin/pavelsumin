type SeparatorProps = {
	size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Separator({ size = 'md' }: SeparatorProps) {
	const sizes = {
		sm: 'h-8',
		md: 'h-16',
		lg: 'h-24',
		xl: 'h-32',
	}

	return <div className={sizes[size]} />
}
