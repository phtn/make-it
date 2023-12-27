import {
	Container,
	Content,
	HeroPrimary,
	HeroSecondary,
	PrimaryContent,
	Subtext,
} from './styled'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import { HeroProps, PrimaryProps } from './types'

const Protos = ({ asset, primaryProps }: HeroProps) => (
	<Container>
		<Content>
			<Primary {...primaryProps} />
			<Secondary asset={asset} />
		</Content>
	</Container>
)

const Primary = ({
	description,
}: PrimaryProps) => {

	return (
		<HeroPrimary>
			<PrimaryContent>

				<Description description={description} />
			</PrimaryContent>
		</HeroPrimary>
	)
}

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
