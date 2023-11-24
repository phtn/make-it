'use client'
import Banner from '../_components/banner'
import Hero from '../_components/hero'
import { HeadlineData } from '../_components/hero/types'
import { MeetAsset } from '../_components/lottie'
import { Container, Content } from './styled'
import { toast } from 'sonner'
import Footer from '../_components/footer'
import Reviews from '../_components/reviews'
import GodRays from '../_components/godrays'

const headlines: HeadlineData[] = [
	{ id: 1, name: '', headline: 'Collaborate' },
	{ id: 2, name: '', headline: 'Explore' },
	{ id: 3, name: '', headline: 'Learn' },
]

const heroProps = {
	title: 'Testimonials',
	subheader: 'Read client feedbacks.',
	description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
	headlines,
}
const hightlightHeader = { tag: 'Hire', title: 'Meet the Mentors' }

const Testimonials = () => {
	const onClickPrimary = () => {
		toast(`You're hiring a mentor!`, {
			description: `That's cool! Would you like to proceed?`,
			action: {
				label: 'Yes',
				onClick: () => toast('Sure you do.'),
			},
		})
	}
	const onClickSecondary = () => {
		toast(`You're hiring a mentor!`, {
			description: `That's cool! Would you like to proceed?`,
			action: {
				label: 'Yes',
				onClick: () => toast('Sure you do.'),
			},
		})
	}
	const primaryAction = {
		label: 'Hire a mentor',
		onClick: onClickPrimary,
	}
	const secondaryAction = {
		label: 'Login',
		onClick: onClickSecondary,
	}

	return (
		<Container>
			<GodRays />
			<Content>
				<Hero
					asset={<MeetAsset />}
					primaryProps={heroProps}
				/>
				<Banner
					title='Hire a mentor today!'
					description={`Your journey begins here.`}
					primaryAction={primaryAction}
					secondaryAction={secondaryAction}
				/>
				<Reviews />
				<Footer />
			</Content>
		</Container>
	)
}

export default Testimonials
