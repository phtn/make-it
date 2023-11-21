type FeatureProps<T> = {
	header: FeatureHeaderProps
	features: T[]
}
type FeatureHeaderProps = {
	tag: string
	title: string
}

type FeatureItemProps = {
	description: string
	id: number
	title: string
	src: string
	link: string
}

export type { FeatureProps, FeatureHeaderProps, FeatureItemProps }
