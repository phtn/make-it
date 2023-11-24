'use client'

import useToggleMode from '@/app/_utils/hooks/useToggleMode'
import { MoonStar, Sun, NavContainer, Brand } from './styled'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'
import { map } from '@/app/_utils/helpers'
import Image from 'next/image'
import { ToggleProps } from './types'

import { HomeMenu } from './home-nav/home-nav'
import Menu from '../menu'
import Link from 'next/link'

const Navbar = () => {
	const { checked, toggleMode } = useToggleMode()

	return (
		<NavContainer>
			{/* <Brand>
				<Link href={'/'}>
					<Image
						src={'/logo/logo-v1.svg'}
						height={200}
						width={200}
						alt='logo'
						className='h-7 w-auto'
					/>
				</Link>
			</Brand> */}
			<HomeMenu />

			<Menu />
			<div className='flex items-center justify-center w-56'>
				<Mode
					checked={checked}
					toggleMode={toggleMode}
				/>
			</div>
		</NavContainer>
	)
}

const Mode = ({ checked, toggleMode }: ToggleProps) => {
	return (
		<ToggleMode
			checked={checked}
			toggleMode={toggleMode}
		/>
	)
}

const DarkLogo = () => (
	<Image
		placeholder='blur'
		blurDataURL='/logo/Outsourcee_Logo_white.webp'
		alt='logo'
		src='/logo/Outsourcee_Logo_white.png'
		height={400}
		width={400}
		className='md:h-16 h-12 w-auto '
	/>
)

const LightLogo = () => (
	<Image
		placeholder='blur'
		blurDataURL='/logo/Outsourcee_Logo_black.webp'
		alt='logo'
		src='/logo/Outsourcee_Logo.png'
		height={400}
		width={400}
		className='md:h-16 h-12 w-auto '
	/>
)

const ToggleMode = ({ checked, toggleMode }: ToggleProps) => {
	const IconOptions = useCallback(() => {
		const icons = map(<Sun />, <MoonStar />)
		return <>{icons.get(checked)}</>
	}, [checked])

	return (
		<Button
			size='icon'
			variant='ghost'
			className='text-foreground'
			onClick={toggleMode}>
			<IconOptions />
		</Button>
	)
}

const SwitchMode = () => {
	const { checked, toggleMode } = useToggleMode()

	return (
		<Switch
			checked={checked}
			onCheckedChange={toggleMode}
		/>
	)
}

export default Navbar
