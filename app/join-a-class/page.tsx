'use client'
import Banner from '../_components/banner'
import Hero from '../_components/hero'
import { HeadlineData } from '../_components/hero/types'
import { AboutAsset, MeetAsset } from '../_components/lottie'
import { Grid } from '../_components/motion/grid'
import { Container, Content } from './styled'
import Highlight from '../_components/highlight'
import { toast } from 'sonner'
import Footer from '../_components/footer'

const headlines: HeadlineData[] = [
	{ id: 1, name: '', headline: 'Collaborate' },
	{ id: 2, name: '', headline: 'Explore' },
	{ id: 3, name: '', headline: 'Learn' },
]

const heroProps = {
	title: 'Join A Class',
	subheader: 'Browse all our classes.',
	description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
	headlines,
}
const hightlightHeader = { tag: 'Hire', title: 'Meet the Mentors' }

const JoinAClass = () => {
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
		label: 'Sign up',
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
					asset={<MeetAsset />}
					primaryProps={heroProps}
				/>
				<Banner
					title='Join a class today!'
					description={`Your journey begins here.`}
					primaryAction={primaryAction}
					secondaryAction={secondaryAction}
				/>
				<Highlight header={hightlightHeader} />
				<Footer />
			</Content>
		</Container>
	)
}

export default JoinAClass