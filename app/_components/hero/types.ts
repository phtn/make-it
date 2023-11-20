import { ReactElement } from 'react'

type HeadlineData = {
	id: number
	name: string
	headline: string
}

type HeroProps = {
	asset: ReactElement
	primaryProps: PrimaryProps
}

type PrimaryProps = {
	subheader: string
	description: string
	headlines: HeadlineData[]
}

export type { HeadlineData, HeroProps, PrimaryProps }
