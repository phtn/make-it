import { LandingContainer, LandingContent } from './styled'
import { how } from '../new-features/features-data'
import { MetricItemProps } from '../metrics-banner/types'
import { LottFile, Sydney } from '../lottie'
import { HeadlineData } from '../hero/types'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import ImageTree from '../image-tree'
import Terran from '../hero/Terran'
import dynamic from 'next/dynamic'
import { whyChooseUsData } from './data'

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

const MetricsBanner = dynamic(() => import('../metrics-banner'))
const Banner = dynamic(() => import('../banner'))
const Pricing = dynamic(() => import('../pricing'))
const Highlight = dynamic(() => import('../highlight'))
const Reviews = dynamic(() => import('../reviews'))
const NewFeatures = dynamic(() => import('../new-features'))
const Footer = dynamic(() => import('../footer'))

const Landing = () => {
	const whyChooseUsHeader = { tag: 'discover', title: 'Why Choose Us?' }
	const howItWorksHeader = { tag: 'discover', title: 'How The Process Works' }
	const highlightHeader = { tag: 'mentor', title: 'Top Mentors' }
	const heroProps = {
		title: 'Make It In Australia',
		subheader: 'Hire a mentor today!',
		// description: `United by a Common Goal to Build a Better World. With a Team of Passionate Hope Builders, Visionaries, and Talents Willing To Architect Their Future. Your Journey Begins here.`,
		// description: `This is the opportunity you've been waiting for! Be one of the successful students who found their place in Australia. Together, you can make it too!`,
		description: '',
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
					<Terran
						asset={<ImageTree />}
						primaryProps={heroProps}
					/>
				</motion.div>

				<Banner
					title='Gain access to a better future.'
					description={`Together, we'll make it happen.`}
					primaryAction={primaryAction}
					secondaryAction={secondaryAction}
				/>
				<NewFeatures
					header={whyChooseUsHeader}
					data={whyChooseUsData}
				/>
				<Banner
					title='Gain access to a better future.'
					description={`Together, we'll make it happen.`}
					primaryAction={primaryAction}
					secondaryAction={secondaryAction}
				/>
				<NewFeatures
					header={howItWorksHeader}
					data={how}
				/>

				{/* <Highlight header={highlightHeader} /> */}
				{/* <Pricing /> */}
				<Reviews />
				<FooterAnimation />
				<Footer />
			</LandingContent>
		</LandingContainer>
	)
}

const FooterAnimation = () => (
	<div className='grid md:grid-cols-3'>
		<LottFile
			animationData={Sydney}
			loop={false}
			style={{}}
		/>
		<div className=' col-span-2'></div>
	</div>
)

export default Landing
