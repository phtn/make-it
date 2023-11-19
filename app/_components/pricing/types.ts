import { HeaderProps } from '../header/header'

type PricingProps = {
	header: HeaderProps
	items: ItemProps[]
}

type F = {
	id?: number
	title: string
	included: boolean
}

type ItemProps = {
	id: number
	description: string
	title: string
	price: number
	features: F[]
	duration: string
}

interface I {
	$id: number
}

export type { ItemProps, PricingProps, I, F }
