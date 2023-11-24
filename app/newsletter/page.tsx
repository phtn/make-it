'use client'
import Banner from '../_components/banner'
import Hero from '../_components/hero'
import { HeadlineData } from '../_components/hero/types'
import { AboutAsset, ListAsset, MeetAsset } from '../_components/lottie'
import { Grid } from '../_components/motion/grid'
import { Container, Content } from './styled'
import Highlight from '../_components/highlight'
import { toast } from 'sonner'
import Footer from '../_components/footer'
import Reviews from '../_components/reviews'

const headlines: HeadlineData[] = [
	{ id: 1, name: '', headline: 'Collaborate' },
	{ id: 2, name: '', headline: 'Explore' },
	{ id: 3, name: '', headline: 'Learn' },
]

const heroProps = {
	title: 'Newsletter',
	subheader: 'Get weekly updates!',
	description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
	headlines,
}
const hightlightHeader = { tag: 'Hire', title: 'Meet the Mentors' }

const Newsletter = () => {
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
		label: 'Subscribe',
		onClick: onClickPrimary,
	}
	const secondaryAction = {
		label: 'Login',
		onClick: onClickSecondary,
	}

	return (
		<Container>
			<Grid />
			<Content>
				<Hero
					asset={<ListAsset />}
					primaryProps={heroProps}
				/>
				<Banner
					title='Subscribe to our Newsletter!'
					description={`Get the latest updates.`}
					primaryAction={primaryAction}
					secondaryAction={secondaryAction}
				/>
				<Reviews />
				<Footer />
			</Content>
		</Container>
	)
}

export default Newsletter
