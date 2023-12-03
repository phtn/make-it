import { HomeMenu } from '../navbar/home-nav/home-nav'
import { Container, Item, Logo } from './styled'
import { MenuItem } from './types'

const menuItems: MenuItem[] = [
	{ href: '/benefits-of-a-mentee', title: 'Benefits of a Mentee' },
	{ href: '/meet-a-mentor', title: 'Meet A Mentor' },
	{ href: '/join-a-class', title: 'Join A Class' },
	{ href: '/contact-us', title: 'Contact Us' },
	{ href: '/be-a-mentee', title: 'Be A Mentee for Free!' },
]

const Menu = () => (
	<Container>
		<Logo />
		<HomeMenu />
		{menuItems.map((item, index) => (
			<Item
				key={item.href}
				href={item.href}
				title={item.title}
				index={index}
			/>
		))}
	</Container>
)

export default Menu
