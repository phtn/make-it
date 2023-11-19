'use client'
import { Header, HeaderGap } from '../_components/header'
import Hero from '../_components/hero'
import { HeadlineData } from '../_components/hero/types'
import { MeetAsset } from '../_components/lottie'
import PostScript from '../_components/postscript'
import PastScript from '../_components/postscript/pastscript'

const header = { tag: 'dive', title: 'The Company' }
const clubContent = {
	title: 'Rea Kristine',
	description: 'Operations',
}

const hopeContent = {
	title: 'Didoy',
	description: `Strategy`,
}

const socialContent = {
	title: 'Raquel',
	description: `Sales & Marketing`,
}

const hazelContent = {
	title: 'Hazel',
	description: `Legal & Compliance`,
}

const headlines: HeadlineData[] = [
	{ id: 1, name: '', headline: 'Behind the scenes' },
	{ id: 2, name: '', headline: 'The Network' },
	{ id: 3, name: '', headline: 'Leadership' },
]

const heroProps = { subtext: 'meet the team', headlines }

const MeetTheTeam = () => (
	<div className=''>
		<Hero
			asset={<MeetAsset />}
			primaryProps={heroProps}
		/>
		<Header
			tag='team'
			title={`Meet the Team`}
		/>
		<HeaderGap />
		<PostScript
			header={header}
			content={clubContent}
			src='/team/rea-v1.jpg'
		/>
		<PastScript
			content={hopeContent}
			src='/lifestyle/life-v1.jpg'
		/>
		<PostScript
			content={socialContent}
			src='/lifestyle/life-v2.jpg'
		/>
		<PastScript
			content={hazelContent}
			src='/lifestyle/life-v3.jpg'
		/>
	</div>
)

export default MeetTheTeam
