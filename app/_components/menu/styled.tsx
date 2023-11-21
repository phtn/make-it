import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { MenuItemProps } from './types'

const Container = tw.div`
  hidden lg:flex items-center justify-center
`
const Item = tw.div`
  mx-2 text-sm font-sans font-medium 
  text-foreground/50 px-3 py-1 rounded
  hover:text-primary-foreground hover:bg-slate-800
  transition-all duration-500

`
const MenuItem = ({ href, title }: MenuItemProps) => (
	<Link
		href={href}
		className='no-underline'>
		<Item>{title}</Item>
	</Link>
)

export { Container, MenuItem }
