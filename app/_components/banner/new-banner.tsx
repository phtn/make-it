import {
	Cell,
	Container,
	NewCell,
	NewContainer,
	NewPrimary,
	PrimaryAction,
	SecondaryAction,
} from './styled'
import { BannerProps } from './types'

const NewBanner = (props: BannerProps) => {
	const { title, description, primaryAction, secondaryAction } = props
	return (
		<NewContainer>
			<NewPrimary
				title={title}
				description={description}
			/>
			<Cell>
				<PrimaryAction {...primaryAction} />
				<SecondaryAction {...secondaryAction} />
			</Cell>
		</NewContainer>
	)
}

export default NewBanner
