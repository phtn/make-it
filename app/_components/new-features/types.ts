import { ReactNode } from 'react'
import { HeaderProps } from '../header/header'

type FeatureProps = {
	header: HeaderProps
	data: Item[]
}

type Props = {
	data: Item[]
	keyExtractor: (item: Item) => string
	renderItem: (item: Item) => ReactNode
}

type LinkProps = {
	id: number
	href: string
	props: Item
}

interface Item {
	id: number
	href: string
	title: string
	description: string
	src: string
}

export type { Props, Item, FeatureProps, LinkProps }
