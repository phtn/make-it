'use client'
import Godrays from '../godrays'
import { BodyContainer } from './styled'
import dynamic from 'next/dynamic'

const Landing = dynamic(() => import('../landing'))

const Body = () => (
	<BodyContainer>
		<Godrays />
		<Landing />
	</BodyContainer>
)

export default Body
