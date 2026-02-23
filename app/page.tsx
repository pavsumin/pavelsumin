import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import WorkSection from '@/components/WorkSection'

export default function Home() {
	return (
		<main className='relative bg-background max-w-[1200px] mx-auto px-8'>
			<Header />
			<HeroSection />
			<WhySection />
			<WorkSection />
			<ContactSection />
		</main>
	)
}
