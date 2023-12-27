import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { ContainerProps, ItemProps } from './types'

const Container = tw.div`
  hidden lg:flex items-center justify-center
`

const ItemContainer = tw.div<ContainerProps>`
  ${(p) =>
		p.$index === 4
			? `bg-accent text-background hover:text-primary-foreground font-bold`
			: `text-background`}
  mx-2 text-[10px] tracking-wider font-sans px-3 py-1 rounded
	dark:text-foreground dark:hover:text-primary-foreground
  hover:text-primary-foreground hover:bg-slate-800
  transition-all duration-500 uppercase
`

const Item = ({ href, title, index }: ItemProps) => (
	<Link
		href={href}
		className='no-underline'>
		<ItemContainer $index={index}>{title}</ItemContainer>
	</Link>
)

const LogoImage = tw.div`
	bg-[url('/logo/logo-v1.svg')] bg-center bg-no-repeat 
	h-[36px] w-[36px] z-20
`
const LogoHomelink = tw(Link)`
	no-underline ml-10	
`

export { Container, Item }
