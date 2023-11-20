import Link from 'next/link'
import { Header, HeaderGap } from '../header'
import { Container, Item, GridContainer } from './styled'
import { FeatureItemProps, FeatureProps } from './types'

const NewFeatures = ({ header, features }: FeatureProps) => (
	<Container>
		<Header {...header} />
		<HeaderGap />
		<GridContainer>
			{features.map((feature: FeatureItemProps) => (
				<Link
					className='no-underline'
					key={feature.id}
					href={feature.link}>
					<Item {...feature} />
				</Link>
			))}
		</GridContainer>
	</Container>
)

export default NewFeatures
