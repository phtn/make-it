import { MoonStarIcon, SunIcon } from 'lucide-react'
import tw from 'tailwind-styled-components'

const NavContainer = tw.div`
  flex
  w-full
  items-center 
  justify-between
  absolute
  top-0
  bg-foreground/30
  dark:bg-background/30
  backdrop-blur-lg
  z-50
  h-[64px]
`

const MoonStar = tw(MoonStarIcon)`
  h-4 w-4
`

const Sun = tw(SunIcon)`
  h-4 w-4
`

export { NavContainer, MoonStar, Sun }
