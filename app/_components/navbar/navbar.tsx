'use client'

import useToggleMode from '@/app/_utils/hooks/useToggleMode'
import { Moon, Sun, NavContainer } from './styled'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'
import { map } from '@/app/_utils/helpers'
import { ToggleProps } from './types'
import { Brand } from './brand'
import { HelpCircleIcon, MessageSquareIcon, UserCircleIcon } from 'lucide-react'
import dynamic from 'next/dynamic'

const Menu = dynamic(() => import('../menu'))

const Navbar = () => {

	const toggleProps = useToggleMode()
   
	return (
		<NavContainer>

		  <Brand />
      <Menu />
      <Settings toggleProps={toggleProps} user={() => null} />
			
		</NavContainer>
	)
}

const modeClass = 'h-5 w-5 text-cyan-100 -rotate-6 hover:rotate-6 hover:text-cyan-50 hover:scale-[115%] transition-all duration-500'
const iconClass = 'h-5 w-5 text-cyan-100 hover:text-cyan-50 hover:scale-[115%] transition-all duration-500'

const ToggleMode = ({ checked, toggleMode }: ToggleProps) => {
	const IconOptions = useCallback(() => {
		const icons = map(<Sun />, <Moon />)
		return <>{icons.get(checked)}</>
	}, [checked])

	return (
		<Button
			size='icon'
			variant='ghost'
			className={modeClass}
			onClick={toggleMode}>
			<IconOptions />
		</Button>
	)
}

const User = ({onClick}: {onClick: () => void}) => (
  <Button
    onClick={onClick}
    variant={'ghost'}
    size='icon'>
    <UserCircleIcon className={iconClass} />
  </Button>
)

type SettingsProps = {
  toggleProps: ToggleProps
  user: () => void
}

const Settings = ({toggleProps, user}: SettingsProps) => (
  <div className='flex items-center justify-evenly md:w-[280px]'>

    <Button
      onClick={user}
      variant={'ghost'}
      size='icon'>
      <MessageSquareIcon className={'text-transparent'} />
    </Button>
    <Button
      onClick={user}
      variant={'ghost'}
      size='icon'>
      <HelpCircleIcon className={iconClass} />
    </Button>
    <ToggleMode {...toggleProps}/>
    <User onClick={user} />
	</div>
)

export default Navbar
