import Link from 'next/link'
import {
	HeadlineContent,
	Container,
	Content,
	HeroPrimary,
	HeroSecondary,
	PrimaryContent,
	Subheader,
	Subtext,
	Title,
} from './styled'
import { motion } from 'framer-motion'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { getNextElement } from '@/app/_utils/helpers'
import { easeInOut } from 'popmotion'
import { HeaderProps, HeadlineProps, HeroProps, PrimaryProps } from './types'

const Protos = ({ asset, primaryProps }: HeroProps) => (
	<Container>
		<Content>
			<Primary {...primaryProps} />
			<Secondary asset={asset} />
		</Content>
	</Container>
)

const Primary = ({
	title,
	subheader,
	description,
	headlines,
}: PrimaryProps) => {
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
		() => (
			<Headlines
				index={index}
				headlines={headlines}
			/>
		),
		[index, headlines]
	)

	return (
		<HeroPrimary>
			<PrimaryContent>
				<Header
					title={title}
					subheader={subheader}
				/>
				<Headline />
				<Description description={description} />
			</PrimaryContent>
		</HeroPrimary>
	)
}

const Header = ({ title, subheader }: HeaderProps) => (
	<div>
		<Link
			href={'/'}
			className='no-underline'>
			<Title>{title}</Title>
		</Link>
		<Subheader>{subheader}</Subheader>
	</div>
)

const Headlines = ({ index, headlines }: HeadlineProps) => (
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
		<HeadlineContent headline={headlines[index].headline} />
	</motion.div>
)

const Description = ({ description }: { description: string }) => (
	<motion.div
		className='z-20 flex'
		initial={{ opacity: 0, x: -20 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.8, delay: 1.8, ease: 'easeInOut' }}>
		<Subtext subtext={description} />
	</motion.div>
)

const Secondary = ({ asset }: { asset: ReactElement }) => (
	<HeroSecondary>{asset}</HeroSecondary>
)

export default Protos