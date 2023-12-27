import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	HighlightProps,
	ProfileContentProps,
	TabContentProps,
	TabTriggerProps,
} from './types'
import { HighlightHeader } from './header'
import {
	Container,
	Content,
	DesktopAvatar,
	MobileAvatar,
	PrimaryContent,
	SecondaryContent,
	Stack,
} from './styled'
import { Header } from '../header'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { toast } from 'sonner'

const Highlight = ({ header }: HighlightProps) => (
	<div className='my-44'>
		<Header {...header} />

		<Container>
			<Primary />
			<Secondary />
		</Container>
	</div>
)

const Primary = () => (
	<PrimaryContent>
		<DesktopAvatar
			alt=''
			src={'/lifestyle/life-v5.jpg'}
			height={500}
			width={500}
		/>
	</PrimaryContent>
)

const Secondary = () => {
	const onPressBook = () => {
		toast('Button works!', {
			description: 'Would you like to proceed?',
			action: {
				label: 'Yes',
				onClick: () => toast('Sweet!'),
			},
		})
	}
	return (
		<SecondaryContent>
			<Stack>
				<Content>
					<MobileAvatar />
					<HighlightHeader
						tag='meet'
						title='Samantha'
						rating={(5).toFixed(1).toString()}
						reviews={78}
						subtext='Computer Engineer'
					/>
				</Content>
				<Details />

				<Button
					size={'lg'}
					onClick={onPressBook}
					className=''>
					Book now <ArrowUpRight className='h-4 w-4 ml-2' />
				</Button>
			</Stack>
		</SecondaryContent>
	)
}

const ProfileContent = ({ summary }: ProfileContentProps) => <>{summary}</>

const list = 'justify-start bg-transparent'
const trigger = `px-6 border-b border-slate-300`
const content = `p-3 h-[100px] md:w-[450px]`

const triggers: TabTriggerProps[] = [
	{ id: 0, value: 'profile', title: 'Profile' },
	{ id: 1, value: 'achievements', title: 'Achievements' },
	{ id: 2, value: 'certs', title: 'Certificates' },
]
const contents: TabContentProps[] = [
	{
		id: 0,
		value: 'profile',
		content: <ProfileContent summary='Profile Summary' />,
	},
	{
		id: 1,
		value: 'achievements',
		content: <ProfileContent summary='Achievements Summary' />,
	},
	{
		id: 2,
		value: 'certs',
		content: <ProfileContent summary='Certs Summary' />,
	},
]

const Details = () => (
	<Tabs
		defaultValue='profile'
		className=''>
		<TabsList className={list}>
			{triggers.map((item) => (
				<TabsTrigger
					key={item.id}
					className={trigger}
					value={item.value}>
					{item.title}
				</TabsTrigger>
			))}
		</TabsList>
		{contents.map((item) => (
			<TabsContent
				key={item.id}
				className={content}
				value={item.value}>
				{item.content}
			</TabsContent>
		))}
	</Tabs>
)

export default Highlight
