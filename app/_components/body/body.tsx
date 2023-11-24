'use client'
import Landing from '../landing/landing'
import { BodyContainer } from './styled'
import { Grid } from '../motion/grid'
import './rays.css'

const Body = () => (
	<BodyContainer>
		<GodRays />
		<Landing />
	</BodyContainer>
)

const GodRays = () => (
	<div className='relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg'>
		<div className='absolute inset-0 overflow-hidden'>
			<div className='jumbo absolute -inset-[10px] opacity-50'></div>
		</div>
		<div className='mt-4'></div>
	</div>
)
export default Body
