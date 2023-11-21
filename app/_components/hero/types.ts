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

type ProtosProps = {
	asset: ReactElement
	primaryProps: PrimaryProtos
}

type PrimaryProps = {
	subheader: string
	description: string
	headlines: HeadlineData[]
}

type PrimaryProtos = {
	title: string
	subheader: string
	description: string
	headlines: HeadlineData[]
}

export type {
	HeadlineData,
	HeroProps,
	PrimaryProps,
	PrimaryProtos,
	ProtosProps,
}
