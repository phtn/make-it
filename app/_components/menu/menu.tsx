import { Container, MenuItem } from './styled'
import { MenuItemProps } from './types'

const menuItems: MenuItemProps[] = [
	{ href: '/benefits-of-a-mentee', title: 'Benefits of A Mentee' },
	{ href: '/meet-a-mentor', title: 'Meet A Mentor' },
	{ href: '/join-a-class', title: 'Join A Class' },
	{ href: '/contact-us', title: 'Contact Us' },
]

const Menu = () => (
	<Container>
		{menuItems.map((item) => (
			<MenuItem
				key={item.href}
				href={item.href}
				title={item.title}
			/>
		))}
	</Container>
)

export default Menu
