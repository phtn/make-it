'use client'
import Banner from '../_components/banner'
import Hero from '../_components/hero'
import { HeadlineData } from '../_components/hero/types'
import { AboutAsset } from '../_components/lottie'
import { Grid } from '../_components/motion/grid'
import { Container, Content } from './styled'
import Highlight from '../_components/highlight'
import { Button } from '@/components/ui/button'
import { User2 } from 'lucide-react'
import { toast } from 'sonner'
import Footer from '../_components/footer'

const headlines: HeadlineData[] = [
	{ id: 1, name: '', headline: 'Collaborate' },
	{ id: 2, name: '', headline: 'Explore' },
	{ id: 3, name: '', headline: 'Learn' },
]

const heroProps = {
	subheader: 'meet a mentor',
	description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
	headlines,
}
const hightlightHeader = { tag: 'Hire', title: 'Meet the Mentors' }

const HireButton = () => {
	const onPressHire = () => {
		toast(`You're hiring a mentor!`, {
			description: `That's cool! Would you like to proceed?`,
			action: {
				label: 'Yes',
				onClick: () => toast('Sure you do.'),
			},
		})
	}
	return (
		<Button
			onClick={onPressHire}
			className='mx-3'
			size={'lg'}
			variant={'tertiary'}>
			<User2 className='text-foreground h-4 w-4 mr-2' />
			Hire A Mentor
		</Button>
	)
}

const MeetAMentor = () => (
	<Container>
		<Grid />
		<Content>
			<Hero
				asset={<AboutAsset />}
				primaryProps={heroProps}
			/>
			<Banner
				title='Hire a Mentor today!'
				description={`Your journey begins here.`}
				primaryButton={<HireButton />}
			/>
			<Highlight header={hightlightHeader} />
			<Footer />
		</Content>
	</Container>
)

export default MeetAMentor
