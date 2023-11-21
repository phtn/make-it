import { ReactElement } from 'react'

type Action = {
	onClick: () => void
	label: string
}

type BannerProps = {
	title: string
	description: string
	primaryAction: Action
	secondaryAction: Action
}

type PrimaryCellProps = {
	title: string
	description: string
}

export type { Action, BannerProps, PrimaryCellProps }
