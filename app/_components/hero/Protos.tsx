import Link from 'next/link'
import {
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
import { PrimaryProtos, ProtosProps } from './types'

const Protos = ({ asset, primaryProps }: ProtosProps) => (
	<HeroContainer>
		<HeroContent>
			<Primary {...primaryProps} />
			<Secondary asset={asset} />
		</HeroContent>
	</HeroContainer>
)

const Primary = ({
	subheader,
	description,
	headlines,
	title,
}: PrimaryProtos) => {
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
						<Title>{title}</Title>
					</Link>

					<Subheader>{subheader}</Subheader>
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
					<Subtext subtext={description} />
				</motion.div>
			</PrimaryContent>
		</HeroPrimary>
	)
}

const Secondary = ({ asset }: { asset: ReactElement }) => (
	<HeroSecondary>{asset}</HeroSecondary>
)

export default Protos
