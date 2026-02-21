import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'

export default function Home() {
	return (
		<main className='relative bg-background overflow-hidden'>
			<HeroSection />
			<WhySection />
		</main>
	)
}
