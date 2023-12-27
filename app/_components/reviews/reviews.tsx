import { Header, HeaderGap } from '../header'
import { reviews } from './reviews-data'
import { Container } from './styled'
import { MovingCards } from '@/app/_components/moving-cards'

const Reviews = () => {
	return (
		<Container>
			<Header
				tag='latest'
				title='Customer Reviews'
			/>
			<HeaderGap />
			<MovingCards
				items={reviews}
				direction='right'
				speed='slow'
			/>
		</Container>
	)
}

export default Reviews
