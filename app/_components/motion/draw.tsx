import { motion } from 'framer-motion'

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i: number) => {
		const delay = 1 + i * 0.5
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			},
		}
	},
}

export const Draw = () => {
	return (
		<motion.svg
			width='600'
			height='600'
			viewBox='0 0 600 600'
			initial='hidden'
			animate='visible'>
			<motion.rect
				width='140'
				height='140'
				x='410'
				y='30'
				rx='30'
				stroke='#0099ff'
				variants={draw}
				custom={3}
			/>
			<motion.line
				x1='220'
				y1='170'
				x2='360'
				y2='30'
				stroke='#00cc88'
				variants={draw}
				custom={2}
			/>
			<motion.circle
				cx='100'
				cy='100'
				r='80'
				stroke='#ff0055'
				variants={draw}
				custom={1}
			/>
		</motion.svg>
	)
}
