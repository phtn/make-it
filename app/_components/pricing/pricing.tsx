import { Header, HeaderGap } from '../header'
import { Container, Item, GridContainer } from './styled'
import { ItemProps, PricingProps } from './types'
import { membership } from './pricing-data'

const pricingHeader = { tag: 'select', title: 'Membership' }

const Pricing = () => (
	<Container>
		<Header {...pricingHeader} />
		<HeaderGap />
		<GridContainer>
			{membership.map((item: ItemProps) => (
				<Item
					key={item.id}
					{...item}
				/>
			))}
		</GridContainer>
	</Container>
)

export default Pricing
