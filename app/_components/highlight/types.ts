import { ReactElement } from 'react'
import { HeaderProps } from '../header/header'

type HighlightProps = {
	header: HeaderProps
}

type TabTriggerProps = {
	id: number
	value: string
	title: string
}

type TabContentProps = {
	id: number
	value: string
	content: ReactElement
}

type ProfileContentProps = {
	summary: string
}

export type {
	HighlightProps,
	ProfileContentProps,
	TabContentProps,
	TabTriggerProps,
}
