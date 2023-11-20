import { Button } from '@/components/ui/button'
import { Cell, Container, Item, Label, Value } from './styled'
import { LogIn, Users2 } from 'lucide-react'
import { BannerProps } from './types'

const Banner = ({ title, description, primaryButton }: BannerProps) => (
	<Container>
		<Cell>
			<Item>
				<Value>{title}</Value>
				<Label>{description}</Label>
			</Item>
		</Cell>
		<Cell>
			{primaryButton}
			<Button
				className='mx-3 py-1'
				size={'lg'}
				variant={'secondary'}>
				Login
				<LogIn className='text-background/70 h-4 w-4 ml-4' />
			</Button>
		</Cell>
	</Container>
)

export default Banner
