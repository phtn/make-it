import { Button } from '@/components/ui/button'
import { Cell, Container, Item, Label, Value } from './styled'
import { LogIn, Users2 } from 'lucide-react'

const Banner = () => (
	<Container>
		<Cell>
			<Item>
				<Value>Join us today!</Value>
				<Label>We'll guide you every step of the way.</Label>
			</Item>
		</Cell>
		<Cell>
			<Button
				className='mx-3'
				size={'lg'}
				variant={'secondary'}>
				<Users2 className='text-foreground h-4 w-4 mr-2' />
				Become a member
			</Button>
			<Button
				className='mx-3'
				size={'lg'}
				variant={'outline'}>
				Login
				<LogIn className='text-foreground h-4 w-4 ml-2' />
			</Button>
		</Cell>
	</Container>
)

export default Banner
