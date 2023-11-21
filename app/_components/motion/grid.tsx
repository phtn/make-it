'use client'

import useToggleMode from '@/app/_utils/hooks/useToggleMode'
import { useAnimation, motion } from 'framer-motion'
import { MutableRefObject, useRef, useEffect, useLayoutEffect } from 'react'
import tw from 'tailwind-styled-components'

type OriginOffset = {
	top: number
	left: number
}

type GridItemProps = {
	delayPerPixel: number
	i: number
	originIndex: number
	originOffset: MutableRefObject<OriginOffset>
}

const gridClass = `
	bg-gradient-to-b from-background to-slate-500 
	grid grid-cols-6 md:grid-cols-8 lg:grid-cols-24 xl:grid-cols-24 
	gap-[0px] h-screen overflow-hidden
	`
export function Grid() {
	const delayPerPixel = 0.0008
	const originOffset = useRef({ top: 0, left: 0 })
	const controls = useAnimation()
	const { checked } = useToggleMode()

	useEffect(() => {
		controls.start('visible')
	}, [checked, controls, originOffset])

	return (
		<motion.div
			className={gridClass}
			initial='hidden'
			animate={controls}
			variants={{}}>
			{Array.from({ length: 500 }).map((_, i) => (
				<GridItem
					key={i}
					i={i}
					originIndex={232}
					delayPerPixel={delayPerPixel}
					originOffset={originOffset}
				/>
			))}
		</motion.div>
	)
}

function GridItem({
	delayPerPixel,
	i,
	originIndex,
	originOffset,
}: GridItemProps) {
	const delayRef = useRef(0)
	const offset = useRef({ top: 0, left: 0 })
	const ref = useRef<HTMLDivElement>()

	useLayoutEffect(() => {
		const element = ref.current
		if (!element) return

		offset.current = {
			top: element.offsetTop,
			left: element.offsetLeft,
		}

		if (i === originIndex) {
			originOffset.current = offset.current
		}
	}, [delayPerPixel, i, originIndex, originOffset])

	useEffect(() => {
		const dx = Math.abs(offset.current.left - originOffset.current.left)
		const dy = Math.abs(offset.current.top - originOffset.current.top)
		const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
		delayRef.current = d * delayPerPixel
	}, [delayPerPixel, originOffset])

	return (
		<Box
			className='col-span-1 h-[64px] sm:h-[100px] md:h-[96px] lg:h-[42px] xl:h-[56px] bg-background rounded-[3px] transition-all duration-1000'
			ref={ref}
			variants={itemVariants}
			custom={delayRef}
		/>
	)
}

const itemVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: (delayRef: MutableRefObject<number>) => ({
		opacity: 1,
		scale: 1,
		transition: { delay: delayRef.current },
	}),
}

type BoxProps = {
	ref: MutableRefObject<any>
	variants: typeof itemVariants
	custom: MutableRefObject<number>
}

const Box = tw(motion.div)<BoxProps>``
