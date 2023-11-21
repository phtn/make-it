import { BlockProps } from './type'
import { Action, Cell, GridContainer, Intro, Title } from './styled'

const Blocks = ({ blocks }: BlockProps) => (
	<GridContainer>
		{blocks.map((block) => (
			<Cell key={block.id}>
				<Title title={block.title} />
				<Intro intro={block.intro} />
				<Action
					variant={'ghost'}
					size={'sm'}>
					Read more
				</Action>
			</Cell>
		))}
	</GridContainer>
)

export default Blocks
// Make It In Australia (PH) or MiiA, a one-of-a-kind exclusive club that goes far beyond being just a social organization.
