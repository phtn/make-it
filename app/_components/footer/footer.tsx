import { Title } from '../title/title'
import {
	GridContainer,
	LinkItem,
	LinkText,
	PrimaryContent,
	PrimaryDetails,
	SecondaryContent,
	TertiaryContent,
} from './styled'
import { FacebookIcon, InstagramIcon, TwitterIcon, XIcon } from 'lucide-react'

const Footer = () => {
	return (
		<GridContainer>
			<Primary />
			<Secondary />
			<Tertiary />
		</GridContainer>
	)
}

const Primary = () => (
	<PrimaryContent>
		<PrimaryDetails>
			<Title title="Make It In Australia" />
		</PrimaryDetails>
	</PrimaryContent>
)

const Secondary = () => (
	<SecondaryContent>
		<div className='h-[72] flex flex-col'>
			<LinkItem href={'/benefits-of-a-mentee'}>
				<LinkText>Benefits of a Mentor</LinkText>
			</LinkItem>
			<LinkItem href={'/meet-a-mentor'}>
				<LinkText>Meet a Mentor</LinkText>
			</LinkItem>
			<LinkItem href={'/join-a-class'}>
				<LinkText>Join a Class</LinkText>
			</LinkItem>
			<LinkItem href={'/contact-us'}>
				<LinkText>Contact Us</LinkText>
			</LinkItem>
			<LinkItem href={'/benefits-of-a-mentee'}>
				<LinkText>Be a Mentee for Free</LinkText>
			</LinkItem>
			<LinkItem href={'/'}>
				<LinkText>Privacy Policy</LinkText>
			</LinkItem>
		</div>
	</SecondaryContent>
)

const Tertiary = () => (
	<TertiaryContent>
		<FacebookIcon className='h-8 w-8 text-white' />
		<InstagramIcon className='h-8 w-8 text-white' />
		<TwitterIcon className='h-8 w-8 text-white' />
	</TertiaryContent>
)
export default Footer
