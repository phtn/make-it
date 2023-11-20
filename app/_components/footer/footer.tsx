import Image from 'next/image'
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
		{/* <Image
			alt=''
			src={'/logo/Outsourcee_Logo_white.webp'}
			height={400}
			width={400}
			className='w-56'
		/> */}
		<PrimaryDetails>
			<p className='leading-[10px] text-xs text-white'>Developed by</p>
			<p className='leading-[10px] text-sm text-white font-bold'>
				Make It In Australia PH
			</p>
			<div className='w-44 '>
				<p className='text-xs text-white font-medium'>Address</p>
			</div>
		</PrimaryDetails>
	</PrimaryContent>
)

const Secondary = () => (
	<SecondaryContent>
		<div className='h-[72] flex flex-col'>
			<LinkItem href={'/'}>
				<LinkText>Benefits of a Mentor</LinkText>
			</LinkItem>
			<LinkItem href={'/meet-a-mentor'}>
				<LinkText>Meet a Mentor</LinkText>
			</LinkItem>
			<LinkItem href={'/'}>
				<LinkText>Join a Class</LinkText>
			</LinkItem>
			<LinkItem href={'/'}>
				<LinkText>Contact Us</LinkText>
			</LinkItem>
			<LinkItem href={'/'}>
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
