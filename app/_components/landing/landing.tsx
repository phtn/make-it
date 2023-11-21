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
import Banner from '../banner'
import { toast } from 'sonner'

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
	const heroProps = {
		subheader: 'is a',
		description: `United by a Common Goal to Build a Better World. With a Team of Passionate Hope Builders, Visionaries, and Talents Willing To Architect Their Future. Your Journey Begins here.`,
		headlines,
	}

	const onClickPrimary = () => {
		toast(`Everything Awesome...`, {
			description: `Everything is awesome when you're part of a team! Everything is awesome...`,
			action: {
				label: 'Next',
				onClick: () => toast(`When you're living out a dream!`),
			},
		})
	}
	const onClickSecondary = () => {
		toast(`Everything Awesome...`, {
			description: `Everything is awesome when you're part of a team! Everything is awesome...`,
			action: {
				label: 'Next',
				onClick: () => toast(`When you're living out a dream!`),
			},
		})
	}

	const primaryAction = {
		label: 'Join Us',
		onClick: onClickPrimary,
	}
	const secondaryAction = {
		label: 'Login',
		onClick: onClickSecondary,
	}

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

				<Banner
					title='Gain access to a better future.'
					description={`Together, we'll make it happen.`}
					primaryAction={primaryAction}
					secondaryAction={secondaryAction}
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
