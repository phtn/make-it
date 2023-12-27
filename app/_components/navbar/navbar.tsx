'use client'

import useToggleMode from '@/app/_utils/hooks/useToggleMode'
import { MoonStar, Sun, NavContainer } from './styled'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'
import { map } from '@/app/_utils/helpers'
import { ToggleProps } from './types'
import { HomeMenu } from './home-nav/home-nav'
import { User2 } from 'lucide-react'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'

const Menu = dynamic(() => import('../menu'))

const Navbar = () => {
	const { checked, toggleMode } = useToggleMode()

	const login = () => {
		toast('Working on it', {
			description: 'Give me a day.',
		})
	}

	return (
		<NavContainer>

		<HomeMenu />
			<Menu />
			<div className='flex items-center justify-evenly w-32 md:w-56'>
				<Mode
					checked={checked}
					toggleMode={toggleMode}
				/>
				<Button
					onClick={login}
					variant={'ghost'}
					size='icon'>
					<User2 className='h-4 w-4' />
				</Button>
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

export default Navbar
