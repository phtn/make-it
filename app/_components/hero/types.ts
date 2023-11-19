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
	subtext: string
	headlines: HeadlineData[]
}

export type { HeadlineData, HeroProps, PrimaryProps }
