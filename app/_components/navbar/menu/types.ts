interface MenuItem {
	href: string
	title: string
}

type ItemProps = {
	index: number
} & MenuItem

type ContainerProps = {
	$index?: number
}

export type { MenuItem, ItemProps, ContainerProps }
