import { Button } from '@/components/ui/button'
import {
	ActionContainer,
	LandingContainer,
	HeroContainer,
	HeroContent,
	HeroLabelContainer,
	HeroPrimary,
	HeroSecondary,
	PrimaryLabel,
	SecondaryLabel,
	LandingContent,
} from './styled'
import { ArrowDownCircleIcon } from 'lucide-react'
import { ActionProps, LandingProps } from './types'
import { Grid } from '../motion/grid'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { getNextElement } from '@/app/_utils/helpers'
import ScreenshotModule from '../screenshots'
import DownloadLinks from '../download/download'
import { WaveOne } from '../panels/styled'
import { HeroTwo } from '../hero/heroTwo'
import FirstPanel from '../panels/first-panel'
import Features from '../features/features'
import { features } from '../features/features-data'

const Landing = ({ scrollToNext }: LandingProps) => {
	const headerProps = { tag: 'discover', title: 'Top Features' }
	return (
		<LandingContainer>
			<LandingContent>
				<HeroTwo />
				<Features
					headerProps={headerProps}
					features={features}
				/>

				{/* <FirstPanel /> */}
			</LandingContent>
			{/* <ScreenshotModule /> */}
			{/* <Hero /> */}
			{/* <DownloadLinks /> */}
			{/* <WaveOne /> */}
		</LandingContainer>
	)
}

const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				{/* <PrimaryModule /> */}
				<SecondaryModule />
			</HeroContent>
		</HeroContainer>
	)
}

const headlines = [
	'Achieve more.',
	'Simplify your workload.',
	'Delegate with confidence.',
]

const PrimaryModule = () => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const timeout = setTimeout((t) => {
			getNextElement(headlines, index, setIndex)
		}, 5000)

		return () => {
			clearTimeout(timeout)
		}
	}, [index])

	const Headline = useCallback(() => {
		return <PrimaryLabel>{headlines[index]}</PrimaryLabel>
	}, [index, headlines])

	return (
		<motion.div
			className='z-20'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7, delay: 1.6, ease: 'easeInOut' }}>
			<HeroPrimary>
				<HeroLabelContainer>
					<motion.div
						key={index}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ x: -15, opacity: 0 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}>
						<Headline />
					</motion.div>
				</HeroLabelContainer>
			</HeroPrimary>
		</motion.div>
	)
}

const SecondaryModule = () => (
	<motion.div
		className=''
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.7, delay: 1.65, ease: 'easeInOut' }}>
		<HeroSecondary>
			<HeroLabelContainer>
				<motion.div
					initial={{ y: 16, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 2, ease: 'easeInOut' }}>
					<SecondaryLabel>Experience effortless delegation.</SecondaryLabel>
				</motion.div>
			</HeroLabelContainer>
		</HeroSecondary>
	</motion.div>
)

const Action = ({ onClick }: ActionProps) => {
	return (
		<ActionContainer>
			<Button
				variant='default'
				size='lg'
				onClick={onClick}>
				<span className='text-accet pr-20'> Explore</span>
				<ArrowDownCircleIcon className='h-7 w-7 text-card' />
			</Button>
		</ActionContainer>
	)
}

export default Landing
