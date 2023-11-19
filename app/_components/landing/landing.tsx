import { LandingContainer, LandingContent } from './styled'
import Hero from '../hero'
import Highlight from '../highlight'
import MetricsBanner from '../metrics-banner'
import Reviews from '../reviews'
import Footer from '../footer'
import { features } from '../new-features/features-data'
import { MetricItemProps } from '../metrics-banner/types'
import { LandingAsset } from '../lottie'
import { HeadlineData } from '../hero/types'
import NewFeatures from '../new-features/new-features'
import Pricing from '../pricing/pricing'
import { motion } from 'framer-motion'
const metrics: MetricItemProps[] = [
	{ value: '500+', label: 'mentors' },
	{ value: '10K', label: 'active members' },
	{ value: '50+', label: 'classes' },
	{ value: '30+', label: 'tutorials' },
]
const headlines: HeadlineData[] = [
	{ id: 1, name: '', headline: 'Club' },
	{ id: 2, name: '', headline: 'Hope Builder' },
	{ id: 3, name: '', headline: 'Social Enterprise' },
]

const Landing = () => {
	const featureHeader = { tag: 'discover', title: 'How The Process Works' }
	const highlightHeader = { tag: 'mentor', title: 'Top Mentors' }
	const heroProps = { subtext: 'is a', headlines }

	return (
		<LandingContainer>
			<LandingContent>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7, delay: 1.6, ease: 'easeInOut' }}>
					<Hero
						asset={<LandingAsset />}
						primaryProps={heroProps}
					/>
				</motion.div>
				<MetricsBanner metrics={metrics} />
				<NewFeatures
					header={featureHeader}
					features={features}
				/>

				<Highlight header={highlightHeader} />
				<Pricing />
				<Reviews />
				<Footer />
			</LandingContent>
		</LandingContainer>
	)
}

export default Landing
