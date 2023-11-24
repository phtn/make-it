'use client'
import Banner from '../_components/banner'
import Hero from '../_components/hero'
import { AboutAsset } from '../_components/lottie'
import { Container, Content } from './styled'
import { toast } from 'sonner'
import Footer from '../_components/footer'
import { heroProps, Body } from './page'

export const AboutTheCompany = () => {
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
		label: '',
		onClick: onClickPrimary,
	}
	const secondaryAction = {
		label: '',
		onClick: onClickSecondary,
	}
	return (
		<Container>
			<GodRays />
			<Content>
				<Hero
					asset={<AboutAsset />}
					primaryProps={heroProps}
				/>
				<Banner
					title='Join us today!'
					description={`We'll guide you every step of the way.`}
					primaryAction={primaryAction}
					secondaryAction={secondaryAction}
				/>
				<Body />
				<Footer />
			</Content>
		</Container>
	)
}
