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

const heroProps = { subtext: 'about the company', headlines }

const AboutTheCompany = () => (
	<Container>
		<Grid />
		<Content>
			<Hero
				asset={<AboutAsset />}
				primaryProps={heroProps}
			/>
			<Banner />
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
		</Content>
	</Container>
)

export default AboutTheCompany
