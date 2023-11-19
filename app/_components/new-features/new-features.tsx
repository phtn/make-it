import { Header, HeaderGap } from '../header'
import { Container, Item, GridContainer } from './styled'
import { FeatureItemProps, FeatureProps } from './types'

const NewFeatures = ({ header, features }: FeatureProps) => (
	<Container>
		<Header {...header} />
		<HeaderGap />
		<GridContainer>
			{features.map((feature: FeatureItemProps) => (
				<Item
					key={feature.id}
					{...feature}
				/>
			))}
		</GridContainer>
	</Container>
)

export default NewFeatures
