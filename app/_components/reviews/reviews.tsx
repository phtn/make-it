import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Header, HeaderGap } from '../header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Container,
	Item,
	ReviewContent,
	Cell,
	Stack,
	TitleContainer,
	ContentContainer,
	AuthorContainer,
	AuthorText,
	ContentText,
	TitleText,
	AuthorContent,
} from './styled'

export interface Review {
	id: number
	author: string
	avatar: string
	title: string
	content: string
	stars: number
}

export const reviews: Review[] = [
	{
		id: 0,
		author: 'Emmet',
		avatar: 'https://github.com/shadcn.png',
		title: 'Everything is awesome!',
		content: `Everything is awesome. Everything is cool when you're part of a team. Everything is awesome. When you're living out a dream.`,
		stars: 5,
	},
	{
		id: 1,
		author: 'Pengfei Z.',
		avatar: 'https://github.com/gaearon.png',
		title: 'Excellent choice!',
		content: `They quickly assigned a mentor (Mina) to me. She's very supportive, patient and very productive, and all my assessments were marked within 2 days. I would like to say “Thank you Mina and The MIIA team!”.`,
		stars: 5,
	},
	{
		id: 2,
		author: 'Farrah G.',
		avatar: 'https://github.com/sugoi-wada.png',
		title: 'Matched Qualities!',
		content: `I'm in my first year of using MIIA and I have been guided by the support team every step of the way to get the perfect mentor that matches with my qualities and aligned with my values.`,
		stars: 5,
	},
	{
		id: 3,
		author: 'Lucy L.',
		avatar: 'https://github.com/sugoi-wada.png',
		title: 'Highly Recommended!',
		content: `This mentor program is amazing! They provided the best student support ever. They spent generous amount of time explaining the answers to your questions. I appreciate the way I was assisted with my assignments. 100% happy with the results!`,
		stars: 5,
	},
	{
		id: 4,
		author: 'Bianca T.',
		avatar: 'https://github.com/amandavilela.png',
		title: '💯',
		content: `Everything turned out really great! I've always felt supported from the beginning and always able to reach out for help when needed. Special shout-out to Miller (my mentor) for his amazing support through both my cert 4 and diploma in finance.`,
		stars: 5,
	},
]

const Reviews = () => {
	return (
		<Container>
			<Header
				tag='latest'
				title='Customer Reviews'
			/>
			<HeaderGap />
			<ScrollArea>
				<ReviewItems />
				<ScrollBar orientation='horizontal' />
			</ScrollArea>
		</Container>
	)
}

const ReviewItems = () => (
	<ReviewContent>
		{reviews.map((item) => (
			<Item key={item.id}>
				<Cell>
					<Stack>
						<Stars />
						<Title title={item.title} />
						<Content content={item.content} />
						<Author
							author={item.author}
							avatar={item.avatar}
						/>
					</Stack>
				</Cell>
			</Item>
		))}
	</ReviewContent>
)

const star = `bg-[url('/icons/star-icon.svg')] dark:bg-[url('/icons/star-light-icon.svg')] bg-contain bg-no-repeat h-4 w-4 mr-1.5`
const array = new Array(5).fill(star)

const Stars = () => (
	<div className='flex'>
		{array.map((item, index) => (
			<div
				key={item + index}
				className={item}
			/>
		))}
	</div>
)

const Title = ({ title }: { title: string }) => (
	<TitleContainer>
		<TitleText>{title}</TitleText>
	</TitleContainer>
)

const Content = ({ content }: { content: string }) => (
	<ContentContainer>
		<ContentText>{content}</ContentText>
	</ContentContainer>
)

const Author = ({ author, avatar }: Pick<Review, 'author' | 'avatar'>) => (
	<AuthorContainer>
		<AuthorContent>
			<Avatar className='mr-3 h-8 w-8'>
				<AvatarImage
					src={avatar}
					alt='@shadcn'
				/>
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<AuthorText>{author}</AuthorText>
		</AuthorContent>
	</AuthorContainer>
)

export default Reviews