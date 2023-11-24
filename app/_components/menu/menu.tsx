import { Container, Item } from './styled'
import { MenuItem } from './types'

const menuItems: MenuItem[] = [
	{ href: '/be-a-mentee', title: 'Be A Mentee for Free!' },
	{ href: '/meet-a-mentor', title: 'Meet A Mentor' },
	{ href: '/join-a-class', title: 'Join A Class' },
	{ href: '/contact-us', title: 'Contact Us' },
]

const Menu = () => (
	<Container>
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
