interface Block {
	id: number
	title: string
	intro: string
	description: string
}

type BlockProps = {
	blocks: Block[]
}

export type { Block, BlockProps }
