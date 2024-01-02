import { ReactElement } from 'react'

type TertiaryDetail = {
	title: string
	subtext: string
}
type TertiaryProps = {
	href: string
	icon: ReactElement
	details: TertiaryDetail
}

export type { TertiaryDetail, TertiaryProps }
