import { MoonIcon, SunIcon } from 'lucide-react'
import tw from 'tailwind-styled-components'

const NavContainer = tw.div`
  flex
  w-full
  items-center 
  justify-between
  absolute
  top-0
  bg-foreground/30
  dark:bg-background/40
  backdrop-blur-lg
  z-50
  h-[64px]
  md:px-6
`

const Moon = tw(MoonIcon)`
  h-5 w-5
`

const Sun = tw(SunIcon)`
  h-5 w-5
`

export { NavContainer, Moon, Sun }
