import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { ContainerProps, ItemProps } from './types'

const Container = tw.div`
  hidden lg:flex items-center justify-center
`
const ItemContainer = tw.div<ContainerProps>`
  ${(p) =>
		p.$index === 0
			? `bg-accent text-background hover:text-primary-foreground font-bold`
			: `text-foreground/70`}
  mx-2 text-sm font-sans font-medium px-3 py-1 rounded 
	dark:text-foreground dark:hover:text-primary-foreground
  hover:text-primary-foreground hover:bg-slate-800
  transition-all duration-500 

`
const Item = ({ href, title, index }: ItemProps) => (
	<Link
		href={href}
		className='no-underline'>
		<ItemContainer $index={index}>{title}</ItemContainer>
	</Link>
)

export { Container, Item }
