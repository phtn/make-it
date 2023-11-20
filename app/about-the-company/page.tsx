'use client'
import Banner from '../_components/banner'
import Hero from '../_components/hero'
import PostScript from '../_components/postscript'
import PastScript from '../_components/postscript/pastscript'
import { Header, HeaderGap } from '../_components/header'
import { HeadlineData } from '../_components/hero/types'
import { AboutAsset } from '../_components/lottie'
import { Grid } from '../_components/motion/grid'
import { Container, Content } from './styled'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Users2 } from 'lucide-react'

const header = { tag: 'dive', title: 'The Company' }
const clubContent = {
	title: 'A Club',
	description:
		'MiiA is an exclusive club for Filipinos that offers a tight-knit community and tailored resources to help Filipinos navigate the challenges of immigration, employment, and settlement in Australia. With its specialized focus on the Filipino community, it provides a unique and supportive environment for individuals looking to pursue their dreams Down Under.',
}

const hopeContent = {
	title: 'A Hope Builder',
	description: `MiiA serves as a Hope Builder, offering a lifeline for Filipinos seeking an escape from the vicious cycle of crab mentality, chismis (gossip), and utang na loob (debt of gratitude) often prevalent in the Philippines. By providing a path to a new life in Australia, the organization inspires hope, fostering a fresh start and the promise of a brighter future free from these constraints."`,
}

const socialContent = {
	title: 'A Social Enterprise',
	description: `MiiA stands as a Social Enterprise, prioritizing impact over profit by dedicating its focus to opening doors and creating opportunities for those who have been marginalized and disadvantaged. Its mission goes beyond sales, as it actively empowers individuals with limited options.`,
}

const headlines: HeadlineData[] = [
	{ id: 1, name: '', headline: 'Club' },
	{ id: 2, name: '', headline: 'Hope Builder' },
	{ id: 3, name: '', headline: 'Social Enterprise' },
]

const heroProps = {
	subheader: 'about the company',
	description: `Join Us on this Exciting Journey, Where Together, We'll Discover Beautiful Possibilities and Leave a Lasting Impact on the World. Today, You and I, Can Make A difference.`,
	headlines,
}
const JoinButton = () => {
	const onPreseJoin = () => {
		toast(`Hurray!`, {
			description: `Welcome aboard!`,
			action: {
				label: 'Next',
				onClick: () => toast('Uhmm, one sec.'),
			},
		})
	}
	return (
		<Button
			onClick={onPreseJoin}
			className='mx-3'
			size={'lg'}
			variant={'secondary'}>
			<Users2 className='text-background/70 h-4 w-4 mr-2' />
			Join us!
		</Button>
	)
}
const AboutTheCompany = () => {
	return (
		<Container>
			<Grid />
			<Content>
				<Hero
					asset={<AboutAsset />}
					primaryProps={heroProps}
				/>
				<Banner
					title='Join us today!'
					description={`We'll guide you every step of the way.`}
					primaryButton={<JoinButton />}
				/>
				<Body />
			</Content>
		</Container>
	)
}

const Body = () => (
	<>
		<Header
			tag='learn'
			title={`What we're all about`}
		/>
		<HeaderGap />
		<PostScript
			header={header}
			content={clubContent}
			src='/company/club-v1.webp'
		/>
		<PastScript
			content={hopeContent}
			src='/company/hope-v1.webp'
		/>
		<PostScript
			content={socialContent}
			src='/company/social-v1.webp'
		/>
	</>
)

export default AboutTheCompany
