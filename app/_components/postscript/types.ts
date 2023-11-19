import { HeaderProps } from '../header/header'

type ContentProps = {
	title: string
	description: string
}

type ScriptProps = {
	header?: HeaderProps
	content: ContentProps
	src: string
}

export type { ContentProps, ScriptProps }
