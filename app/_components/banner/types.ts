import { ReactElement } from 'react'

type BannerProps = {
	title: string
	description: string
	primaryButton: ReactElement
	secondaryButton?: ReactElement
}

export type { BannerProps }
