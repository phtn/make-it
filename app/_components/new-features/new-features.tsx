import Link from 'next/link'
import { Header, HeaderGap } from '../header'
import { Container, ListItem, GridContainer, List } from './styled'
import { FeatureProps, Item, Props } from './types'

const NewFeatures = ({ header, data }: FeatureProps) => (
	<Container>
		<Header {...header} />
		<HeaderGap />
		<GenericList
			data={data}
			keyExtractor={(item) => `${item}`}
			renderItem={(item) => (
				<Link
					className='no-underline'
					href={item.href}
					key={item.id}>
					<ListItem {...item} />
				</Link>
			)}
		/>
	</Container>
)

const GenericList = ({ data, keyExtractor, renderItem }: Props) => (
	<GridContainer>
		{data.map((item) => (
			<div key={keyExtractor(item)}>{renderItem(item)}</div>
		))}
	</GridContainer>
)

export default NewFeatures
