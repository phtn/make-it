import Link from 'next/link'
import Lottie from 'lottie-react'
import {
	FooterContent,
	FooterItem,
	HeadlineContent,
	HeroContainer,
	HeroContent,
	HeroPrimary,
	HeroSecondary,
	PrimaryContent,
	Subheader,
	Subtext,
	Title,
	WaveOne,
} from './styled'
import { motion } from 'framer-motion'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { getNextElement } from '@/app/_utils/helpers'
import { easeInOut } from 'popmotion'
import { HeroProps, PrimaryProps } from './types'

const Hero = ({ asset, primaryProps }: HeroProps) => (
	<HeroContainer>
		<HeroContent>
			<Primary {...primaryProps} />
			<Secondary asset={asset} />
		</HeroContent>
	</HeroContainer>
)

const Primary = ({ subtext, headlines }: PrimaryProps) => {
	const [index, setIndex] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			getNextElement(headlines, index, setIndex)
			setCount((prev) => prev + 1)
		}, 7000)
		return () => {
			clearTimeout(timeout)
		}
	}, [index, count, headlines])

	const Headline = useCallback(
		() => <HeadlineContent headline={headlines[index].headline} />,
		[index, headlines]
	)

	return (
		<HeroPrimary>
			<PrimaryContent>
				<div className=''>
					<Link
						href={'/'}
						className='no-underline'>
						<Title>Make it in Australia</Title>
					</Link>

					<Subheader>{subtext}</Subheader>
				</div>
				<motion.div
					key={index}
					initial={{ x: 10, opacity: 0, scaleX: 0.97 }}
					animate={{ x: 0, opacity: 1, scaleX: 1 }}
					transition={{
						duration: 0.55,
						ease: 'easeInOut',
						easings: easeInOut,
					}}
					exit={{ y: -15, opacity: 0, scaleX: 0.95 }}>
					<Headline />
				</motion.div>
				<motion.div
					className='z-20 flex'
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 1.8, ease: 'easeInOut' }}>
					<Subtext
						subtext='Experience the newest way to delegate. The ultimate app to shop
							all kinds of services, provided by select skilled and verified
							professionals.'
					/>
				</motion.div>
			</PrimaryContent>
		</HeroPrimary>
	)
}

const Secondary = ({ asset }: { asset: ReactElement }) => (
	<HeroSecondary>{asset}</HeroSecondary>
)

const Footer = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.8, delay: 1 }}>
		<WaveOne>
			<FooterContent>
				<Link href={'/'}>
					<FooterItem></FooterItem>
				</Link>
			</FooterContent>
		</WaveOne>
	</motion.div>
)

export default Hero
